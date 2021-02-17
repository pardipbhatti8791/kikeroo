import React from 'react';
import { Button, Form } from 'react-bootstrap';
import KikerooDatePicker from './DatePicker';
import KikerooGuestFilter from './GuestFilter';
import KikerooMoreFilter from './MoreFilter';
import KikerooSearchType from './SearchType';

const KikerooSearchFilter = () => {
  return (
    <>
      <div className='filterWrapper d-flex'>
        <div className='filterSingle'>
          <KikerooSearchType />
        </div>
        <div className='filterSingle'>
          <KikerooDatePicker />
        </div>
        <div className='filterSingle'>
          <KikerooGuestFilter />
        </div>
        <div className='filterSingle'>
          <KikerooMoreFilter />
        </div>
      </div>
      <div className='location-filterWrapper '>
        <Form.Group className='w-100'>
          <label className='label-heading mb-3'>Type location</label>
          <input type='search' className='form-control' placeholder='search' />
        </Form.Group>
        <Form.Group className='mx-4'>
          <Button variant='primary' className='btn-xl'>
            Search
          </Button>
        </Form.Group>
        <Form.Group>
          <Button variant='warning' className='btn-xl'>
            Clear
          </Button>
        </Form.Group>
      </div>
    </>
  );
};

export default KikerooSearchFilter;
