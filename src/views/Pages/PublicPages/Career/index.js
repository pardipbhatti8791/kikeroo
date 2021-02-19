import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const Career = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <section className='page-commonPadding font-20'>
        <Container>
          <div className='max-width58 mx-auto'>
            <h2 className='widget-title text-center mb-5'>Careers</h2>
            <p className='font-20 text-center mb-5'>
              We are not looking for new people at the moment but fill in the
              form with your details and we will contact you back if we need
              someone like you!
            </p>
            <div className='max-width38 mx-auto'>
              <Form>
                <Form.Group>
                  <input
                    type='text'
                    placeholder='Full Name'
                    className='form-control'
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type='email'
                    placeholder='Email'
                    className='form-control'
                  />
                </Form.Group>
                <Form.Group>
                  <input
                    type='tel'
                    placeholder='Phone'
                    className='form-control'
                  />
                </Form.Group>
                <Form.Group>
                  <textarea
                    className='form-control'
                    placeholder='Tell us about you'
                  ></textarea>
                </Form.Group>
                <Form.Group>
                  <Button
                    variant='primary'
                    className=' btn-block font-16 py-3'
                    type='submit'
                    size='lg'
                  >
                    Send
                  </Button>
                </Form.Group>
              </Form>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Career;
