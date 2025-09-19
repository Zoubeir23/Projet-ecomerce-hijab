'use client'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

export default function SimpleTest() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Test Bootstrap</Card.Title>
              <Card.Text>
                Si vous voyez cette carte, React Bootstrap fonctionne correctement !
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}