'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function SpecialOffer() {
  return (
    <section className="special-offer-section py-5">
      <Container>
        <div className="offer-card">
          <Row className="align-items-center g-0">
            <Col lg={6}>
              <div className="offer-content">
                <div className="offer-badge">
                  <i className="bi bi-gift"></i>
                  Offre Spéciale
                </div>
                
                <h2 className="offer-title">
                  Collection Ramadan
                  <span className="highlight">-30%</span>
                </h2>
                
                <p className="offer-description">
                  Préparez-vous pour le mois sacré avec notre collection exclusive. 
                  Hijabs premium en soie et coton, parfaits pour vos prières et célébrations.
                </p>
                
                <div className="offer-features">
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Livraison gratuite à Dakar</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Emballage cadeau offert</span>
                  </div>
                  <div className="feature-item">
                    <i className="bi bi-check-circle-fill"></i>
                    <span>Garantie satisfaction 100%</span>
                  </div>
                </div>
                
                <div className="offer-countdown">
                  <span className="countdown-label">Offre limitée :</span>
                  <div className="countdown-timer">
                    <div className="time-unit">
                      <span className="time-number">15</span>
                      <span className="time-label">Jours</span>
                    </div>
                    <div className="time-separator">:</div>
                    <div className="time-unit">
                      <span className="time-number">08</span>
                      <span className="time-label">Heures</span>
                    </div>
                    <div className="time-separator">:</div>
                    <div className="time-unit">
                      <span className="time-number">42</span>
                      <span className="time-label">Minutes</span>
                    </div>
                  </div>
                </div>
                
                <div className="offer-buttons">
                  <Button size="lg" className="btn-primary-elegant me-3">
                    <i className="bi bi-bag me-2"></i>
                    Profiter de l'Offre
                  </Button>
                  <Button size="lg" variant="outline-primary">
                    En Savoir Plus
                  </Button>
                </div>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="offer-image-wrapper">
                <div className="offer-image-main">
                  <Image
                    src="/image/img-15.jpg"
                    alt="Collection Ramadan"
                    width={500}
                    height={600}
                    className="offer-image"
                  />
                </div>
                
                <div className="offer-floating-elements">
                  <div className="floating-discount">
                    <span className="discount-percent">30%</span>
                    <span className="discount-text">OFF</span>
                  </div>
                  
                  <div className="floating-badge">
                    <i className="bi bi-star-fill"></i>
                    <span>Premium</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  )
}