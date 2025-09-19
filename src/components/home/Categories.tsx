'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Link from 'next/link'
import categoriesData from '@/data/categories.json'

export default function Categories() {
  return (
    <section className="py-5 bg-light">
      <Container>
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Nos Catégories</h2>
            <p className="lead text-muted">
              Explorez notre gamme complète de vêtements islamiques soigneusement sélectionnés
            </p>
          </Col>
        </Row>
        
        <Row className="g-4">
          {categoriesData.map((category) => (
            <Col md={6} lg={4} key={category.id}>
              <Card className="category-card h-100 border-0 shadow-sm">
                <div className="position-relative overflow-hidden">
                  <div 
                    className="bg-primary bg-gradient"
                    style={{ height: '200px' }}
                  >
                    <div className="d-flex align-items-center justify-content-center h-100">
                      <i className="bi bi-flower2 display-1 text-white opacity-75"></i>
                    </div>
                  </div>
                  <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <div className="text-center text-white">
                      <h4 className="fw-bold mb-2">{category.name}</h4>
                      <p className="small opacity-90">{category.description}</p>
                    </div>
                  </div>
                </div>
                
                <Card.Body className="text-center">
                  <Link 
                    href={`/categories/${category.slug}`}
                    className="btn btn-outline-primary btn-sm"
                  >
                    Voir la collection
                    <i className="bi bi-arrow-right ms-2"></i>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}