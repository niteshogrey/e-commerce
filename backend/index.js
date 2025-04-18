const express = require('express');
const connectDb = require('./src/config/dbConfig');
const user = require('./src/routes/authRoutes');
const app = express()
const dotenv = require('dotenv');

app.use(express.json());
dotenv.config()

app.use("/api/v1/user", user)

const port = 1000
app.listen(port, async()=>{
    await connectDb()
    console.log(`Server running on ${port}`);
})