import { CURRENTUSER, FAIL, LOGGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"
import axios from 'axios'
import { alertError } from "./ErrorActions"
export const register=(nvUser,navigate)=>async(dispatch)=>{
    try {
        const res  = await axios.post('/api/users/SignUp',nvUser)
        dispatch({
            type : REGISTER,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        console.log(error.response.data)
        dispatch({
            type : FAIL,
            payload : error.response.data
        })

        error.response.data.errors.forEach(el=> dispatch(alertError(el.msg)))
    }
}

export const loggin=(nvUser,navigate)=>async(dispatch)=>{
    try {
        const res = await axios.post('/api/users/SignIn',nvUser)
        dispatch({
            type : LOGGIN,
            payload : res.data
        })
        navigate('/Profile')
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
        
    }
}

export const currentUser=()=>async(dispatch)=>{
    const config = {
        headers:{
            Authorized : localStorage.getItem('token')    
        }
    }
    try {
        const res = await axios.get('/api/users/getCurrentUser',config)

        dispatch({
            type : CURRENTUSER,
            payload : res.data
        })
    } catch (error) {
        dispatch({
            type : FAIL,
            payload : error.response.data
        })
    }
}

export const logout=()=>{
    return({
        type : LOGOUT
    })
}