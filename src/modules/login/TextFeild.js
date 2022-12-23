import React from 'react'

function TextFeild(props) {
  return (
    <div className='textFeild'>
      <label htmlFor={props.label}>{props.label}</label>
      <textarea htmlFor={props.label} type={props.type} />
    </div>
  )
}

export default TextFeild