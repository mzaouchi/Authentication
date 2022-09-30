import { CURRENTUSER, FAIL, LOGGIN, LOGOUT, REGISTER } from "../ActionTypes/AuthTypes"

const initialState={
    user : {},
    err : []
}

const AuthReducer=(state = initialState,action)=>{
    switch (action.type) {
        case FAIL : return {...state,err: action.payload.errors,user : null}

        case REGISTER : 
            localStorage.setItem('token',action.payload.token)
            return {...state,user : action.payload.newUser,err : null}

        case LOGGIN : 
            localStorage.setItem('token',action.payload.token)
            return {...state,user : action.payload.found,err : null}

        case CURRENTUSER : return {...state,user : action.payload}

        case LOGOUT : 
            localStorage.removeItem('token')
            return {...state,user : null,err : null}
        default: return state
    }
}

export default AuthReducer