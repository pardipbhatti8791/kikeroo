import React from 'react';
import { Container, Button } from 'react-bootstrap';

const SiteMap = (props) => {
  return (
    <div className='LoginWrapperBg commonbody-topPadding'>
      <Container>
        <div className='siteMap-wrapper page-commonPadding'>
          <ul className='sitemap-list'>
            <li className='homeli'>Home</li>
            <li>
              Search
              <ul className='d-flex innerlist'>
                <li>Product page</li>
                <li>Booking/payment process</li>
              </ul>
            </li>
            <li>About Us</li>
            <li>Terms</li>
            <li>Support</li>
            <li>Careers</li>
            <li>Booking for gift</li>
            <li>
              Sign in
              <ul className='profilelist'>
                <li>Pofile page</li>
              </ul>
            </li>
            <li>Login</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default SiteMap;
