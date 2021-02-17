import React from 'react';
import KikerooDatePicker from './SearchFilter/DatePicker';
import KikerooGuestFilter from './SearchFilter/GuestFilter';
import KikerooSearchType from './SearchFilter/SearchType';
const KikerooHome = () => {
  return (
    <div className='commonbody-bg commonbody-topPadding'>
      <div className='container'>
        <div className='search-mainwrapper'>
          <h1 className='widget-title text-center'>Search </h1>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default KikerooHome;
