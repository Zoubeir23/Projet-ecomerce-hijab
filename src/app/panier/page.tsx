'use client'

import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Table from 'react-bootstrap/Table'
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import siteConfig from '@/data/site-config.json'

interface CartItem {
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

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<{code: string, discount: number} | null>(null)

  // Simulation de données du panier (à remplacer par un state management réel)
  useEffect(() => {
    // Simulation de produits dans le panier
    const mockCartItems: CartItem[] = [
      {
        id: 'hijab-soie-premium-001',
        name: 'Hijab Soie Premium - Collection Élégance',
        price: 25000,
        originalPrice: 30000,
        color: '#000000',
        colorName: 'Noir Élégant',
        size: 'standard',
        sizeName: 'Standard',
        quantity: 2,
        image: '/images/products/hijab-soie-premium-001-1.jpg',
        inStock: true
      },
      {
        id: 'abaya-moderne-003',
        name: 'Abaya Moderne - Coupe Droite',
        price: 45000,
        originalPrice: 55000,
        color: '#000000',
        colorName: 'Noir Classique',
        size: 'M',
        sizeName: 'M (40-42)',
        quantity: 1,
        image: '/images/products/abaya-moderne-003-1.jpg',
        inStock: true
      }
    ]
    setCartItems(mockCartItems)
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const updateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items => 
      items.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (itemId: string) => {
    setCartItems(items => items.filter(item => item.id !== itemId))
  }

  const applyCoupon = () => {
    // Simulation de codes promo
    const validCoupons = {
      'BIENVENUE10': 10,
      'RAMADAN20': 20,
      'FIDELE15': 15
    }
    
    if (validCoupons[couponCode as keyof typeof validCoupons]) {
      setAppliedCoupon({
        code: couponCode,
        discount: validCoupons[couponCode as keyof typeof validCoupons]
      })
      setCouponCode('')
    }
  }

  const removeCoupon = () => {
    setAppliedCoupon(null)
  }

  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  const discountAmount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0
  const total = subtotal - discountAmount
  const deliveryFee = total > 50000 ? 0 : 2000 // Livraison gratuite au-dessus de 50 000 FCFA

  const handleWhatsAppCheckout = () => {
    const itemsList = cartItems.map(item => 
      `• ${item.name}\n  Couleur: ${item.colorName}\n  Taille: ${item.sizeName}\n  Quantité: ${item.quantity}\n  Prix: ${formatPrice(item.price * item.quantity)}`
    ).join('\n\n')

    const message = encodeURIComponent(
      `🛒 COMMANDE PANIER\n\n` +
      `${itemsList}\n\n` +
      `💰 RÉCAPITULATIF:\n` +
      `Sous-total: ${formatPrice(subtotal)}\n` +
      (appliedCoupon ? `Réduction (${appliedCoupon.code}): -${formatPrice(discountAmount)}\n` : '') +
      (deliveryFee > 0 ? `Livraison: ${formatPrice(deliveryFee)}\n` : 'Livraison: GRATUITE\n') +
      `TOTAL: ${formatPrice(total + deliveryFee)}\n\n` +
      `Je souhaite finaliser cette commande. Merci !`
    )
    
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (cartItems.length === 0) {
    return (
      <>
        <Header />
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col lg={6}>
              <div className="py-5">
                <i className="bi bi-cart-x display-1 text-muted mb-4"></i>
                <h2 className="mb-3">Votre panier est vide</h2>
                <p className="text-muted mb-4">
                  Découvrez notre magnifique collection de hijabs et abayas
                </p>
                <Link href="/produits" className="btn btn-primary btn-lg">
                  <i className="bi bi-bag me-2"></i>
                  Découvrir nos produits
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Row>
            <Col>
              <h1 className="h2 fw-bold mb-4">Mon Panier</h1>
            </Col>
          </Row>

          <Row className="g-4">
            {/* Articles du panier */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0 pb-0">
                  <h5 className="mb-0">Articles ({cartItems.length})</h5>
                </Card.Header>
                <Card.Body>
                  {cartItems.map((item) => (
                    <div key={`${item.id}-${item.color}-${item.size}`} className="cart-item py-3 border-bottom">
                      <Row className="align-items-center">
                        <Col md={2}>
                          <div 
                            className="bg-light rounded"
                            style={{ height: '80px', width: '80px' }}
                          >
                            <div className="d-flex align-items-center justify-content-center h-100">
                              <i className="bi bi-image text-muted"></i>
                            </div>
                          </div>
                        </Col>
                        
                        <Col md={5}>
                          <h6 className="fw-bold mb-1">{item.name}</h6>
                          <div className="d-flex align-items-center gap-3 mb-2">
                            <div className="d-flex align-items-center">
                              <div 
                                className="color-option me-2"
                                style={{ 
                                  backgroundColor: item.color,
                                  width: '20px',
                                  height: '20px',
                                  borderRadius: '50%',
                                  border: '1px solid #dee2e6'
                                }}
                              ></div>
                              <small className="text-muted">{item.colorName}</small>
                            </div>
                            <small className="text-muted">Taille: {item.sizeName}</small>
                          </div>
                          {!item.inStock && (
                            <Badge bg="danger">Rupture de stock</Badge>
                          )}
                        </Col>
                        
                        <Col md={2}>
                          <div className="d-flex align-items-center justify-content-center">
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              -
                            </Button>
                            <span className="mx-2 fw-bold">{item.quantity}</span>
                            <Button 
                              variant="outline-secondary" 
                              size="sm"
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                              +
                            </Button>
                          </div>
                        </Col>
                        
                        <Col md={2} className="text-end">
                          <div className="fw-bold">
                            {formatPrice(item.price * item.quantity)}
                          </div>
                          {item.originalPrice && (
                            <small className="text-muted text-decoration-line-through">
                              {formatPrice(item.originalPrice * item.quantity)}
                            </small>
                          )}
                        </Col>
                        
                        <Col md={1} className="text-end">
                          <Button 
                            variant="outline-danger" 
                            size="sm"
                            onClick={() => removeItem(item.id)}
                          >
                            <i className="bi bi-trash"></i>
                          </Button>
                        </Col>
                      </Row>
                    </div>
                  ))}
                  
                  <div className="pt-3">
                    <Link href="/produits" className="btn btn-outline-primary">
                      <i className="bi bi-arrow-left me-2"></i>
                      Continuer mes achats
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* Résumé de commande */}
            <Col lg={4}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0">
                  <h5 className="mb-0">Résumé de commande</h5>
                </Card.Header>
                <Card.Body>
                  {/* Code promo */}
                  <div className="mb-4">
                    <Form.Label>Code promo</Form.Label>
                    <div className="d-flex gap-2">
                      <Form.Control
                        type="text"
                        placeholder="Entrez votre code"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value.toUpperCase())}
                      />
                      <Button 
                        variant="outline-primary"
                        onClick={applyCoupon}
                        disabled={!couponCode}
                      >
                        Appliquer
                      </Button>
                    </div>
                    {appliedCoupon && (
                      <div className="mt-2 p-2 bg-success bg-opacity-10 rounded d-flex justify-content-between align-items-center">
                        <small className="text-success">
                          <i className="bi bi-check-circle me-1"></i>
                          Code {appliedCoupon.code} appliqué (-{appliedCoupon.discount}%)
                        </small>
                        <Button 
                          variant="link" 
                          size="sm" 
                          className="p-0 text-success"
                          onClick={removeCoupon}
                        >
                          <i className="bi bi-x"></i>
                        </Button>
                      </div>
                    )}
                  </div>

                  {/* Détail des prix */}
                  <div className="border-bottom pb-3 mb-3">
                    <div className="d-flex justify-content-between mb-2">
                      <span>Sous-total</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    
                    {appliedCoupon && (
                      <div className="d-flex justify-content-between mb-2 text-success">
                        <span>Réduction ({appliedCoupon.code})</span>
                        <span>-{formatPrice(discountAmount)}</span>
                      </div>
                    )}
                    
                    <div className="d-flex justify-content-between">
                      <span>Livraison</span>
                      <span>
                        {deliveryFee === 0 ? (
                          <span className="text-success">GRATUITE</span>
                        ) : (
                          formatPrice(deliveryFee)
                        )}
                      </span>
                    </div>
                    
                    {deliveryFee > 0 && (
                      <small className="text-muted">
                        Livraison gratuite à partir de 50 000 FCFA
                      </small>
                    )}
                  </div>

                  <div className="d-flex justify-content-between fw-bold fs-5 mb-4">
                    <span>Total</span>
                    <span className="price-text">{formatPrice(total + deliveryFee)}</span>
                  </div>

                  <div className="d-grid gap-3">
                    <Button 
                      variant="success" 
                      size="lg"
                      onClick={handleWhatsAppCheckout}
                    >
                      <i className="bi bi-whatsapp me-2"></i>
                      Commander sur WhatsApp
                    </Button>
                    
                    <Button variant="outline-primary" size="lg" disabled>
                      <i className="bi bi-credit-card me-2"></i>
                      Paiement en ligne
                      <small className="d-block">Bientôt disponible</small>
                    </Button>
                  </div>

                  <div className="mt-3 text-center">
                    <small className="text-muted">
                      <i className="bi bi-shield-check me-1"></i>
                      Paiement 100% sécurisé
                    </small>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}