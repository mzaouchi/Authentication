import { ALERTERROR, CLEARERROR } from "../ActionTypes/ErrorTypes"

export const alertError=(msg)=>(dispatch)=>{
    try {
        const id = Math.random()
        dispatch({
            type : ALERTERROR,
            payload : {id,msg}
        })

        setTimeout(() => {
            dispatch({
                type: CLEARERROR,
                payload : id
            })
        }, 3000);
    } catch (error) {
        console.log(error)
    }
}