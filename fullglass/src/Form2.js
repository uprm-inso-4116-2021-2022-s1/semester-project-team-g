import React, { useState } from 'react';
import './Form2.css';
import FormLogIn from './FormLogIn';
import Home from './Home';

const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/img-2.png' alt='wines' />
        </div>
        {!isSubmitted ? (
          <FormLogIn submitForm={submitForm} />
        ) : (
            <Home/>
        )}
      </div>
    </>
  );
};

export default Form;