import React from 'react';
import './Form.css';

const FormSuccess = () => {
  return (
    <div className='form-content-right'>
      <h1 className='form-success'>Your request has been successfully submitted!</h1>
      <img className='form-img-2' src='img/img-1.png' alt='success-image' />
    </div>
  );
};

export default FormSuccess;