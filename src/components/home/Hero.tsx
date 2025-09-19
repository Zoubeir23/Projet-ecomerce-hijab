'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-background">
        <Image
          src="/image/img-01.jpg"
          alt="Hijabs colorés élégants"
          fill
          className="hero-image"
          priority
        />
        <div className="hero-overlay"></div>
      </div>
      
      <Container className="hero-content">
        <Row className="align-items-center min-vh-100">
          <Col lg={6} className="text-center text-lg-start">
            <div className="hero-text">
              <h1 className="hero-title">
                <span className="title-line-1">Élégance</span>
                <span className="title-line-2">& Modestie</span>
                <span className="title-line-3">Réunies</span>
              </h1>
              
              <p className="hero-subtitle">
                Découvrez notre collection exclusive de hijabs et voiles, 
                soigneusement sélectionnés pour allier beauté, confort et respect des traditions.
              </p>
              
              <div className="hero-stats mb-4">
                <div className="stat-item">
                  <span className="stat-number">500+</span>
                  <span className="stat-label">Clientes satisfaites</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Modèles disponibles</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24h</span>
                  <span className="stat-label">Livraison Dakar</span>
                </div>
              </div>
              
              <div className="hero-buttons">
                <Button size="lg" className="btn-primary-elegant me-3">
                  <i className="bi bi-bag me-2"></i>
                  Découvrir la Collection
                </Button>
                <Button size="lg" variant="outline-light" className="btn-outline-elegant">
                  <i className="bi bi-play-circle me-2"></i>
                  Voir le Lookbook
                </Button>
              </div>
            </div>
          </Col>
          
          <Col lg={6} className="d-none d-lg-block">
            <div className="hero-product-showcase">
              <div className="showcase-item showcase-main">
                <Image
                  src="/image/img-02.jpg"
                  alt="Hijab premium"
                  width={300}
                  height={400}
                  className="showcase-image"
                />
                <div className="showcase-badge">Nouveauté</div>
              </div>
              
              <div className="showcase-item showcase-secondary">
                <Image
                  src="/image/img-03.jpg"
                  alt="Collection automne"
                  width={200}
                  height={250}
                  className="showcase-image"
                />
              </div>
              
              <div className="showcase-item showcase-tertiary">
                <Image
                  src="/image/img-04.jpg"
                  alt="Accessoires"
                  width={150}
                  height={200}
                  className="showcase-image"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-text">Découvrir</div>
        <div className="scroll-arrow">
          <i className="bi bi-chevron-down"></i>
        </div>
      </div>
    </section>
  )
}