'use client'

import React, { createContext, useContext, useReducer, ReactNode } from 'react'

export interface CartItem {
  id: string
  name: string
  price: number
  originalPrice?: number
  color: string
  colorName: string
  size: string
  sizeName: string
  quantity: number
  image: string
  inStock: boolean
}

interface CartState {
  items: CartItem[]
  totalItems: number
  totalPrice: number
}

type CartAction =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: string }
  | { type: 'UPDATE_QUANTITY'; payload: { id: string; quantity: number } }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  state: CartState
  addItem: (item: CartItem) => void
  removeItem: (id: string) => void
  updateQuantity: (id: string, quantity: number) => void
  clearCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        item => 
          item.id === action.payload.id && 
          item.color === action.payload.color && 
          item.size === action.payload.size
      )

      if (existingItemIndex > -1) {
        const newItems = [...state.items]
        newItems[existingItemIndex].quantity += action.payload.quantity
        return calculateTotals({ ...state, items: newItems })
      } else {
        return calculateTotals({ 
          ...state, 
          items: [...state.items, action.payload] 
        })
      }
    }

    case 'REMOVE_ITEM': {
      const newItems = state.items.filter(item => 
        `${item.id}-${item.color}-${item.size}` !== action.payload
      )
      return calculateTotals({ ...state, items: newItems })
    }

    case 'UPDATE_QUANTITY': {
      const newItems = state.items.map(item =>
        `${item.id}-${item.color}-${item.size}` === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      )
      return calculateTotals({ ...state, items: newItems })
    }

    case 'CLEAR_CART': {
      return {
        items: [],
        totalItems: 0,
        totalPrice: 0
      }
    }

    default:
      return state
  }
}

const calculateTotals = (state: CartState): CartState => {
  const totalItems = state.items.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  
  return {
    ...state,
    totalItems,
    totalPrice
  }
}

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
}

interface CartProviderProps {
  children: ReactNode
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  const addItem = (item: CartItem) => {
    dispatch({ type: 'ADD_ITEM', payload: item })
  }

  const removeItem = (id: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } })
    } else {
      removeItem(id)
    }
  }

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const value: CartContextType = {
    state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart
  }

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = (): CartContextType => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

// Hook pour formater les prix
export const useFormatPrice = () => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  return { formatPrice }
}