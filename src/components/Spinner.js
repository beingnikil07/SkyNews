import loading from './loading.gif';

import React, { Component } from 'react'

const Spinner=()=>{
    return (
      <div className='text-center'>
        <img src={loading} alt="" />
      </div>
    )
  }
export default Spinner;