'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import { Product } from '@/types'
import productsData from '@/data/products.json'

export default function FeaturedProducts() {
  // Filtrer les produits mis en avant
  const featuredProducts = productsData.filter(product => product.featured).slice(0, 6)

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
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
        
        <Row className="g-4">
          {featuredProducts.map((product: Product) => (
            <Col md={6} lg={4} key={product.id}>
              <Card className="product-card h-100 border-0 shadow-sm">
                <div className="position-relative">
                  <div 
                    className="bg-light"
                    style={{ height: '300px', backgroundColor: '#f8f9fa' }}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <i className="bi bi-image display-3 text-muted"></i>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="position-absolute top-0 start-0 m-3">
                    {product.isNew && (
                      <Badge bg="success" className="me-2">Nouveau</Badge>
                    )}
                    {product.discount && (
                      <Badge bg="danger">-{product.discount}%</Badge>
                    )}
                  </div>
                </div>
                
                <Card.Body>
                  <h6 className="card-title fw-bold">{product.name}</h6>
                  <p className="card-text text-muted small">
                    {product.description.substring(0, 100)}...
                  </p>
                  
                  {/* Prix */}
                  <div className="mb-3">
                    <span className="price-text fs-5 fw-bold">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="original-price ms-2 small">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  
                  {/* Couleurs disponibles */}
                  <div className="mb-3">
                    <small className="text-muted d-block mb-2">
                      {product.colors.length} couleur(s) disponible(s)
                    </small>
                    <div className="d-flex gap-1">
                      {product.colors.slice(0, 4).map((color, index) => (
                        <div 
                          key={index}
                          className="color-option"
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        ></div>
                      ))}
                      {product.colors.length > 4 && (
                        <small className="text-muted align-self-center ms-1">
                          +{product.colors.length - 4}
                        </small>
                      )}
                    </div>
                  </div>
                  
                  <div className="d-grid">
                    <Link href={`/produits/${product.id}`} className="text-decoration-none">
                      <Button variant="outline-primary" size="sm" className="w-100">
                        Voir les détails
                      </Button>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col className="text-center">
            <Link href="/produits" className="text-decoration-none">
              <Button variant="primary" size="lg">
                Voir tous nos produits
                <i className="bi bi-arrow-right ms-2"></i>
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  )
}