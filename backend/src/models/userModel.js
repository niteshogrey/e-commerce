const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
 firstName :{
    type: String,
    required: true,
 },
 lastName :{
    type: String,
    required: true,
 },
 email: {
    type: String,
    required: true,
 },
 mobile:{
    type: Number,
    required: true,
 },
 password:{
    type: String,
    required: true
 },
 role:{
   type: String,
   enum: ["customer", 'admin'],
   default: "customer"
}
})

const User = mongoose.model("User", userSchema)

module.exports = User

// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//   full_name: { type: String, required: true },
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
//   role: { type: String, enum: ['customer', 'admin'], default: 'customer' },
//   created_at: { type: Date, default: Date.now }
// });

// module.exports = mongoose.model('User', userSchema);
