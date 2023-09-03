import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../counterSlice';

const ButtonAction = () => {
  
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default ButtonAction