import React, { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import { loggin } from '../Redux/Actions/AuthActions'

const Loggin = () => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLoggin=(a)=>{
    a.preventDefault()
    dispatch(loggin({password,email},navigate))
  }
  return (
    <Form>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={(e)=> setEmail(e.target.value)} type="email" placeholder="Enter email" />       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Enter password" />       
      </Form.Group>

      
      <Button variant="primary" type="submit" onClick={(e)=>handleLoggin(e)}>
        Submit
      </Button>
    </Form>
  )
}

export default Loggin