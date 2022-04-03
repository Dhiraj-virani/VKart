import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const FormContainer = ({ children }) => {
  return (
    <Container className='justify-content-md-center'>
      <Row xs={12} md={2} >
          <Col>{ children }</Col>
      </Row>
    </Container>
  )
}

export default FormContainer
