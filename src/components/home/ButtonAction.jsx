import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../counterSlice';
import { changeColor } from '../../colorSlice';
import Button from '../common/buttons';

const ButtonAction = () => {
  
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(increment())}>Increment</Button>
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>
     
    </div>
  )
}

export default ButtonAction