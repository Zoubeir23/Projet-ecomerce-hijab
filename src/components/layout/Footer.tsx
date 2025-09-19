'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Link from 'next/link'
import siteConfig from '@/data/site-config.json'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark text-light py-5 mt-5">
      <Container>
        <Row>
          <Col md={4} className="mb-4">
            <h5 className="text-warning mb-3">
              <i className="bi bi-flower2 me-2"></i>
              {siteConfig.siteName}
            </h5>
            <p className="text-light-50">
              {siteConfig.description}
            </p>
          </Col>
          
          <Col md={2} className="mb-4">
            <h6 className="text-warning mb-3">Navigation</h6>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-light text-decoration-none">Accueil</Link></li>
              <li><Link href="/produits" className="text-light text-decoration-none">Produits</Link></li>
              <li><Link href="/categories" className="text-light text-decoration-none">Catégories</Link></li>
              <li><Link href="/contact" className="text-light text-decoration-none">Contact</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="text-warning mb-3">Catégories</h6>
            <ul className="list-unstyled">
              <li><Link href="/categories/hijabs" className="text-light text-decoration-none">Hijabs</Link></li>
              <li><Link href="/categories/abayas" className="text-light text-decoration-none">Abayas</Link></li>
              <li><Link href="/categories/khimars" className="text-light text-decoration-none">Khimars</Link></li>
              <li><Link href="/categories/accessoires" className="text-light text-decoration-none">Accessoires</Link></li>
            </ul>
          </Col>
          
          <Col md={3} className="mb-4">
            <h6 className="text-warning mb-3">Contact</h6>
            <div className="text-light-50">
              <p>
                <i className="bi bi-geo-alt-fill me-2"></i>
                {siteConfig.contact.address.street}<br />
                {siteConfig.contact.address.city}<br />
                {siteConfig.contact.address.country}
              </p>
              <p>
                <i className="bi bi-telephone-fill me-2"></i>
                <a href={`tel:${siteConfig.contact.phone}`} className="text-light text-decoration-none">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <i className="bi bi-envelope-fill me-2"></i>
                <a href={`mailto:${siteConfig.contact.email}`} className="text-light text-decoration-none">
                  {siteConfig.contact.email}
                </a>
              </p>
              <p>
                <i className="bi bi-clock-fill me-2"></i>
                {siteConfig.contact.hours}
              </p>
            </div>
          </Col>
        </Row>
        
        <hr className="my-4 border-secondary" />
        
        <Row className="align-items-center">
          <Col md={6}>
            <p className="mb-0 text-light-50">
              © {currentYear} {siteConfig.siteName}. Tous droits réservés.
            </p>
          </Col>
          <Col md={6} className="text-md-end">
            <div className="d-flex justify-content-md-end gap-3">
              {siteConfig.socialMedia.facebook && (
                <a 
                  href={siteConfig.socialMedia.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <i className="bi bi-facebook"></i>
                </a>
              )}
              {siteConfig.socialMedia.instagram && (
                <a 
                  href={siteConfig.socialMedia.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <i className="bi bi-instagram"></i>
                </a>
              )}
              {siteConfig.socialMedia.tiktok && (
                <a 
                  href={siteConfig.socialMedia.tiktok} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-light fs-4"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              )}
              <a 
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="text-success fs-4"
              >
                <i className="bi bi-whatsapp"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}