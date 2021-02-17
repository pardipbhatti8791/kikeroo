import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

const KikerooDatePicker = () => {
  const startDate = '2/1/2021';
  const endDate = '2/1/2021';

  return (
    <div className='datePickerFilter'>
      <DateRangePicker
        initialSettings={{
          startDate,
          endDate,
          locale: {
            format: 'DD MMM',
          },
        }}
      >
        <div>
          <label className='label-heading'>
            Dates <FontAwesomeIcon icon={faChevronDown} />
          </label>
          {/* <input type='text' className='dateInput' /> */}
          <div className='dynamic-text'>13 Dec - 21 Dec</div>
        </div>
      </DateRangePicker>
    </div>
  );
};

export default KikerooDatePicker;
