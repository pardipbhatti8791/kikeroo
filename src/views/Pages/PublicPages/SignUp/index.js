import React from 'react';
import { Container, Tabs, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import BusinessSignUp from './Business';
import TouristSignUp from './Tourist';
import ManagerSignUp from './Manager';

const SignUp = () => {
  return (
    <div className='LoginWrapperBg commonbody-topPadding'>
      <Container>
        <div className='LoginWrapper'>
          <h2 className='widget-title text-center mb-5'>
            Sign Up to Kikeroo Account
          </h2>
          <div className='signupTabs'>
            <Tabs defaultActiveKey='business'>
              <Tab eventKey='business' title='Business'>
                <BusinessSignUp />
              </Tab>
              <Tab eventKey='tourist' title='Tourist'>
                <TouristSignUp />
              </Tab>
              <Tab eventKey='manager' title='Manager'>
                <ManagerSignUp />
              </Tab>
            </Tabs>{' '}
          </div>
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
                Already have an Account? <br />
                <Link to='/login' className='text-yellow'>
                  Login Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SignUp;
