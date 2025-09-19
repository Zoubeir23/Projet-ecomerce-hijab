import { Product, ProductCategory } from '@/types'

// Cache pour éviter de recharger les données à chaque fois
let cachedProducts: Product[] | null = null
let cachedCategories: ProductCategory[] | null = null
let cachedSiteConfig: any | null = null

export async function getProducts(): Promise<Product[]> {
  if (cachedProducts) return cachedProducts
  
  try {
    const { default: products } = await import('@/data/products.json')
    cachedProducts = products
    return products
  } catch (error) {
    console.error('Erreur lors du chargement des produits:', error)
    return []
  }
}

export async function getCategories(): Promise<ProductCategory[]> {
  if (cachedCategories) return cachedCategories
  
  try {
    const { default: categories } = await import('@/data/categories.json')
    cachedCategories = categories
    return categories
  } catch (error) {
    console.error('Erreur lors du chargement des catégories:', error)
    return []
  }
}

export async function getSiteConfig(): Promise<any> {
  if (cachedSiteConfig) return cachedSiteConfig
  
  try {
    const { default: siteConfig } = await import('@/data/site-config.json')
    cachedSiteConfig = siteConfig
    return siteConfig
  } catch (error) {
    console.error('Erreur lors du chargement de la configuration:', error)
    return {
      siteName: 'Hijab Élégance Dakar',
      tagline: 'Votre boutique de mode islamique au Sénégal',
      contact: {
        whatsapp: '+221781234567',
        phone: '+221781234567',
        email: 'contact@hijabelegancedakar.com',
        address: {
          street: 'Avenue Léopold Sédar Senghor',
          city: 'Plateau, Dakar',
          country: 'Sénégal'
        }
      }
    }
  }
}

export function getFeaturedProducts(products: Product[]): Product[] {
  return products.filter(product => product.featured).slice(0, 6)
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
}