export interface SiteConfig {
  siteName: string
  tagline: string
  description: string
  logo: string
  contact: {
    whatsapp: string
    phone: string
    email: string
    address: {
      street: string
      city: string
      country: string
    } | string
    hours: string[] | string
  }
  socialMedia: {
    instagram: string
    facebook: string
    tiktok: string
  }
  shipping?: {
    freeShippingThreshold: number
    standardFee: number
    areas: {
      dakar: {
        name: string
        deliveryTime: string
        fee: number
      }
      senegal: {
        name: string
        deliveryTime: string
        fee: number
      }
    }
  }
}