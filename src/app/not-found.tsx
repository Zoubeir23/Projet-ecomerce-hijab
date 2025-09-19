import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          <Row className="justify-content-center text-center py-5">
            <Col lg={6}>
              <div className="py-5">
                <i className="bi bi-emoji-frown display-1 text-muted mb-4"></i>
                <h1 className="display-4 fw-bold mb-3">404</h1>
                <h2 className="h3 mb-4">Page non trouvée</h2>
                <p className="lead text-muted mb-5">
                  Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <Link href="/" className="btn btn-primary btn-lg">
                    <i className="bi bi-house-fill me-2"></i>
                    Retour à l'accueil
                  </Link>
                  <Link href="/produits" className="btn btn-outline-primary btn-lg">
                    <i className="bi bi-bag-fill me-2"></i>
                    Voir nos produits
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}