const express = require('express')
const { signUp, signIn } = require('../Controllers/User')
const isAuth = require('../Middlewares/isAuth')
const { registerValidation, validation, logginValidation } = require('../Middlewares/RegisterValidator')

const userRouter = express.Router()

userRouter.post('/SignUp',registerValidation,validation,signUp)

userRouter.post('/SignIn',logginValidation,validation,signIn)

userRouter.get('/getCurrentUser',isAuth,(req,res)=> res.send(req.user))





module.exports = userRouter