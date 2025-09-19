'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import siteConfig from '@/data/site-config.json'

export default function WhyChooseUs() {
  const features = [
    {
      icon: 'bi-shield-check',
      title: 'Qualité Premium',
      description: 'Matières sélectionnées avec soin pour votre confort et votre élégance'
    },
    {
      icon: 'bi-truck',
      title: 'Livraison Rapide',
      description: 'Livraison dans tout Dakar en 24h et dans le reste du Sénégal sous 48h'
    },
    {
      icon: 'bi-whatsapp',
      title: 'Support WhatsApp',
      description: 'Conseils personnalisés et commandes faciles via WhatsApp'
    },
    {
      icon: 'bi-arrow-clockwise',
      title: 'Échange Facile',
      description: 'Politique d\'échange flexible pour votre satisfaction'
    },
    {
      icon: 'bi-heart',
      title: 'Fait avec Amour',
      description: 'Chaque produit est choisi avec passion pour nos sœurs musulmanes'
    },
    {
      icon: 'bi-star-fill',
      title: 'Clients Satisfaites',
      description: 'Plus de 500 clientes satisfaites nous font confiance'
    }
  ]

  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Pourquoi Choisir {siteConfig.siteName} ?</h2>
            <p className="lead text-muted">
              Votre satisfaction est notre priorité. Découvrez ce qui nous rend unique.
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {features.map((feature, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 border-0 shadow-sm text-center p-3">
                <Card.Body>
                  <div className="mb-3">
                    <i className={`${feature.icon} display-4 text-primary`}></i>
                  </div>
                  <h5 className="fw-bold mb-3">{feature.title}</h5>
                  <p className="text-muted">{feature.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        
        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="bg-primary text-white rounded-3 p-4">
              <h4 className="fw-bold mb-3">
                <i className="bi bi-telephone-fill me-2"></i>
                Besoin d'aide ? Contactez-nous !
              </h4>
              <p className="mb-3">
                Notre équipe est là pour vous conseiller et vous accompagner dans vos achats.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <a 
                  href={`tel:${siteConfig.contact.phone}`}
                  className="btn btn-light btn-lg"
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  {siteConfig.contact.phone}
                </a>
                <a 
                  href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-success btn-lg"
                >
                  <i className="bi bi-whatsapp me-2"></i>
                  WhatsApp
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}