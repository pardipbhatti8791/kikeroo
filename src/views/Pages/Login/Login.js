import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Container, Form } from 'react-bootstrap';
import Button from '../../Components/Button/Primary';

const Login = (props) => {
  const [email, setEmail] = useState('demo@gmail.com');
  const [password, setPassword] = useState('demo');

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  function login(e) {
    localStorage.setItem('auth', true);
    window.location.reload();
    // dispatch(loginUser(email, password));
  }

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  const [show, setShow] = useState(true);
  return (
    <Container>
      <div className='LoginWrapper'>
        <h2 className='widget-title text-center mb-5'>
          Login to Kikeroo Account
        </h2>

        <Form>
          <Form.Group>
            <Form.Control as='select' defaultValue='Type of account'>
              <option>Type of account</option>
              <option>Business </option>
              <option>Tourist</option>
              <option>Manager</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <input
              type='email'
              placeholder='Email'
              className='form-control'
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <input
              placeholder='password'
              type='password'
              className='form-control'
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control as='select' defaultValue='Type of membership'>
              <option>Type of membership</option>
              <option>Free </option>
              <option>Kikeroo Plus</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Button
              className='btn btn-block btn-primary'
              //  style={{ color: 'white', backgroundColor: '#00B3B6', borderColor: '#00B3B6' }}
              type='submit'
              onClick={login}
            >
              Login
            </Button>
          </Form.Group>
          <div className='text-center'>
            <p className='font-12'>
              By signing up you agree that you have read and accepted our{' '}
              <Link to='#' className='text-light'>
                terms of service{' '}
              </Link>{' '}
              and{' '}
              <Link to='#' className='text-light'>
                privacy policy
              </Link>
              .
            </p>
            <div className='font-16 pt-4'>
              <div>
                Forget your password?{' '}
                <Link to='#' className='text-yellow'>
                  Reset Password
                </Link>
              </div>
              <div>
                Don't have an Account?{' '}
                <Link to='/sign-up' className='text-yellow'>
                  Register Now
                </Link>
              </div>
            </div>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default Login;
