import React from 'react';
import { Col, Container, Row, Navbar, Nav } from 'react-bootstrap';

const TheFooter = () => {
  return (
    <footer className='site-footer'>
      <Container>
        <Row>
          <Col md={{ span: 7, offset: 2 }}>
            <div className='d-md-flex justify-content-around'>
              <div className='mb-5'>
                <h2 className='font-20 font-semibold'>Support </h2>
                <Nav className='flex-column'>
                  <Nav.Link eventKey='#'>Support</Nav.Link>
                  <Nav.Link eventKey='#'>Careers</Nav.Link>
                  <Nav.Link eventKey='#'>Terms</Nav.Link>
                </Nav>
              </div>
              <div className='mb-5'>
                <h2 className='font-20 font-semibold'>Information </h2>
                <Nav className='flex-column'>
                  <Nav.Link eventKey='#'>About Us</Nav.Link>
                  <Nav.Link eventKey='#'>Booking for gifts</Nav.Link>
                  <Nav.Link eventKey='#'>Site map</Nav.Link>
                </Nav>
              </div>
              <div className='mb-5'>
                <h2 className='font-20 font-semibold'>Social networks</h2>
                <Nav className='flex-column'>
                  <Nav.Link eventKey='#'>Facebook</Nav.Link>
                  <Nav.Link eventKey='#'>Linkedin</Nav.Link>
                  <Nav.Link eventKey='#'>Instagram</Nav.Link>
                </Nav>
              </div>
            </div>
          </Col>
          <Col md='3'>
            <h2 className='font-24 font-extrabold text-md-right'>Kikeroo</h2>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default React.memo(TheFooter);
