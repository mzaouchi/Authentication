const User = require('../Models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

exports.signUp=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found = await User.findOne({email})

        if(found){
            return res.status(400).send('Email already exist')
        }

        const newUser = new User(req.body)

        const saltRounds = 10

        const hashedPassword = bcrypt.hashSync(password,saltRounds)

        newUser.password = hashedPassword

        await newUser.save()

        const payload = {id : newUser._id }

        var token = jwt.sign(payload, process.env.privateKey);

        res.status(200).send({Msg : "SignUp success",newUser,token})        
    } catch (error) {
        res.status(500).send('Could not SignUp')
    }
}

exports.signIn=async(req,res)=>{
    try {
        const {email,password} = req.body

        const found  = await User.findOne({email})

        if(!found){
            return res.status(400).send('Email not found')
        }

        const match = bcrypt.compareSync(password, found.password)

        if(!match){
            return res.status(400).send('Wrong Password')
        }

        const payload = {id : found._id }

        var token = jwt.sign(payload, process.env.privateKey, { expiresIn: '1min' });

        res.status(200).send({Msg :'SignIn success', found,token})
    } catch (error) {
        res.status(500).send('Could not SignIn')
    }
}