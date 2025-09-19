'use client'

import { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Alert from 'react-bootstrap/Alert'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { useParams } from 'next/navigation'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Product } from '@/types'
import productsData from '@/data/products.json'
import siteConfig from '@/data/site-config.json'

export default function ProductDetailPage() {
  const params = useParams()
  const productId = params.id as string
  
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [showAddedAlert, setShowAddedAlert] = useState(false)

  useEffect(() => {
    const foundProduct = productsData.find(p => p.id === productId)
    if (foundProduct) {
      setProduct(foundProduct as Product)
      setSelectedColor(foundProduct.colors[0]?.value || '')
      setSelectedSize(foundProduct.sizes[0]?.value || '')
    }
  }, [productId])

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const handleAddToCart = () => {
    // Logique d'ajout au panier (à implémenter)
    setShowAddedAlert(true)
    setTimeout(() => setShowAddedAlert(false), 3000)
  }

  const handleWhatsAppOrder = () => {
    if (!product) return
    
    const selectedColorName = product.colors.find(c => c.value === selectedColor)?.name || ''
    const selectedSizeName = product.sizes.find(s => s.value === selectedSize)?.name || ''
    
    const message = encodeURIComponent(
      `Bonjour ! Je souhaite commander :\n\n` +
      `📦 Produit: ${product.name}\n` +
      `🎨 Couleur: ${selectedColorName}\n` +
      `📏 Taille: ${selectedSizeName}\n` +
      `🔢 Quantité: ${quantity}\n` +
      `💰 Prix: ${formatPrice(product.price * quantity)}\n\n` +
      `Merci !`
    )
    
    const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  if (!product) {
    return (
      <>
        <Header />
        <Container className="py-5">
          <Alert variant="warning">
            <h4>Produit non trouvé</h4>
            <p>Le produit que vous recherchez n'existe pas ou a été supprimé.</p>
            <Link href="/produits" className="btn btn-primary">
              Retour aux produits
            </Link>
          </Alert>
        </Container>
        <Footer />
      </>
    )
  }

  const relatedProducts = productsData
    .filter(p => p.category.id === product.category.id && p.id !== product.id)
    .slice(0, 4)

  return (
    <>
      <Header />
      <main className="py-4">
        <Container>
          {/* Fil d'Ariane */}
          <Breadcrumb className="mb-4">
            <Breadcrumb.Item as={Link} href="/">Accueil</Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href="/produits">Produits</Breadcrumb.Item>
            <Breadcrumb.Item as={Link} href={`/produits?category=${product.category.id}`}>
              {product.category.name}
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{product.name}</Breadcrumb.Item>
          </Breadcrumb>

          {/* Alerte ajout au panier */}
          {showAddedAlert && (
            <Alert variant="success" className="mb-4">
              <i className="bi bi-check-circle-fill me-2"></i>
              Produit ajouté au panier avec succès !
            </Alert>
          )}

          <Row className="g-5">
            {/* Images du produit */}
            <Col lg={6}>
              <Card className="border-0">
                <div className="product-image-main bg-light rounded" style={{ height: '500px' }}>
                  <div className="d-flex align-items-center justify-content-center h-100">
                    <div className="text-center">
                      <i className="bi bi-image display-1 text-muted mb-3"></i>
                      <p className="text-muted">Image principale du produit</p>
                      <small className="text-muted">
                        ({product.images.length} image(s) disponible(s))
                      </small>
                    </div>
                  </div>
                </div>
                
                {/* Miniatures */}
                {product.images.length > 1 && (
                  <Row className="g-2 mt-3">
                    {product.images.slice(0, 4).map((image, index) => (
                      <Col key={index} xs={3}>
                        <div 
                          className="bg-light rounded cursor-pointer"
                          style={{ height: '80px' }}
                        >
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <i className="bi bi-image text-muted"></i>
                          </div>
                        </div>
                      </Col>
                    ))}
                  </Row>
                )}
              </Card>
            </Col>

            {/* Détails du produit */}
            <Col lg={6}>
              <div className="product-details">
                {/* Badges */}
                <div className="mb-3">
                  {product.isNew && (
                    <Badge bg="success" className="me-2">Nouveau</Badge>
                  )}
                  {product.discount && (
                    <Badge bg="danger" className="me-2">-{product.discount}%</Badge>
                  )}
                  {product.featured && (
                    <Badge bg="warning" text="dark">Vedette</Badge>
                  )}
                </div>

                {/* Nom et catégorie */}
                <h1 className="h2 fw-bold mb-2">{product.name}</h1>
                <p className="text-muted mb-3">
                  <Link href={`/produits?category=${product.category.id}`} className="text-decoration-none">
                    {product.category.name}
                  </Link>
                </p>

                {/* Prix */}
                <div className="mb-4">
                  <span className="price-text display-6 fw-bold">
                    {formatPrice(product.price)}
                  </span>
                  {product.originalPrice && (
                    <span className="original-price ms-3 fs-5">
                      {formatPrice(product.originalPrice)}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="lead mb-4">{product.description}</p>

                {/* Matières */}
                <div className="mb-4">
                  <h6 className="fw-bold">Matières :</h6>
                  <p className="text-muted">
                    {product.materials.join(', ')}
                  </p>
                </div>

                {/* Couleurs */}
                <div className="mb-4">
                  <h6 className="fw-bold">Couleur :</h6>
                  <div className="d-flex gap-2 flex-wrap">
                    {product.colors.map((color, index) => (
                      <label key={index} className="color-selector">
                        <input
                          type="radio"
                          name="color"
                          value={color.value}
                          checked={selectedColor === color.value}
                          onChange={(e) => setSelectedColor(e.target.value)}
                          className="d-none"
                        />
                        <div 
                          className={`color-option-large ${selectedColor === color.value ? 'selected' : ''}`}
                          style={{ backgroundColor: color.value }}
                          title={color.name}
                        ></div>
                        <small className="d-block text-center mt-1">{color.name}</small>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Tailles */}
                <div className="mb-4">
                  <h6 className="fw-bold">Taille :</h6>
                  <Form.Select
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                    className="w-auto"
                  >
                    {product.sizes.map((size, index) => (
                      <option 
                        key={index} 
                        value={size.value}
                        disabled={!size.inStock}
                      >
                        {size.name} {!size.inStock && '(Épuisé)'}
                      </option>
                    ))}
                  </Form.Select>
                </div>

                {/* Quantité */}
                <div className="mb-4">
                  <h6 className="fw-bold">Quantité :</h6>
                  <div className="d-flex align-items-center">
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    >
                      -
                    </Button>
                    <span className="mx-3 fw-bold">{quantity}</span>
                    <Button 
                      variant="outline-secondary" 
                      size="sm"
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Total */}
                <div className="mb-4 p-3 bg-light rounded">
                  <h6 className="fw-bold mb-2">Total :</h6>
                  <span className="price-text fs-4 fw-bold">
                    {formatPrice(product.price * quantity)}
                  </span>
                </div>

                {/* Boutons d'action */}
                <div className="d-grid gap-3">
                  <Button 
                    variant="success" 
                    size="lg"
                    onClick={handleWhatsAppOrder}
                    disabled={!product.inStock}
                  >
                    <i className="bi bi-whatsapp me-2"></i>
                    Commander sur WhatsApp
                  </Button>
                  
                  <Button 
                    variant="outline-primary" 
                    size="lg"
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                  >
                    <i className="bi bi-cart-plus me-2"></i>
                    Ajouter au panier
                  </Button>
                </div>

                {/* Statut du stock */}
                <div className="mt-3">
                  {product.inStock ? (
                    <small className="text-success">
                      <i className="bi bi-check-circle me-1"></i>
                      En stock
                    </small>
                  ) : (
                    <small className="text-danger">
                      <i className="bi bi-x-circle me-1"></i>
                      Rupture de stock
                    </small>
                  )}
                </div>
              </div>
            </Col>
          </Row>

          {/* Produits similaires */}
          {relatedProducts.length > 0 && (
            <section className="mt-5 pt-5 border-top">
              <h3 className="fw-bold mb-4">Produits similaires</h3>
              <Row className="g-4">
                {relatedProducts.map((relatedProduct: Product) => (
                  <Col md={6} lg={3} key={relatedProduct.id}>
                    <Card className="product-card h-100 border-0 shadow-sm">
                      <div className="position-relative">
                        <div 
                          className="bg-light"
                          style={{ height: '200px' }}
                        >
                          <div className="d-flex align-items-center justify-content-center h-100">
                            <i className="bi bi-image display-4 text-muted"></i>
                          </div>
                        </div>
                        
                        {relatedProduct.isNew && (
                          <Badge bg="success" className="position-absolute top-0 start-0 m-2">
                            Nouveau
                          </Badge>
                        )}
                      </div>
                      
                      <Card.Body>
                        <h6 className="card-title fw-bold">{relatedProduct.name}</h6>
                        <p className="price-text fw-bold">
                          {formatPrice(relatedProduct.price)}
                        </p>
                        <Link href={`/produits/${relatedProduct.id}`} className="text-decoration-none">
                          <Button variant="outline-primary" size="sm" className="w-100">
                            Voir les détails
                          </Button>
                        </Link>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </section>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}