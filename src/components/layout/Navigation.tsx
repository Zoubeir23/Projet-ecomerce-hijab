'use client'

import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import Offcanvas from 'react-bootstrap/Offcanvas'

export default function Navigation() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  return (
    <>
      <Navbar expand="lg" className="navbar-elegant sticky-top">
        <Container>
          <Navbar.Brand href="/" className="brand-elegant">
            <div className="d-flex align-items-center">
              <div className="brand-icon me-2">
                <i className="bi bi-flower2"></i>
              </div>
              <div>
                <div className="brand-name">Hijab Élégance</div>
                <div className="brand-subtitle">Dakar</div>
              </div>
            </div>
          </Navbar.Brand>

          <div className="d-flex align-items-center d-lg-none">
            <Button variant="link" className="cart-btn me-2">
              <i className="bi bi-bag"></i>
              <Badge bg="primary" className="cart-badge">3</Badge>
            </Button>
            <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
          </div>

          <Navbar.Collapse id="basic-navbar-nav" className="d-none d-lg-block">
            <Nav className="mx-auto">
              <Nav.Link href="/" className="nav-link-elegant">Accueil</Nav.Link>
              <Nav.Link href="/nouveautes" className="nav-link-elegant">
                Nouveautés
                <Badge bg="danger" className="ms-1 new-badge">New</Badge>
              </Nav.Link>
              
              <NavDropdown title="Collections" className="nav-dropdown-elegant">
                <NavDropdown.Item href="/collections/hijabs-soie">Hijabs Soie</NavDropdown.Item>
                <NavDropdown.Item href="/collections/hijabs-coton">Hijabs Coton</NavDropdown.Item>
                <NavDropdown.Item href="/collections/hijabs-jersey">Hijabs Jersey</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/collections/toutes">Toutes les Collections</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title="Accessoires" className="nav-dropdown-elegant">
                <NavDropdown.Item href="/accessoires/bandeaux">Bandeaux</NavDropdown.Item>
                <NavDropdown.Item href="/accessoires/epingles">Épingles</NavDropdown.Item>
                <NavDropdown.Item href="/accessoires/bonnets">Bonnets</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/about" className="nav-link-elegant">À Propos</Nav.Link>
              <Nav.Link href="/contact" className="nav-link-elegant">Contact</Nav.Link>
            </Nav>

            <div className="d-flex align-items-center">
              <Button variant="link" className="search-btn me-3">
                <i className="bi bi-search"></i>
              </Button>
              <Button variant="link" className="cart-btn me-3">
                <i className="bi bi-bag"></i>
                <Badge bg="primary" className="cart-badge">3</Badge>
              </Button>
              <Button variant="success" size="sm" className="whatsapp-btn">
                <i className="bi bi-whatsapp me-1"></i>
                WhatsApp
              </Button>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Mobile Offcanvas */}
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton className="border-bottom">
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/" className="py-3 border-bottom">Accueil</Nav.Link>
            <Nav.Link href="/nouveautes" className="py-3 border-bottom">
              Nouveautés <Badge bg="danger" className="ms-1">New</Badge>
            </Nav.Link>
            <Nav.Link href="/collections" className="py-3 border-bottom">Collections</Nav.Link>
            <Nav.Link href="/accessoires" className="py-3 border-bottom">Accessoires</Nav.Link>
            <Nav.Link href="/about" className="py-3 border-bottom">À Propos</Nav.Link>
            <Nav.Link href="/contact" className="py-3">Contact</Nav.Link>
          </Nav>
          
          <div className="mt-4 pt-4 border-top">
            <Button variant="success" className="w-100 whatsapp-btn">
              <i className="bi bi-whatsapp me-2"></i>
              Contacter sur WhatsApp
            </Button>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  )
}