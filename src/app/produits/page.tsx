'use client'

import { useState, useMemo } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Link from 'next/link'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Product } from '@/types'
import productsData from '@/data/products.json'
import categoriesData from '@/data/categories.json'

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('')
  const [sortBy, setSortBy] = useState('name')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  // Filtrage et tri des produits
  const filteredProducts = useMemo(() => {
    let filtered = productsData.filter((product: Product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === '' || product.category.id === selectedCategory
      const matchesMinPrice = minPrice === '' || product.price >= parseInt(minPrice)
      const matchesMaxPrice = maxPrice === '' || product.price <= parseInt(maxPrice)
      
      return matchesSearch && matchesCategory && matchesMinPrice && matchesMaxPrice
    })

    // Tri
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        case 'name':
          return a.name.localeCompare(b.name)
        case 'newest':
          return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCategory, sortBy, minPrice, maxPrice])

  return (
    <>
      <Header />
      <main className="py-5">
        <Container>
          {/* En-tête de la page */}
          <Row className="mb-5">
            <Col>
              <h1 className="display-5 fw-bold mb-3">Notre Collection</h1>
              <p className="lead text-muted">
                Découvrez tous nos produits de mode islamique de qualité premium
              </p>
            </Col>
          </Row>

          {/* Filtres */}
          <Row className="mb-4">
            <Col lg={3} className="mb-3">
              <Form.Group>
                <Form.Label>Rechercher</Form.Label>
                <InputGroup>
                  <Form.Control
                    type="text"
                    placeholder="Nom du produit..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                </InputGroup>
              </Form.Group>
            </Col>
            
            <Col lg={2} className="mb-3">
              <Form.Group>
                <Form.Label>Catégorie</Form.Label>
                <Form.Select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                >
                  <option value="">Toutes</option>
                  {categoriesData.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            </Col>

            <Col lg={2} className="mb-3">
              <Form.Group>
                <Form.Label>Trier par</Form.Label>
                <Form.Select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="name">Nom A-Z</option>
                  <option value="price-asc">Prix croissant</option>
                  <option value="price-desc">Prix décroissant</option>
                  <option value="newest">Nouveautés</option>
                </Form.Select>
              </Form.Group>
            </Col>

            <Col lg={2} className="mb-3">
              <Form.Group>
                <Form.Label>Prix min</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="0"
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
              </Form.Group>
            </Col>

            <Col lg={2} className="mb-3">
              <Form.Group>
                <Form.Label>Prix max</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="100000"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Résultats */}
          <Row className="mb-3">
            <Col>
              <p className="text-muted">
                {filteredProducts.length} produit(s) trouvé(s)
              </p>
            </Col>
          </Row>

          {/* Grille de produits */}
          <Row className="g-4">
            {filteredProducts.map((product: Product) => (
              <Col md={6} lg={4} xl={3} key={product.id}>
                <Card className="product-card h-100 border-0 shadow-sm">
                  <div className="position-relative">
                    <div 
                      className="bg-light product-image"
                      style={{ height: '250px', backgroundColor: '#f8f9fa' }}
                    >
                      <div className="d-flex align-items-center justify-content-center h-100">
                        <i className="bi bi-image display-4 text-muted"></i>
                      </div>
                    </div>
                    
                    {/* Badges */}
                    <div className="position-absolute top-0 start-0 m-2">
                      {product.isNew && (
                        <Badge bg="success" className="me-1">Nouveau</Badge>
                      )}
                      {product.discount && (
                        <Badge bg="danger">-{product.discount}%</Badge>
                      )}
                    </div>

                    {/* Stock status */}
                    {!product.inStock && (
                      <div className="position-absolute top-0 end-0 m-2">
                        <Badge bg="secondary">Épuisé</Badge>
                      </div>
                    )}
                  </div>
                  
                  <Card.Body>
                    <h6 className="card-title fw-bold">{product.name}</h6>
                    <p className="card-text text-muted small">
                      {product.description.substring(0, 80)}...
                    </p>
                    
                    {/* Prix */}
                    <div className="mb-3">
                      <span className="price-text fs-6 fw-bold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="original-price ms-2 small">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    
                    {/* Couleurs disponibles */}
                    <div className="mb-3">
                      <small className="text-muted d-block mb-1">
                        {product.colors.length} couleur(s)
                      </small>
                      <div className="d-flex gap-1">
                        {product.colors.slice(0, 3).map((color, index) => (
                          <div 
                            key={index}
                            className="color-option"
                            style={{ 
                              backgroundColor: color.value,
                              width: '20px',
                              height: '20px',
                              borderRadius: '50%',
                              border: '1px solid #dee2e6'
                            }}
                            title={color.name}
                          ></div>
                        ))}
                        {product.colors.length > 3 && (
                          <small className="text-muted align-self-center ms-1">
                            +{product.colors.length - 3}
                          </small>
                        )}
                      </div>
                    </div>
                    
                    <div className="d-grid">
                      <Link href={`/produits/${product.id}`} className="text-decoration-none">
                        <Button 
                          variant={product.inStock ? "outline-primary" : "outline-secondary"}
                          size="sm"
                          disabled={!product.inStock}
                          className="w-100"
                        >
                          {product.inStock ? 'Voir les détails' : 'Indisponible'}
                        </Button>
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Message si aucun produit trouvé */}
          {filteredProducts.length === 0 && (
            <Row className="text-center py-5">
              <Col>
                <i className="bi bi-search display-1 text-muted mb-3"></i>
                <h3>Aucun produit trouvé</h3>
                <p className="text-muted">
                  Essayez de modifier vos critères de recherche ou de filtrage.
                </p>
                <Button 
                  variant="outline-primary"
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('')
                    setMinPrice('')
                    setMaxPrice('')
                  }}
                >
                  Réinitialiser les filtres
                </Button>
              </Col>
            </Row>
          )}
        </Container>
      </main>
      <Footer />
    </>
  )
}