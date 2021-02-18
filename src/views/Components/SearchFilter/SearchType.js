import React from 'react';
import { Dropdown, Form } from 'react-bootstrap';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const KikerooSearchType = () => {
  return (
    <div className='searchTypeFilter'>
      <Dropdown>
        <Dropdown.Toggle>
          <label className='label-heading'>
            Type of Search <FontAwesomeIcon icon={faChevronDown} />
          </label>
          <div className='dynamic-text '>Hotels</div>
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Form.Group controlId='formHotelsCheckbox'>
            <Form.Check type='checkbox' label='Hotels' defaultChecked />
          </Form.Group>
          <Form.Group controlId='formEventsCheckbox'>
            <Form.Check type='checkbox' label='Events' />
          </Form.Group>
          <Form.Group controlId='formActivitiesCheckbox'>
            <Form.Check type='checkbox' label='Activities' />
          </Form.Group>
          <Form.Group controlId='formPlacesCheckbox'>
            <Form.Check type='checkbox' label='Places' />
          </Form.Group>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default KikerooSearchType;
