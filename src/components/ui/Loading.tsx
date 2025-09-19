import Spinner from 'react-bootstrap/Spinner'

interface LoadingProps {
  size?: 'sm'
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'
  text?: string
  fullScreen?: boolean
}

export const Loading: React.FC<LoadingProps> = ({ 
  size, 
  variant = 'primary', 
  text = 'Chargement...',
  fullScreen = false 
}) => {
  if (fullScreen) {
    return (
      <div 
        className="d-flex flex-column align-items-center justify-content-center position-fixed w-100 h-100 bg-white"
        style={{ top: 0, left: 0, zIndex: 9999 }}
      >
        <Spinner animation="border" variant={variant} size={size} />
        <p className="mt-3 text-muted">{text}</p>
      </div>
    )
  }

  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-4">
      <Spinner animation="border" variant={variant} size={size} />
      {text && <p className="mt-2 text-muted mb-0">{text}</p>}
    </div>
  )
}

export const LoadingSkeleton: React.FC = () => {
  return (
    <div className="loading-skeleton rounded p-3 mb-3" style={{ height: '200px' }}>
      <div className="h-100 d-flex align-items-center justify-content-center">
        <span className="text-muted">Chargement...</span>
      </div>
    </div>
  )
}