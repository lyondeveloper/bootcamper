import React from 'react';

const Spinner = () => {
  return (
    <div className='d-flex justify-content-center'>
      <div
        className='spinner-grow'
        style={{ width: '10rem', height: '10rem', marginTop: '10rem' }}
        role='status'
      >
        <span className='sr-only'>Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;
