import React from 'react'

// Composants Bootstrap alternatifs pour éviter les conflits SSR

export const Container: React.FC<{ children: React.ReactNode; fluid?: boolean; className?: string }> = ({ 
  children, 
  fluid = false, 
  className = '' 
}) => (
  <div className={`${fluid ? 'container-fluid' : 'container'} ${className}`}>
    {children}
  </div>
)

export const Row: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => (
  <div className={`row ${className}`}>
    {children}
  </div>
)

export const Col: React.FC<{ 
  children: React.ReactNode
  xs?: number | string
  sm?: number | string
  md?: number | string
  lg?: number | string
  xl?: number | string
  className?: string 
}> = ({ 
  children, 
  xs, 
  sm, 
  md, 
  lg, 
  xl, 
  className = '' 
}) => {
  const colClasses = []
  
  if (xs) colClasses.push(`col-${xs}`)
  if (sm) colClasses.push(`col-sm-${sm}`)
  if (md) colClasses.push(`col-md-${md}`)
  if (lg) colClasses.push(`col-lg-${lg}`)
  if (xl) colClasses.push(`col-xl-${xl}`)
  
  if (colClasses.length === 0) colClasses.push('col')
  
  return (
    <div className={`${colClasses.join(' ')} ${className}`}>
      {children}
    </div>
  )
}

export const Button: React.FC<{
  children: React.ReactNode
  variant?: string
  size?: 'sm' | 'lg'
  className?: string
  onClick?: () => void
  href?: string
  target?: string
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}> = ({ 
  children, 
  variant = 'primary', 
  size, 
  className = '', 
  onClick, 
  href, 
  target, 
  disabled = false,
  type = 'button'
}) => {
  const btnClasses = [`btn`, `btn-${variant}`]
  
  if (size) btnClasses.push(`btn-${size}`)
  if (className) btnClasses.push(className)
  
  const classes = btnClasses.join(' ')
  
  if (href) {
    return (
      <a 
        href={href} 
        target={target} 
        className={classes}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }
  
  return (
    <button 
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export const Card: React.FC<{ children: React.ReactNode; className?: string }> & {
  Header: React.FC<{ children: React.ReactNode; className?: string }>
  Body: React.FC<{ children: React.ReactNode; className?: string }>
} = ({ children, className = '' }) => (
  <div className={`card ${className}`}>
    {children}
  </div>
)

Card.Header = ({ children, className = '' }) => (
  <div className={`card-header ${className}`}>
    {children}
  </div>
)

Card.Body = ({ children, className = '' }) => (
  <div className={`card-body ${className}`}>
    {children}
  </div>
)

export const Badge: React.FC<{
  children: React.ReactNode
  bg?: string
  text?: string
  className?: string
}> = ({ children, bg = 'primary', text, className = '' }) => {
  const badgeClasses = [`badge`, `bg-${bg}`]
  
  if (text) badgeClasses.push(`text-${text}`)
  if (className) badgeClasses.push(className)
  
  return (
    <span className={badgeClasses.join(' ')}>
      {children}
    </span>
  )
}

export const Alert: React.FC<{
  children: React.ReactNode
  variant: string
  className?: string
}> = ({ children, variant, className = '' }) => (
  <div className={`alert alert-${variant} ${className}`} role="alert">
    {children}
  </div>
)