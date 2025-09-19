'use client'

import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'

interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  featured: boolean
  images: string[]
}

export default function FeaturedProductsFixed() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simuler le chargement des produits
    const loadProducts = async () => {
      try {
        // Pour éviter les erreurs de sérialisation, nous utilisons des données en dur
        const mockProducts: Product[] = [
          {
            id: "hijab-soie-premium-001",
            name: "Hijab Soie Premium - Collection Élégance",
            price: 25000,
            originalPrice: 30000,
            featured: true,
            images: ["/images/products/hijab-soie-premium-001-1.jpg"]
          },
          {
            id: "abaya-moderne-002",
            name: "Abaya Moderne - Style Contemporain",
            price: 45000,
            originalPrice: 55000,
            featured: true,
            images: ["/images/products/abaya-moderne-002-1.jpg"]
          },
          {
            id: "khimar-elegant-003",
            name: "Khimar Élégant - Coupe Parfaite",
            price: 20000,
            featured: true,
            images: ["/images/products/khimar-elegant-003-1.jpg"]
          }
        ]
        
        setProducts(mockProducts)
        setLoading(false)
      } catch (error) {
        console.error('Erreur lors du chargement des produits:', error)
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  if (loading) {
    return (
      <Container className="my-5">
        <div className="text-center">
          <p>Chargement des produits...</p>
        </div>
      </Container>
    )
  }

  return (
    <section className="py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Produits Vedettes</h2>
            <p className="lead text-muted">
              Découvrez notre sélection de produits les plus appréciés par nos clientes
            </p>
          </Col>
        </Row>
        
        <Row>
          {products.map((product) => (
            <Col md={6} lg={4} key={product.id} className="mb-4">
              <Card className="h-100 shadow-sm border-0 product-card">
                <div className="position-relative">
                  <Card.Img 
                    variant="top" 
                    src={product.images[0]} 
                    alt={product.name}
                    style={{ height: '300px', objectFit: 'cover' }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement
                      target.src = '/images/placeholder-product.jpg'
                    }}
                  />
                  {product.originalPrice && (
                    <Badge 
                      bg="danger" 
                      className="position-absolute top-0 start-0 m-2"
                    >
                      -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                    </Badge>
                  )}
                </div>
                
                <Card.Body>
                  <Card.Title className="h6 mb-2">{product.name}</Card.Title>
                  
                  <div className="d-flex align-items-center mb-3">
                    <span className="h5 mb-0 text-primary me-2">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-muted text-decoration-line-through small">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  <div className="d-grid">
                    <Link href={`/produits/${product.id}`} passHref>
                      <Button variant="outline-primary" size="sm">
                        Voir les détails
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}