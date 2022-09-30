import React from 'react'
import {Alert} from 'react-bootstrap'
import {useSelector} from 'react-redux'
const ErrorComp = () => {
  const errYaakoub = useSelector(state=>state.ErrorReducer)
  return (
    <div>
      {
        errYaakoub.map(el=>
          <Alert variant='danger'>
          {el.msg}
        </Alert>
          )
      }
        
    </div>
  )
}

export default ErrorComp