'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-main">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <div className="footer-brand">
                <div className="brand-logo">
                  <i className="bi bi-flower2"></i>
                  <span>Hijab Élégance Dakar</span>
                </div>
                <p className="brand-description">
                  Votre boutique de confiance pour des hijabs et voiles de qualité premium. 
                  Nous célébrons la beauté de la modestie avec élégance et style.
                </p>
                <div className="footer-contact">
                  <div className="contact-item">
                    <i className="bi bi-geo-alt-fill"></i>
                    <span>Avenue Léopold Sédar Senghor, Dakar</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-telephone-fill"></i>
                    <span>+221 77 123 45 67</span>
                  </div>
                  <div className="contact-item">
                    <i className="bi bi-envelope-fill"></i>
                    <span>contact@hijabelegance.sn</span>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={2} md={6}>
              <div className="footer-links">
                <h6 className="footer-title">Navigation</h6>
                <ul className="links-list">
                  <li><a href="/">Accueil</a></li>
                  <li><a href="/nouveautes">Nouveautés</a></li>
                  <li><a href="/collections">Collections</a></li>
                  <li><a href="/accessoires">Accessoires</a></li>
                  <li><a href="/about">À Propos</a></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={2} md={6}>
              <div className="footer-links">
                <h6 className="footer-title">Collections</h6>
                <ul className="links-list">
                  <li><a href="/collections/soie">Hijabs Soie</a></li>
                  <li><a href="/collections/coton">Hijabs Coton</a></li>
                  <li><a href="/collections/jersey">Hijabs Jersey</a></li>
                  <li><a href="/collections/premium">Collection Premium</a></li>
                  <li><a href="/collections/sport">Collection Sport</a></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={2} md={6}>
              <div className="footer-links">
                <h6 className="footer-title">Support</h6>
                <ul className="links-list">
                  <li><a href="/contact">Contact</a></li>
                  <li><a href="/livraison">Livraison</a></li>
                  <li><a href="/retours">Retours</a></li>
                  <li><a href="/faq">FAQ</a></li>
                  <li><a href="/guide-tailles">Guide des Tailles</a></li>
                </ul>
              </div>
            </Col>
            
            <Col lg={2} md={6}>
              <div className="footer-social">
                <h6 className="footer-title">Suivez-nous</h6>
                <div className="social-links">
                  <a href="#" className="social-link instagram">
                    <i className="bi bi-instagram"></i>
                    <span>Instagram</span>
                  </a>
                  <a href="#" className="social-link facebook">
                    <i className="bi bi-facebook"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="#" className="social-link whatsapp">
                    <i className="bi bi-whatsapp"></i>
                    <span>WhatsApp</span>
                  </a>
                  <a href="#" className="social-link tiktok">
                    <i className="bi bi-tiktok"></i>
                    <span>TikTok</span>
                  </a>
                </div>
                
                <div className="whatsapp-contact mt-3">
                  <Button variant="success" size="sm" className="w-100">
                    <i className="bi bi-whatsapp me-2"></i>
                    Commande WhatsApp
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      
      <div className="footer-bottom">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <p className="copyright">
                © 2024 Hijab Élégance Dakar. Tous droits réservés.
              </p>
            </Col>
            <Col md={6} className="text-md-end">
              <div className="footer-legal">
                <a href="/mentions-legales">Mentions Légales</a>
                <a href="/confidentialite">Confidentialité</a>
                <a href="/cgv">CGV</a>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </footer>
  )
}