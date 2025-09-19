'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import siteConfig from '@/data/site-config.json'

export default function Hero() {
  return (
    <section className="hero-section d-flex align-items-center">
      <Container>
        <Row className="align-items-center min-vh-50">
          <Col lg={6} className="text-center text-lg-start">
            <h1 className="display-4 fw-bold mb-3 fade-in">
              Mode Islamique Premium à Dakar
            </h1>
            <p className="lead mb-4 fade-in">
              Découvrez notre collection exclusive de hijabs, abayas et accessoires. 
              Qualité exceptionnelle, livraison rapide dans tout le Sénégal.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start fade-in">
              <Link href="/produits" className="text-decoration-none">
                <Button size="lg" className="btn-primary w-100">
                  <i className="bi bi-bag-fill me-2"></i>
                  Découvrir nos produits
                </Button>
              </Link>
              <Button 
                href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                target="_blank"
                variant="outline-light" 
                size="lg"
                className="whatsapp-btn border-light text-light"
              >
                <i className="bi bi-whatsapp me-2"></i>
                Commander sur WhatsApp
              </Button>
            </div>
          </Col>
          <Col lg={6} className="text-center mt-4 mt-lg-0">
            <div className="hero-image-placeholder bg-white bg-opacity-10 rounded-3 p-5">
              <i className="bi bi-flower2 display-1 text-white opacity-50"></i>
              <p className="text-white mt-3 mb-0">
                Image de présentation<br />
                <small>(À remplacer par vos photos produits)</small>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}