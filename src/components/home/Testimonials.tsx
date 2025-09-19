'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Aïcha Diallo",
      location: "Dakar, Plateau",
      rating: 5,
      comment: "Qualité exceptionnelle ! Les hijabs sont doux, élégants et la livraison a été très rapide. Je recommande vivement cette boutique.",
      avatar: "/image/img-02.jpg",
      verified: true
    },
    {
      id: 2,
      name: "Fatou Seck",
      location: "Pikine",
      rating: 5,
      comment: "Service client au top ! L'équipe m'a aidée à choisir les bonnes couleurs et tailles. Mes hijabs sont magnifiques.",
      avatar: "/image/img-03.jpg",
      verified: true
    },
    {
      id: 3,
      name: "Mariam Ndiaye",
      location: "Guédiawaye",
      rating: 5,
      comment: "Je suis cliente depuis 2 ans. La qualité est toujours au rendez-vous et les nouveautés sont toujours tendance.",
      avatar: "/image/img-04.jpg",
      verified: true
    },
    {
      id: 4,
      name: "Khadija Ba",
      location: "Rufisque",
      rating: 5,
      comment: "Parfait pour les mamans comme moi ! Hijabs pratiques, beaux et qui résistent aux lavages. Merci !",
      avatar: "/image/img-05.jpg",
      verified: true
    }
  ]

  return (
    <section className="testimonials-section py-5">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="section-header">
              <span className="section-subtitle">Témoignages</span>
              <h2 className="section-title">
                Ce Que Disent Nos <span className="text-primary">Clientes</span>
              </h2>
              <p className="section-description">
                La satisfaction de nos clientes est notre plus belle récompense. 
                Découvrez leurs expériences avec nos produits.
              </p>
            </div>
          </Col>
        </Row>

        <Row className="g-4">
          {testimonials.map((testimonial) => (
            <Col md={6} lg={3} key={testimonial.id}>
              <Card className="testimonial-card h-100 border-0 shadow-sm">
                <Card.Body className="p-4">
                  <div className="testimonial-header mb-3">
                    <div className="testimonial-avatar">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={60}
                        height={60}
                        className="avatar-image"
                      />
                      {testimonial.verified && (
                        <div className="verified-badge">
                          <i className="bi bi-check-circle-fill"></i>
                        </div>
                      )}
                    </div>
                    
                    <div className="testimonial-info">
                      <h6 className="testimonial-name">{testimonial.name}</h6>
                      <p className="testimonial-location">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="testimonial-rating mb-3">
                    {[...Array(5)].map((_, i) => (
                      <i 
                        key={i} 
                        className={`bi bi-star${i < testimonial.rating ? '-fill' : ''}`}
                      ></i>
                    ))}
                  </div>
                  
                  <blockquote className="testimonial-comment">
                    "{testimonial.comment}"
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <Row className="mt-5">
          <Col className="text-center">
            <div className="testimonials-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Clientes Satisfaites</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9/5</span>
                <span className="stat-label">Note Moyenne</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">98%</span>
                <span className="stat-label">Recommandent</span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}