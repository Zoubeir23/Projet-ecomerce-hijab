'use client'

import { useState, useEffect } from 'react'
import React from 'react'
import { CartNotification } from '@/types'

import Toast from 'react-bootstrap/Toast'
import ToastContainer from 'react-bootstrap/ToastContainer'

export interface NotificationProps {
  id: string
  title: string
  message: string
  type: 'success' | 'error' | 'warning' | 'info'
  duration?: number
}

interface NotificationSystemProps {
  notifications: NotificationProps[]
  onRemove: (id: string) => void
}

export const NotificationSystem: React.FC<NotificationSystemProps> = ({ 
  notifications, 
  onRemove 
}) => {
  return (
    <ToastContainer position="top-end" className="p-3" style={{ zIndex: 9999 }}>
      {notifications.map((notification) => (
        <NotificationToast
          key={notification.id}
          notification={notification}
          onClose={() => onRemove(notification.id)}
        />
      ))}
    </ToastContainer>
  )
}

interface NotificationToastProps {
  notification: NotificationProps
  onClose: () => void
}

const NotificationToast: React.FC<NotificationToastProps> = ({ 
  notification, 
  onClose 
}) => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    if (notification.duration && notification.duration > 0) {
      const timer = setTimeout(() => {
        setShow(false)
        setTimeout(onClose, 150) // Délai pour l'animation de fermeture
      }, notification.duration)

      return () => clearTimeout(timer)
    }
  }, [notification.duration, onClose])

  const getIcon = () => {
    switch (notification.type) {
      case 'success':
        return 'bi-check-circle-fill text-success'
      case 'error':
        return 'bi-x-circle-fill text-danger'
      case 'warning':
        return 'bi-exclamation-triangle-fill text-warning'
      case 'info':
        return 'bi-info-circle-fill text-info'
      default:
        return 'bi-info-circle-fill text-info'
    }
  }

  const getBgClass = () => {
    switch (notification.type) {
      case 'success':
        return 'bg-success'
      case 'error':
        return 'bg-danger'
      case 'warning':
        return 'bg-warning'
      case 'info':
        return 'bg-info'
      default:
        return 'bg-info'
    }
  }

  return (
    <Toast 
      show={show} 
      onClose={() => {
        setShow(false)
        setTimeout(onClose, 150)
      }}
      className="border-0 shadow"
    >
      <Toast.Header className={`${getBgClass()} text-white border-0`}>
        <i className={`${getIcon()} me-2`}></i>
        <strong className="me-auto">{notification.title}</strong>
      </Toast.Header>
      <Toast.Body>
        {notification.message}
      </Toast.Body>
    </Toast>
  )
}

// Hook pour gérer les notifications
export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationProps[]>([])

  const addNotification = (
    title: string,
    message: string,
    type: NotificationProps['type'] = 'info',
    duration: number = 5000
  ) => {
    const id = `notification-${Date.now()}-${Math.random()}`
    const notification: NotificationProps = {
      id,
      title,
      message,
      type,
      duration
    }

    setNotifications(prev => [...prev, notification])
    return id
  }

  const removeNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id))
  }

  const clearAll = () => {
    setNotifications([])
  }

  // Méthodes de convenance
  const success = (title: string, message: string, duration?: number) => 
    addNotification(title, message, 'success', duration)

  const error = (title: string, message: string, duration?: number) => 
    addNotification(title, message, 'error', duration)

  const warning = (title: string, message: string, duration?: number) => 
    addNotification(title, message, 'warning', duration)

  const info = (title: string, message: string, duration?: number) => 
    addNotification(title, message, 'info', duration)

  return {
    notifications,
    addNotification,
    removeNotification,
    clearAll,
    success,
    error,
    warning,
    info
  }
}