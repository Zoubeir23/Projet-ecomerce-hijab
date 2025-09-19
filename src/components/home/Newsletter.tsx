'use client'

import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simuler l'inscription
    setShowSuccess(true)
    setEmail('')
    setTimeout(() => setShowSuccess(false), 5000)
  }

  return (
    <section className="newsletter-section py-5">
      <Container>
        <div className="newsletter-card">
          <Row className="align-items-center">
            <Col lg={6}>
              <div className="newsletter-content">
                <div className="newsletter-icon">
                  <i className="bi bi-envelope-heart"></i>
                </div>
                
                <h3 className="newsletter-title">
                  Restez Informée de Nos <span className="text-primary">Nouveautés</span>
                </h3>
                
                <p className="newsletter-description">
                  Inscrivez-vous à notre newsletter et recevez en exclusivité :
                </p>
                
                <ul className="newsletter-benefits">
                  <li><i className="bi bi-check-circle-fill"></i> Les nouvelles collections en avant-première</li>
                  <li><i className="bi bi-check-circle-fill"></i> Des offres spéciales réservées aux abonnées</li>
                  <li><i className="bi bi-check-circle-fill"></i> Des conseils mode et style</li>
                  <li><i className="bi bi-check-circle-fill"></i> Des codes promo exclusifs</li>
                </ul>
              </div>
            </Col>
            
            <Col lg={6}>
              <div className="newsletter-form-wrapper">
                {showSuccess && (
                  <Alert variant="success" className="mb-3">
                    <i className="bi bi-check-circle-fill me-2"></i>
                    Merci ! Vous êtes maintenant inscrite à notre newsletter.
                  </Alert>
                )}
                
                <Form onSubmit={handleSubmit} className="newsletter-form">
                  <div className="form-group mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Votre adresse email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="newsletter-input"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="newsletter-btn w-100"
                    disabled={!email}
                  >
                    <i className="bi bi-envelope me-2"></i>
                    S'inscrire à la Newsletter
                  </Button>
                  
                  <p className="newsletter-privacy">
                    <small>
                      <i className="bi bi-shield-check me-1"></i>
                      Vos données sont protégées. Pas de spam, désinscription facile.
                    </small>
                  </p>
                </Form>
                
                <div className="newsletter-social">
                  <p className="social-title">Suivez-nous aussi sur :</p>
                  <div className="social-links">
                    <a href="#" className="social-link instagram">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#" className="social-link facebook">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#" className="social-link whatsapp">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                    <a href="#" className="social-link tiktok">
                      <i className="bi bi-tiktok"></i>
                    </a>
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