import React from 'react'
// import './Button.css'
// import './App.css'

function Button(props) {
  return (
    <>
     <button className='button' type='button'>{ props.message }</button>
     <h1>Hi!</h1>
     </>
  )
}
export default Button