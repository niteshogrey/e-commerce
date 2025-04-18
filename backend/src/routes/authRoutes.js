const express = require("express")
const {registerUser, loginUser} = require("../controllers/authControllers")

const user = express.Router()

user.post("/register", registerUser) //http://localhost:1000/api/v1/user/register

user.post("/login", loginUser)  //http://localhost:1000/api/v1/user/login


module.exports = user