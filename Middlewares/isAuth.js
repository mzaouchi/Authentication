const User = require("../Models/User")
const jwt = require('jsonwebtoken')

const isAuth=async(req,res,next)=>{
    try {
        const token = req.header('Authorized')

        var decoded = jwt.decode(token)

        if(!decoded){
            return res.status(400).send('Invalid token')
        }

        const user = await User.findById(decoded.id)

        req.user = user

        next()
    } catch (error) {
        res.status(500).send('Could not Auth')
    }
}

module.exports = isAuth