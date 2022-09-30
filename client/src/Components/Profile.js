import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { currentUser } from '../Redux/Actions/AuthActions'

const Profile = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(currentUser())
  },[])

  const user = useSelector(state => state.AuthReducer.user)
  return (
    <div>
      
        <h1>{user.name}</h1>
      
    </div>
  )
}

export default Profile