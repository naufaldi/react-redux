import React from 'react'
import Button from '../common/buttons'
import { changeColor } from '../../colorSlice'
import { useDispatch } from 'react-redux';

const ButtonColor = () => {
  const dispatch = useDispatch();
  return (
    <Button onClick={()=> dispatch(changeColor())}>Change Color  </Button>
  )
}

export default ButtonColor