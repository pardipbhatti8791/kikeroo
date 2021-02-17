import React from 'react';
import { Button, Dropdown, Form } from 'react-bootstrap';
import { faChevronDown, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KikerooMoreFilter = () => {
  return (
    <div className='moreFilter'>
      <Dropdown>
        <Dropdown.Toggle>
          <label className='label-heading'>
            More filters <FontAwesomeIcon icon={faChevronDown} />
          </label>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Group controlId='formBasicRange'>
            <div className='font-16 font-bold mb-2'>Price / per Night</div>
            <Form.Control type='range' />
          </Form.Group>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>Stars</div>
            <div className='d-flex font-20 starRating text-warning'>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </Form.Group>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>Currency</div>
            <Form.Control as='select'>
              <option>USD</option>
              <option>EUR</option>
              <option>JPY </option>
              <option>CNY </option>
              <option>CHF </option>
              <option>AUD </option>
              <option>CAD </option>
              <option>GBP </option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <div className='font-16 font-bold mb-2'>Order By</div>
            <Form.Control as='select'>
              <option>Increasing Rates</option>
              <option>Decreasing Rates</option>
              <option>Increasing Price</option>
              <option>Decreasing Price</option>
            </Form.Control>
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

export default KikerooMoreFilter;
