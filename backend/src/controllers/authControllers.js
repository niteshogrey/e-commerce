const User = require("../models/userModel")
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

const registerUser = async(req, res) =>{
    const {firstName, lastName, mobile, email, password} = req.body
    if (!firstName || !lastName || !mobile || !email || !password) {
      return  res.status(400).json({
            success: false,
            message: "All fields are required"
        })        
    }
    try {

        const userExist = await User.findOne({ $or : [{email}, {mobile}]})

        if (userExist) {
            return res.status(400).json({
                success: false,
                message: "User already exist"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({
            firstName,
            lastName,
            mobile,
            email,
            password : hashedPassword
        })

        await newUser.save()
        res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: newUser,
          })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error registering user",
            error: error.message,
          });     
    }
}

const loginUser = async(req, res) =>{
    const {mobile, password} = req.body
    if (!mobile || !password) {
        return req.status(400).json({
            success: false,
            message: "All fields are required"
        })
    }
    try {
        const userExist = await User.findOne({mobile})
        if (!userExist) {
            return req.status(400).json({
                success: false,
                message: "User not exist please sign up"
            })
        }
        const isMatch = await bcrypt.compare(password, userExist.password)
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Wrong password"
            })
        }
        const token = await jwt.sign({id: userExist.id}, process.env.JWT_SECRATE_KEY, {expiresIn: "1h"})
        return  res.status(201).json({
            success: true,
            message: "User logged in successfully",
            token,
            user: {
                id: userExist?._id,
                firstname: userExist?.firstName,
            }
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error logging user",
            error: error.message,
          });     
    }
}

module.exports = { registerUser, loginUser}