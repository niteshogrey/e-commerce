const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRATE_KEY || "mynameiskhan";

const authanticateUser = async (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");  
  if (!token) {
    return res.status(401).json({ error: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, JWT_SECRET)    
    const user = await User.findById(decoded.user_id)    
    if (!user) {
        return res.status(401).json({ error: 'Invalid token.' });
      }
      req.user = user
      next();
  } catch (error) {
    return res.status(400).json({ error: 'Invalid token.' });
  }
};

const requireAdmin = (req, res, next) =>{
    if (req.user.role !== "admin") {
        return res.status(403).json({ error: 'Access denied. Admins only.' });
    }
    next();
}

module.exports = {authanticateUser, requireAdmin}