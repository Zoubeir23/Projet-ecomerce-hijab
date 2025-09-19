import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import siteConfig from '@/data/site-config.json'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="hero-section d-flex align-items-center" style={{ minHeight: '400px' }}>
          <Container>
            <Row className="justify-content-center text-center">
              <Col lg={8}>
                <h1 className="display-4 fw-bold mb-4 text-white">À Propos de Nous</h1>
                <p className="lead text-white mb-0">
                  Votre partenaire de confiance pour la mode islamique féminine au Sénégal
                </p>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Notre Histoire */}
        <section className="py-5">
          <Container>
            <Row className="align-items-center g-5">
              <Col lg={6}>
                <h2 className="display-5 fw-bold mb-4">Notre Histoire</h2>
                <p className="lead mb-4">
                  {siteConfig.siteName} est née de la passion de proposer aux femmes musulmanes du Sénégal 
                  une mode islamique alliant élégance, qualité et respect des valeurs religieuses.
                </p>
                <p className="text-muted mb-4">
                  Depuis notre création, nous nous efforçons de sélectionner les plus beaux hijabs, abayas 
                  et accessoires pour que chaque femme puisse exprimer sa personnalité tout en respectant 
                  ses convictions. Notre équipe, composée de femmes passionnées, comprend les besoins 
                  spécifiques de notre clientèle et s'engage à offrir des produits de qualité exceptionnelle.
                </p>
                <p className="text-muted">
                  Basées à Dakar, nous servons aujourd'hui tout le Sénégal avec un service de livraison 
                  rapide et fiable, permettant à toutes les femmes d'accéder à nos collections.
                </p>
              </Col>
              <Col lg={6}>
                <div className="bg-light rounded p-5 text-center">
                  <i className="bi bi-heart-fill display-1 text-primary mb-3"></i>
                  <h4 className="fw-bold">Passion & Dévouement</h4>
                  <p className="text-muted mb-0">
                    Chaque produit est choisi avec soin pour répondre à vos attentes
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Nos Valeurs */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Nos Valeurs</h2>
                <p className="lead text-muted">
                  Les principes qui guident notre mission au quotidien
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col md={6} lg={3}>
                <Card className="border-0 h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className="bi bi-shield-check display-4 text-primary"></i>
                    </div>
                    <h5 className="fw-bold mb-3">Qualité Premium</h5>
                    <p className="text-muted">
                      Nous sélectionnons uniquement des produits de haute qualité, 
                      respectueux de votre peau et durables dans le temps.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={3}>
                <Card className="border-0 h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className="bi bi-people-fill display-4 text-primary"></i>
                    </div>
                    <h5 className="fw-bold mb-3">Respect des Valeurs</h5>
                    <p className="text-muted">
                      Nous respectons et célébrons les valeurs islamiques à travers 
                      une mode pudique et élégante.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={3}>
                <Card className="border-0 h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className="bi bi-truck display-4 text-primary"></i>
                    </div>
                    <h5 className="fw-bold mb-3">Service Rapide</h5>
                    <p className="text-muted">
                      Livraison rapide dans tout le Sénégal avec un service client 
                      disponible et à l'écoute.
                    </p>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={6} lg={3}>
                <Card className="border-0 h-100 text-center">
                  <Card.Body className="p-4">
                    <div className="mb-3">
                      <i className="bi bi-wallet-fill display-4 text-primary"></i>
                    </div>
                    <h5 className="fw-bold mb-3">Prix Justes</h5>
                    <p className="text-muted">
                      Des prix accessibles pour que toutes les femmes puissent 
                      accéder à une mode islamique de qualité.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Notre Équipe */}
        <section className="py-5">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Notre Équipe</h2>
                <p className="lead text-muted">
                  Des femmes passionnées au service de votre style
                </p>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col lg={8}>
                <Card className="border-0 bg-light">
                  <Card.Body className="p-5 text-center">
                    <div className="mb-4">
                      <i className="bi bi-people display-1 text-primary"></i>
                    </div>
                    <h4 className="fw-bold mb-3">Une Équipe Dédiée</h4>
                    <p className="text-muted mb-4">
                      Notre équipe est composée de femmes musulmanes qui comprennent vos besoins 
                      et partagent votre passion pour la mode islamique. Nous travaillons chaque jour 
                      pour vous offrir la meilleure expérience d'achat possible.
                    </p>
                    <p className="text-muted">
                      De la sélection des produits au service après-vente, en passant par 
                      les conseils style et l'accompagnement personnalisé, nous sommes là 
                      pour vous accompagner dans vos choix.
                    </p>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Nos Engagements */}
        <section className="py-5 bg-light">
          <Container>
            <Row className="mb-5">
              <Col lg={8} className="mx-auto text-center">
                <h2 className="display-5 fw-bold mb-3">Nos Engagements</h2>
                <p className="lead text-muted">
                  Ce que nous vous promettons à chaque commande
                </p>
              </Col>
            </Row>

            <Row className="g-4">
              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-check-circle-fill fs-3 text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Satisfaction Garantie</h5>
                    <p className="text-muted">
                      Échange gratuit sous 7 jours si le produit ne vous convient pas.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-lightning-charge-fill fs-3 text-warning"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Livraison Express</h5>
                    <p className="text-muted">
                      Livraison en 24-48h à Dakar et 2-5 jours dans le reste du Sénégal.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-headset fs-3 text-primary"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Support 7j/7</h5>
                    <p className="text-muted">
                      Notre équipe est disponible via WhatsApp pour répondre à toutes vos questions.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-gem fs-3 text-info"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Produits Authentiques</h5>
                    <p className="text-muted">
                      Tous nos produits sont certifiés et proviennent de fournisseurs de confiance.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-shield-lock-fill fs-3 text-success"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Paiement Sécurisé</h5>
                    <p className="text-muted">
                      Vos transactions sont protégées avec nos partenaires de paiement fiables.
                    </p>
                  </div>
                </div>
              </Col>

              <Col lg={4}>
                <div className="d-flex align-items-start">
                  <div className="me-3">
                    <i className="bi bi-gift-fill fs-3 text-danger"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-2">Cadeaux & Promotions</h5>
                    <p className="text-muted">
                      Profitez régulièrement de nos offres spéciales et cadeaux fidélité.
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Call to Action */}
        <section className="py-5">
          <Container>
            <Row className="justify-content-center">
              <Col lg={8} className="text-center">
                <h3 className="fw-bold mb-3">Rejoignez Notre Communauté</h3>
                <p className="lead text-muted mb-4">
                  Découvrez nos dernières collections et bénéficiez d'offres exclusives
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a href="/produits" className="btn btn-primary btn-lg">
                    <i className="bi bi-bag-fill me-2"></i>
                    Découvrir nos produits
                  </a>
                  <a 
                    href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline-success btn-lg"
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Nous contacter
                  </a>
                </div>
              </Col>
            </Row>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}