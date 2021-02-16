import React from 'react';
import KikerooDatePicker from './SearchFilter/DatePicker';
const KikerooHome = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <div className='container'>
        <div className='search-mainwrapper'>
          <h1 className='widget-title text-center'>Search </h1>
          <div className='filterWrapper'>
            <KikerooDatePicker />
          </div>
        </div>
      </div>
    </div>
  );
};

export default KikerooHome;
