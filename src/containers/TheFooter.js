import React from 'react';
import { Col, Container, Row, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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
                  <Link to='/support' className='nav-link'>
                    Support
                  </Link>
                  <Link className='nav-link' to='/career'>
                    Careers
                  </Link>
                  <Link to='/terms' className='nav-link'>
                    Terms
                  </Link>
                </Nav>
              </div>
              <div className='mb-5'>
                <h2 className='font-20 font-semibold'>Information </h2>
                <Nav className='flex-column'>
                  <Link to='/about-us' className='nav-link'>
                    About Us
                  </Link>
                  <Link to='#' className='nav-link'>
                    Booking for gifts
                  </Link>
                  <Link to='#' className='nav-link'>
                    Site map
                  </Link>
                </Nav>
              </div>
              <div className='mb-5'>
                <h2 className='font-20 font-semibold'>Social networks</h2>
                <Nav className='flex-column'>
                  <Link
                    to={{ pathname: 'https://www.facebook.com/Kikeroo2020/' }}
                    target='_blank'
                    className='nav-link'
                  >
                    Facebook
                  </Link>
                  {/* <Link
                 //   to={{ pathname: 'https://twitter.com/Kikeroo1' }}
                    target='_blank'
                    className='nav-link'
                  >
                    Twitter
                  </Link> */}
                  <Link
                    to={{
                      pathname: 'https://www.linkedin.com/company/kikeroo/',
                    }}
                    target='_blank'
                    className='nav-link'
                  >
                    Linkedin
                  </Link>
                  <Link
                    to={{ pathname: 'https://www.instagram.com/kikeroo_/' }}
                    target='_blank'
                    className='nav-link'
                  >
                    Instagram
                  </Link>
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
