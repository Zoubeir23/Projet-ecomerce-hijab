import { SiteConfig } from '@/types/config'

interface AddressDisplayProps {
  address: SiteConfig['contact']['address']
  className?: string
}

export const AddressDisplay: React.FC<AddressDisplayProps> = ({ address, className = "" }) => {
  if (typeof address === 'string') {
    return <span className={className}>{address}</span>
  }

  return (
    <span className={className}>
      {address.street}<br />
      {address.city}, {address.country}
    </span>
  )
}

interface HoursDisplayProps {
  hours: SiteConfig['contact']['hours']
  className?: string
}

export const HoursDisplay: React.FC<HoursDisplayProps> = ({ hours, className = "" }) => {
  if (typeof hours === 'string') {
    return <div className={className}>{hours}</div>
  }

  return (
    <div className={className}>
      {hours.map((hour, index) => (
        <p key={index} className="mb-1">{hour}</p>
      ))}
    </div>
  )
}