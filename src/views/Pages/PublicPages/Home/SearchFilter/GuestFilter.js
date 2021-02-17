import { faChevronDown, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
const KikerooGuestFilter = () => {
  return (
    <div className='guestFilter'>
      <Dropdown>
        <Dropdown.Toggle>
          <label className='label-heading'>
            Guests <FontAwesomeIcon icon={faChevronDown} />
          </label>
          <div className='dynamic-text '>1 adult, 2 infant</div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>Guests</div>
            <div className='guest-btn-wrap'>
              <span className='btn-subtract btn-guest'>--</span>
              <span className='guest-result'>0</span>
              <span className='btn-add btn-guest'>+</span>
            </div>
          </Form.Group>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>
              Children <small>(Age 2 - 12)</small>
            </div>
            <div className='guest-btn-wrap'>
              <span className='btn-subtract btn-guest'>--</span>
              <span className='guest-result'>0</span>
              <span className='btn-add btn-guest'>+</span>
            </div>
          </Form.Group>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>
              Infants <small>(Under 2)</small>
            </div>
            <div className='guest-btn-wrap'>
              <span className='btn-subtract btn-guest'>--</span>
              <span className='guest-result'>0</span>
              <span className='btn-add btn-guest'>+</span>
            </div>
          </Form.Group>
          <Form.Group className='d-flex justify-content-between'>
            <Button variant='default' size='lg'>
              Clear
            </Button>

            <Button variant='primary' size='lg'>
              Save
            </Button>
          </Form.Group>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default KikerooGuestFilter;
