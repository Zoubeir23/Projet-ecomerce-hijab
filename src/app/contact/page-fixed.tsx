'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

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

  const whatsappNumber = "+221781234567"
  const phoneNumber = "+221781234567"
  const email = "contact@hijabelegancedakar.com"

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Bonjour ! Je souhaite vous contacter.\n\n` +
      `Nom: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.phone}\n` +
      `Sujet: ${formData.subject}\n\n` +
      `Message: ${formData.message}`
    )
    
    const whatsappUrl = `https://wa.me/${whatsappNumber.replace('+', '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <>
      <Header />
      <main className="py-5">
        <div className="container">
          {/* En-tête */}
          <div className="row mb-5">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-5 fw-bold mb-3">Contactez-nous</h1>
              <p className="lead text-muted">
                Nous sommes là pour répondre à toutes vos questions et vous accompagner dans vos achats
              </p>
            </div>
          </div>

          <div className="row g-5">
            {/* Informations de contact */}
            <div className="col-lg-4">
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
                        Avenue Léopold Sédar Senghor<br />
                        Plateau, Dakar, Sénégal
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
                        <a href={`tel:${phoneNumber}`} className="text-decoration-none">
                          {phoneNumber}
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
                        <a href={`mailto:${email}`} className="text-decoration-none">
                          {email}
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
                          href={`https://wa.me/${whatsappNumber.replace('+', '')}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-decoration-none"
                        >
                          {whatsappNumber}
                        </a>
                      </p>
                      <button 
                        className="btn btn-success btn-sm"
                        onClick={() => window.open(`https://wa.me/${whatsappNumber.replace('+', '')}`, '_blank')}
                      >
                        <i className="bi bi-whatsapp me-2"></i>
                        Discuter maintenant
                      </button>
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
                        <p className="mb-1">Lundi - Vendredi: 9h00 - 19h00</p>
                        <p className="mb-1">Samedi: 9h00 - 18h00</p>
                        <p className="mb-1">Dimanche: 14h00 - 17h00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulaire de contact */}
            <div className="col-lg-8">
              <div className="card border-0 shadow-sm">
                <div className="card-header bg-white border-0">
                  <h3 className="h4 fw-bold mb-0">Envoyez-nous un message</h3>
                </div>
                <div className="card-body">
                  {showAlert && (
                    <div className="alert alert-success mb-4" role="alert">
                      <i className="bi bi-check-circle-fill me-2"></i>
                      Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.
                    </div>
                  )}

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Nom complet *</label>
                          <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Votre nom complet"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="votre@email.com"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Téléphone</label>
                          <input
                            type="tel"
                            className="form-control"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            placeholder="+221 XX XXX XX XX"
                          />
                        </div>
                      </div>

                      <div className="col-md-6">
                        <div className="mb-3">
                          <label className="form-label">Sujet *</label>
                          <select
                            className="form-select"
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
                          </select>
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="mb-3">
                          <label className="form-label">Message *</label>
                          <textarea
                            className="form-control"
                            rows={5}
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            placeholder="Décrivez votre demande en détail..."
                          />
                        </div>
                      </div>

                      <div className="col-12">
                        <div className="d-grid gap-3">
                          <button 
                            type="submit" 
                            className="btn btn-primary btn-lg"
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
                          </button>

                          <div className="text-center">
                            <span className="text-muted me-2">ou</span>
                            <button 
                              type="button"
                              className="btn btn-outline-success"
                              onClick={handleWhatsAppContact}
                              disabled={!formData.name || !formData.message}
                            >
                              <i className="bi bi-whatsapp me-2"></i>
                              Envoyer via WhatsApp
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="row mt-5 pt-5 border-top">
            <div className="col">
              <h3 className="h4 fw-bold mb-4 text-center">Questions fréquentes</h3>
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-truck me-2 text-primary"></i>
                        Quels sont vos délais de livraison ?
                      </h6>
                      <p className="text-muted mb-0">
                        Nous livrons dans tout Dakar en 24-48h et dans les autres régions du Sénégal en 2-5 jours ouvrables.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-arrow-repeat me-2 text-primary"></i>
                        Puis-je échanger ou retourner un article ?
                      </h6>
                      <p className="text-muted mb-0">
                        Oui, vous pouvez échanger tout article dans les 7 jours suivant la livraison, dans son état d'origine.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-credit-card me-2 text-primary"></i>
                        Quels sont vos modes de paiement ?
                      </h6>
                      <p className="text-muted mb-0">
                        Paiement à la livraison, Orange Money, Wave, ou virement bancaire. Paiement en ligne bientôt disponible.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="card border-0 bg-light h-100">
                    <div className="card-body">
                      <h6 className="fw-bold mb-2">
                        <i className="bi bi-shield-check me-2 text-primary"></i>
                        Vos produits sont-ils authentiques ?
                      </h6>
                      <p className="text-muted mb-0">
                        Tous nos produits sont soigneusement sélectionnés et garantis de haute qualité. Satisfaction garantie.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}