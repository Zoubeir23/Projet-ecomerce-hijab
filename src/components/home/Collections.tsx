'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'next/image'

export default function Collections() {
  const collections = [
    {
      id: 1,
      title: "Collection Soie Premium",
      description: "Hijabs en soie naturelle pour les occasions spéciales",
      image: "/image/img-05.jpg",
      itemCount: "25 modèles",
      color: "primary"
    },
    {
      id: 2,
      title: "Collection Coton Doux",
      description: "Confort quotidien avec style et élégance",
      image: "/image/img-06.jpg",
      itemCount: "40 modèles",
      color: "secondary"
    },
    {
      id: 3,
      title: "Collection Jersey Sport",
      description: "Parfait pour vos activités sportives",
      image: "/image/img-07.jpg",
      itemCount: "20 modèles",
      color: "success"
    },
    {
      id: 4,
      title: "Collection Accessoires",
      description: "Bandeaux, épingles et accessoires assortis",
      image: "/image/img-08.jpg",
      itemCount: "35 articles",
      color: "info"
    }
  ]

  return (
    <section className="collections-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-header">
              <span className="section-subtitle">Nos Collections</span>
              <h2 className="section-title">
                Découvrez Nos <span className="text-primary">Collections Exclusives</span>
              </h2>
              <p className="section-description">
                Chaque collection est soigneusement conçue pour répondre à vos besoins 
                tout en respectant vos valeurs et votre style de vie.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {collections.map((collection, index) => (
            <Col md={6} lg={3} key={collection.id}>
              <Card className={`collection-card h-100 border-0 shadow-sm collection-${collection.color}`}>
                <div className="collection-image-wrapper">
                  <Image
                    src={collection.image}
                    alt={collection.title}
                    width={300}
                    height={250}
                    className="collection-image"
                  />
                  <div className="collection-overlay">
                    <Button variant="light" size="sm" className="collection-btn">
                      Voir la Collection
                    </Button>
                  </div>
                </div>
                
                <Card.Body className="p-4">
                  <div className="collection-info">
                    <span className="collection-count">{collection.itemCount}</span>
                    <h5 className="collection-title">{collection.title}</h5>
                    <p className="collection-description">{collection.description}</p>
                  </div>
                  
                  <div className="collection-action">
                    <Button variant="outline-primary" size="sm" className="w-100">
                      Explorer
                      <i className="bi bi-arrow-right ms-2"></i>
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <Button size="lg" variant="outline-primary" className="btn-view-all">
              Voir Toutes les Collections
              <i className="bi bi-grid ms-2"></i>
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}