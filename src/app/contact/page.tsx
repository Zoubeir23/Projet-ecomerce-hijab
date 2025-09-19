'use client'

import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import siteConfig from '@/data/site-config.json'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [showAlert, setShowAlert] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulation d'envoi (remplacer par une vraie API)
    setTimeout(() => {
      setShowAlert(true)
      setIsSubmitting(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      })
      setTimeout(() => setShowAlert(false), 5000)
    }, 1000)
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Bonjour ! Je souhaite vous contacter.\n\n` +
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone}\n` +
      `Sujet: ${formData.subject}\n\n` +
      `Message: ${formData.message}`
    )
    
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          {/* En-tête */}
          <Row className="mb-5">
            <Col lg={8} className="mx-auto text-center">
              <h1 className="display-5 fw-bold mb-3">Contactez-nous</h1>
              <p className="lead text-muted">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos achats
              </p>
            </Col>
          </Row>

          <Row className="g-5">
            {/* Informations de contact */}
            <Col lg={4}>
              <div className="contact-info">
                <h3 className="h4 fw-bold mb-4">Nos coordonnées</h3>
                
                {/* Adresse */}
                <div className="contact-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="bi bi-geo-alt-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Adresse</h6>
                      <p className="text-muted mb-0">
                        {typeof siteConfig.contact.address === 'object' 
                          ? `${siteConfig.contact.address.street}, ${siteConfig.contact.address.city}, ${siteConfig.contact.address.country}`
                          : siteConfig.contact.address
                        }
                      </p>
                    </div>
                  </div>
                </div>

                {/* Téléphone */}
                <div className="contact-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="bi bi-telephone-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Téléphone</h6>
                      <p className="text-muted mb-0">
                        <a href={`tel:${siteConfig.contact.phone}`} className="text-decoration-none">
                          {siteConfig.contact.phone}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="contact-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="bi bi-envelope-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Email</h6>
                      <p className="text-muted mb-0">
                        <a href={`mailto:${siteConfig.contact.email}`} className="text-decoration-none">
                          {siteConfig.contact.email}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="contact-item mb-4">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="bi bi-whatsapp fs-4 text-success"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">WhatsApp</h6>
                      <p className="text-muted mb-2">
                        <a 
                          href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          {siteConfig.contact.whatsapp}
                        </a>
                      </p>
                      <Button 
                        variant="success" 
                        size="sm"
                        href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
                        target="_blank"
                      >
                        <i className="bi bi-whatsapp me-2"></i>
                        Discuter maintenant
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Horaires */}
                <div className="contact-item">
                  <div className="d-flex align-items-start">
                    <div className="contact-icon me-3">
                      <i className="bi bi-clock-fill fs-4 text-primary"></i>
                    </div>
                    <div>
                      <h6 className="fw-bold mb-1">Horaires d'ouverture</h6>
                      <div className="text-muted">
                        {Array.isArray(siteConfig.contact.hours) 
                          ? siteConfig.contact.hours.map((hour: string, index: number) => (
                              <p key={index} className="mb-1">{hour}</p>
                            ))
                          : <p className="mb-1">{siteConfig.contact.hours}</p>
                        }
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>

            {/* Formulaire de contact */}
            <Col lg={8}>
              <Card className="border-0 shadow-sm">
                <Card.Header className="bg-white border-0">
                  <h3 className="h4 fw-bold mb-0">Envoyez-nous un message</h3>
                </Card.Header>
                <Card.Body>
                  {showAlert && (
                    <Alert variant="success" className="mb-4">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                    </Alert>
                  )}

                  <Form onSubmit={handleSubmit}>
                    <Row className="g-3">
                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Nom complet *</Form.Label>
                          <Form.Control
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Votre nom complet"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Email *</Form.Label>
                          <Form.Control
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="votre@email.com"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Téléphone</Form.Label>
                          <Form.Control
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+221 XX XXX XX XX"
                          />
                        </Form.Group>
                      </Col>

                      <Col md={6}>
                        <Form.Group>
                          <Form.Label>Sujet *</Form.Label>
                          <Form.Select
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                          >
                            <option value="">Choisir un sujet</option>
                            <option value="info-produit">Information sur un produit</option>
                            <option value="commande">Question sur ma commande</option>
                            <option value="livraison">Livraison</option>
                            <option value="retour">Retour/Échange</option>
                            <option value="partenariat">Partenariat</option>
                            <option value="autre">Autre</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <Form.Group>
                          <Form.Label>Message *</Form.Label>
                          <Form.Control
                            as="textarea"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Décrivez votre demande en détail..."
                          />
                        </Form.Group>
                      </Col>

                      <Col xs={12}>
                        <div className="d-grid gap-3">
                          <Button 
                            type="submit" 
                            variant="primary" 
                            size="lg"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>
                                <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                                Envoi en cours...
                              </>
                            ) : (
                              <>
                                <i className="bi bi-send me-2"></i>
                                Envoyer le message
                              </>
                            )}
                          </Button>

                          <div className="text-center">
                            <span className="text-muted me-2">ou</span>
                            <Button 
                              variant="outline-success"
                              onClick={handleWhatsAppContact}
                              disabled={!formData.name || !formData.message}
                            >
                              <i className="bi bi-whatsapp me-2"></i>
                              Envoyer via WhatsApp
                            </Button>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* FAQ Section */}
          <Row className="mt-5 pt-5 border-top">
            <Col>
              <h3 className="h4 fw-bold mb-4 text-center">Questions fréquentes</h3>
              <Row className="g-4">
                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body>
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-truck me-2 text-primary"></i>
                        Quels sont vos délais de livraison ?
                      </h6>
                      <p className="text-muted mb-0">
                        Nous livrons dans tout Dakar en 24-48h et dans les autres régions du Sénégal en 2-5 jours ouvrables.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body>
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-arrow-repeat me-2 text-primary"></i>
                        Puis-je échanger ou retourner un article ?
                      </h6>
                      <p className="text-muted mb-0">
                        Oui, vous pouvez échanger tout article dans les 7 jours suivant la livraison, dans son état d'origine.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body>
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-credit-card me-2 text-primary"></i>
                        Quels sont vos modes de paiement ?
                      </h6>
                      <p className="text-muted mb-0">
                        Paiement à la livraison, Orange Money, Wave, ou virement bancaire. Paiement en ligne bientôt disponible.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>

                <Col md={6}>
                  <Card className="border-0 bg-light h-100">
                    <Card.Body>
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-shield-check me-2 text-primary"></i>
                        Vos produits sont-ils authentiques ?
                      </h6>
                      <p className="text-muted mb-0">
                        Tous nos produits sont soigneusement sélectionnés et garantis de haute qualité. Satisfaction garantie.
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </>
  )
}