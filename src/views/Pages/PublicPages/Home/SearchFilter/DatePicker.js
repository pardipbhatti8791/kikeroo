import React from 'react';
import DateRangePicker from 'react-bootstrap-daterangepicker';
import 'bootstrap-daterangepicker/daterangepicker.css';

const KikerooDatePicker = () => {
  const startDate = '2/1/2021';
  const endDate = '2/1/2021';

  return (
    <>
      <label>Dates</label>
      <DateRangePicker
        initialSettings={{
          startDate,
          endDate,
          locale: {
            format: 'DD MMM',
          },
        }}
      >
        <input type='text' />
      </DateRangePicker>
    </>
  );
};

export default KikerooDatePicker;
