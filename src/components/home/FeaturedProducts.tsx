'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Image from 'next/image'

export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Hijab Soie Rose Poudré",
      price: "25,000",
      originalPrice: "30,000",
      image: "/image/img-09.jpg",
      isNew: true,
      discount: 17,
      rating: 4.8,
      reviews: 24
    },
    {
      id: 2,
      name: "Hijab Jersey Bleu Ciel",
      price: "15,000",
      originalPrice: "18,000",
      image: "/image/img-10.jpg",
      isNew: false,
      discount: 17,
      rating: 4.9,
      reviews: 31
    },
    {
      id: 3,
      name: "Hijab Coton Lavande",
      price: "20,000",
      image: "/image/img-11.jpg",
      isNew: true,
      rating: 4.7,
      reviews: 18
    },
    {
      id: 4,
      name: "Hijab Premium Beige",
      price: "28,000",
      originalPrice: "35,000",
      image: "/image/img-12.jpg",
      isNew: false,
      discount: 20,
      rating: 5.0,
      reviews: 42
    },
    {
      id: 5,
      name: "Hijab Satin Mint",
      price: "22,000",
      image: "/image/img-13.jpg",
      isNew: true,
      rating: 4.6,
      reviews: 15
    },
    {
      id: 6,
      name: "Hijab Crêpe Corail",
      price: "24,000",
      originalPrice: "28,000",
      image: "/image/img-14.jpg",
      isNew: false,
      discount: 14,
      rating: 4.8,
      reviews: 27
    }
  ]

  return (
    <section className="featured-products-section py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-header">
              <span className="section-subtitle">Produits Phares</span>
              <h2 className="section-title">
                Nos <span className="text-primary">Coups de Cœur</span>
              </h2>
              <p className="section-description">
                Découvrez les hijabs les plus appréciés par nos clientes, 
                sélectionnés pour leur qualité exceptionnelle et leur style intemporel.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {products.map((product) => (
            <Col md={6} lg={4} key={product.id}>
              <Card className="product-card h-100 border-0 shadow-sm">
                <div className="product-image-wrapper">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="product-image"
                  />
                  
                  <div className="product-badges">
                    {product.isNew && (
                      <Badge bg="success" className="product-badge">Nouveau</Badge>
                    )}
                    {product.discount && (
                      <Badge bg="danger" className="product-badge">-{product.discount}%</Badge>
                    )}
                  </div>
                  
                  <div className="product-actions">
                    <Button variant="light" size="sm" className="action-btn">
                      <i className="bi bi-heart"></i>
                    </Button>
                    <Button variant="light" size="sm" className="action-btn">
                      <i className="bi bi-eye"></i>
                    </Button>
                    <Button variant="primary" size="sm" className="action-btn-primary">
                      <i className="bi bi-bag-plus"></i>
                    </Button>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <div className="product-rating mb-2">
                    <div className="stars">
                      {[...Array(5)].map((_, i) => (
                        <i 
                          key={i} 
                          className={`bi bi-star${i < Math.floor(product.rating) ? '-fill' : ''}`}
                        ></i>
                      ))}
                    </div>
                    <span className="rating-text">({product.reviews})</span>
                  </div>
                  
                  <h5 className="product-name">{product.name}</h5>
                  
                  <div className="product-price">
                    <span className="current-price">{product.price} FCFA</span>
                    {product.originalPrice && (
                      <span className="original-price">{product.originalPrice} FCFA</span>
                    )}
                  </div>
                  
                  <div className="product-colors mt-3">
                    <span className="colors-label">Couleurs disponibles:</span>
                    <div className="color-options">
                      <div className="color-option" style={{backgroundColor: '#F8BBD9'}}></div>
                      <div className="color-option" style={{backgroundColor: '#87CEEB'}}></div>
                      <div className="color-option" style={{backgroundColor: '#E6E6FA'}}></div>
                      <div className="color-option" style={{backgroundColor: '#F5F5DC'}}></div>
                    </div>
                  </div>
                  
                  <Button variant="outline-primary" className="w-100 mt-3 add-to-cart-btn">
                    Ajouter au Panier
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Button size="lg" variant="primary" className="btn-view-all">
              Voir Tous les Produits
              <i className="bi bi-arrow-right ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}