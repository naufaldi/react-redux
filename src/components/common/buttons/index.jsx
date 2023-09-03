import React from 'react'

const Button = ({onClick, children}) => {
  return (
    <button onClick={onClick} className='makan'>
      {children}
    </button>
  )
}

export default Button