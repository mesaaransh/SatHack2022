import React from 'react'

function InputFeild(props) {
  return (
    <div className='inputFeild'>
      <label htmlFor={props.label}>{props.label}</label>
      <input htmlFor={props.label} type={props.type} />
    </div>
  )
}

export default InputFeild