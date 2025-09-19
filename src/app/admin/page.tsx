'use client'

import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Badge from 'react-bootstrap/Badge'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import Alert from 'react-bootstrap/Alert'
import { Product } from '@/types'
import productsData from '@/data/products.json'

export default function AdminPage() {
  const [products] = useState<Product[]>(productsData as Product[])
  const [activeTab, setActiveTab] = useState('products')

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-FR').format(price) + ' FCFA'
  }

  const getTotalValue = () => {
    return products.reduce((total, product) => total + product.price, 0)
  }

  const getStockStatus = () => {
    const inStock = products.filter(p => p.inStock).length
    const outOfStock = products.filter(p => !p.inStock).length
    return { inStock, outOfStock, total: products.length }
  }

  const stockStatus = getStockStatus()

  return (
    <Container fluid className="py-4">
      <Row className="mb-4">
        <Col>
          <h1 className="h2 fw-bold">Administration - Site Hijab</h1>
          <p className="text-muted">Gestion du catalogue et des commandes</p>
        </Col>
      </Row>

      {/* Statistiques */}
      <Row className="g-4 mb-4">
        <Col md={3}>
          <Card className="border-0 bg-primary text-white">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div>
                  <h3 className="fw-bold mb-0">{products.length}</h3>
                  <p className="mb-0">Produits</p>
                </div>
                <i className="bi bi-box-seam ms-auto fs-1"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 bg-success text-white">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div>
                  <h3 className="fw-bold mb-0">{stockStatus.inStock}</h3>
                  <p className="mb-0">En stock</p>
                </div>
                <i className="bi bi-check-circle ms-auto fs-1"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 bg-danger text-white">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div>
                  <h3 className="fw-bold mb-0">{stockStatus.outOfStock}</h3>
                  <p className="mb-0">Rupture</p>
                </div>
                <i className="bi bi-x-circle ms-auto fs-1"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card className="border-0 bg-info text-white">
            <Card.Body>
              <div className="d-flex align-items-center">
                <div>
                  <h3 className="fw-bold mb-0">{formatPrice(getTotalValue())}</h3>
                  <p className="mb-0">Valeur totale</p>
                </div>
                <i className="bi bi-currency-dollar ms-auto fs-1"></i>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Navigation */}
      <Card className="border-0 shadow-sm">
        <Card.Body>
          <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k || 'products')}>
            <Tab eventKey="products" title="Produits">
              <div className="mt-3">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Liste des produits</h5>
                  <Button variant="primary">
                    <i className="bi bi-plus-circle me-2"></i>
                    Ajouter un produit
                  </Button>
                </div>

                <div className="table-responsive">
                  <Table striped hover>
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Catégorie</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Statut</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.slice(0, 10).map((product) => (
                        <tr key={product.id}>
                          <td>
                            <code className="small">{product.id.substring(0, 20)}...</code>
                          </td>
                          <td>
                            <div>
                              <strong>{product.name}</strong>
                              {product.featured && (
                                <Badge bg="warning" text="dark" className="ms-2">Vedette</Badge>
                              )}
                              {product.isNew && (
                                <Badge bg="success" className="ms-2">Nouveau</Badge>
                              )}
                            </div>
                          </td>
                          <td>{product.category.name}</td>
                          <td>
                            <div>
                              <strong>{formatPrice(product.price)}</strong>
                              {product.originalPrice && (
                                <div>
                                  <small className="text-muted text-decoration-line-through">
                                    {formatPrice(product.originalPrice)}
                                  </small>
                                  {product.discount && (
                                    <Badge bg="danger" className="ms-1">-{product.discount}%</Badge>
                                  )}
                                </div>
                              )}
                            </div>
                          </td>
                          <td>
                            <small className="text-muted">
                              {product.colors.length} couleur(s)<br />
                              {product.sizes.length} taille(s)
                            </small>
                          </td>
                          <td>
                            <Badge bg={product.inStock ? 'success' : 'danger'}>
                              {product.inStock ? 'En stock' : 'Rupture'}
                            </Badge>
                          </td>
                          <td>
                            <div className="d-flex gap-1">
                              <Button variant="outline-primary" size="sm">
                                <i className="bi bi-pencil"></i>
                              </Button>
                              <Button variant="outline-info" size="sm">
                                <i className="bi bi-eye"></i>
                              </Button>
                              <Button variant="outline-danger" size="sm">
                                <i className="bi bi-trash"></i>
                              </Button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>

                {products.length > 10 && (
                  <div className="text-center mt-3">
                    <Button variant="outline-primary">Voir tous les produits</Button>
                  </div>
                )}
              </div>
            </Tab>

            <Tab eventKey="orders" title="Commandes">
              <div className="mt-3">
                <Alert variant="info">
                  <h6 className="alert-heading">Fonctionnalité en développement</h6>
                  <p className="mb-0">
                    La gestion des commandes sera bientôt disponible. 
                    Pour le moment, les commandes sont gérées via WhatsApp.
                  </p>
                </Alert>
              </div>
            </Tab>

            <Tab eventKey="analytics" title="Statistiques">
              <div className="mt-3">
                <Row className="g-4">
                  <Col md={6}>
                    <Card className="border-0 bg-light">
                      <Card.Body>
                        <h6 className="fw-bold mb-3">Répartition par catégorie</h6>
                        {/* Ici on pourrait ajouter des graphiques */}
                        <div className="space-y-2">
                          {Array.from(new Set(products.map(p => p.category.name))).map(category => {
                            const count = products.filter(p => p.category.name === category).length
                            const percentage = (count / products.length * 100).toFixed(1)
                            return (
                              <div key={category} className="d-flex justify-content-between">
                                <span>{category}</span>
                                <span>
                                  <Badge bg="secondary">{count}</Badge>
                                  <small className="text-muted ms-2">({percentage}%)</small>
                                </span>
                              </div>
                            )
                          })}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card className="border-0 bg-light">
                      <Card.Body>
                        <h6 className="fw-bold mb-3">Produits populaires</h6>
                        <div className="space-y-2">
                          {products
                            .filter(p => p.featured)
                            .slice(0, 5)
                            .map(product => (
                              <div key={product.id} className="d-flex justify-content-between align-items-center">
                                <div>
                                  <div className="fw-bold">{product.name.substring(0, 30)}...</div>
                                  <small className="text-muted">{formatPrice(product.price)}</small>
                                </div>
                                <Badge bg="warning" text="dark">Vedette</Badge>
                              </div>
                            ))}
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Tab>

            <Tab eventKey="settings" title="Paramètres">
              <div className="mt-3">
                <Alert variant="warning">
                  <h6 className="alert-heading">Zone sensible</h6>
                  <p className="mb-0">
                    Les paramètres du site ne doivent être modifiés que par un administrateur expérimenté.
                  </p>
                </Alert>
                
                <Row className="g-4 mt-3">
                  <Col md={6}>
                    <Card className="border-0 bg-light">
                      <Card.Body>
                        <h6 className="fw-bold mb-3">Configuration générale</h6>
                        <div className="space-y-2">
                          <Button variant="outline-primary" className="w-100 mb-2">
                            <i className="bi bi-gear me-2"></i>
                            Modifier les informations du site
                          </Button>
                          <Button variant="outline-info" className="w-100 mb-2">
                            <i className="bi bi-palette me-2"></i>
                            Personnaliser le thème
                          </Button>
                          <Button variant="outline-success" className="w-100">
                            <i className="bi bi-download me-2"></i>
                            Sauvegarder les données
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>

                  <Col md={6}>
                    <Card className="border-0 bg-light">
                      <Card.Body>
                        <h6 className="fw-bold mb-3">Outils avancés</h6>
                        <div className="space-y-2">
                          <Button variant="outline-warning" className="w-100 mb-2">
                            <i className="bi bi-upload me-2"></i>
                            Importer des produits
                          </Button>
                          <Button variant="outline-secondary" className="w-100 mb-2">
                            <i className="bi bi-file-earmark-spreadsheet me-2"></i>
                            Exporter vers Excel
                          </Button>
                          <Button variant="outline-danger" className="w-100">
                            <i className="bi bi-arrow-clockwise me-2"></i>
                            Réinitialiser le cache
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </div>
            </Tab>
          </Tabs>
        </Card.Body>
      </Card>
    </Container>
  )
}