import React from 'react'
import {Row, Col, Container} from "react-bootstrap"

const Footer = () => {
  return (
    <section className="footer">
        <Container>
            <Row>
                <Col lg={3}>
                  <div className="logo">
                    <img src="https://media.graphcms.com/wV6ZmQbRQWqfJ3fftjy4" alt="img" width="180"/ >
                  </div>
                  
                </Col>

                <Col>
                <div className="contact mt-3"> 
                    <h2>Contact us</h2>

                    <p className="mt-1">Address: 235, LIG Colony, K.K.Nagar <br/> Madurai 625 0202</p>
                    <p>Email: <a href = "mailto: abc@example.com"> Send Email</a></p> 
                    <p>Phone No: <a href="tel:+4733378901"> +4733378901</a></p> 
                  </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Footer