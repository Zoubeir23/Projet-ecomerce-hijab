export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  images: string[];
  colors: Color[];
  sizes: Size[];
  materials: string[];
  inStock: boolean;
  featured: boolean;
  isNew?: boolean;
  discount?: number;
  tags: string[];
}

export interface ProductCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
}

export interface Color {
  name: string;
  value: string;
  image?: string;
}

export interface Size {
  name: string;
  value: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor: Color;
  selectedSize: Size;
}

export interface ContactInfo {
  whatsapp: string;
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    country: string;
  };
  hours: string[];
}

export interface SiteSettings {
  siteName: string;
  tagline: string;
  description: string;
  logo: string;
  contact: ContactInfo;
  socialMedia: {
    instagram?: string;
    facebook?: string;
    tiktok?: string;
  };
}