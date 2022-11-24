import React from 'react'

function InputFeild(props) {
  return (
    <div className='inputFeild'>
      <label htmlFor="">{props.label}</label>
      <input type={props.type} />
    </div>
  )
}

export default InputFeild