import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps {
  children: React.ReactNode
  className?: string
}

interface CardBodyProps {
  children: React.ReactNode
  className?: string
}

export const Card: React.FC<CardProps> & {
  Header: React.FC<CardHeaderProps>
  Body: React.FC<CardBodyProps>
} = ({ children, className = '' }) => {
  return (
    <div className={`card ${className}`}>
      {children}
    </div>
  )
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`card-header ${className}`}>
      {children}
    </div>
  )
}

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={`card-body ${className}`}>
      {children}
    </div>
  )
}

Card.Header = CardHeader
Card.Body = CardBody

export default Card