'use client'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'
import Badge from 'react-bootstrap/Badge'
import Link from 'next/link'
import { useCart } from '@/context/CartContext'
import siteConfig from '@/data/site-config.json'

export default function Header() {
  const { state } = useCart()

  return (
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container>
        <Navbar.Brand as={Link} href="/" className="fw-bold">
          <i className="bi bi-flower2 me-2"></i>
          {siteConfig.siteName}
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} href="/">
              Accueil
            </Nav.Link>
            <Nav.Link as={Link} href="/produits">
              Produits
            </Nav.Link>
            <Nav.Link as={Link} href="/a-propos">
              À Propos
            </Nav.Link>
            <Nav.Link as={Link} href="/contact">
              Contact
            </Nav.Link>
          </Nav>
          
          <Nav className="align-items-center">
            <Nav.Link href={`tel:${siteConfig.contact.phone}`} className="d-flex align-items-center me-3">
              <i className="bi bi-telephone-fill me-1"></i>
              <span className="d-none d-md-inline">Appeler</span>
            </Nav.Link>
            
            <Nav.Link 
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace('+', '')}`}
              target="_blank"
              className="btn btn-success text-white d-flex align-items-center me-3"
            >
              <i className="bi bi-whatsapp me-1"></i>
              <span className="d-none d-md-inline">WhatsApp</span>
            </Nav.Link>
            
            <Nav.Link as={Link} href="/panier" className="position-relative">
              <i className="bi bi-bag-fill fs-5"></i>
              {state.totalItems > 0 && (
                <Badge 
                  bg="danger" 
                  className="position-absolute top-0 start-100 translate-middle rounded-pill"
                  style={{ fontSize: '0.7rem' }}
                >
                  {state.totalItems}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}