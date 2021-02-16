import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import Button from '../../../../Components/Button/Primary';

const ManagerSignUp = (props) => {
  return (
    <div className='commonSignUpWrapper'>
      <Form>
        <Form.Group>
          <input type='text' placeholder='Full Name' className='form-control' />
        </Form.Group>
        <Form.Group>
          <input type='email' placeholder='Email' className='form-control' />
        </Form.Group>
        <Form.Group>
          <Form.Control as='select' defaultValue='Type of membership'>
            <option>Type of membership</option>
            <option>Free </option>
            <option>Kikeroo Plus</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <input
            placeholder='Password'
            type='password'
            className='form-control'
          />
        </Form.Group>
        <Form.Group>
          <input
            placeholder='Confirm password'
            type='password'
            className='form-control'
          />
        </Form.Group>

        <Form.Group>
          <Button className='btn btn-block btn-primary' type='submit'>
            Sign Up
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default ManagerSignUp;
