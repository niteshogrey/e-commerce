const express = require('express');
const connectDb = require('./src/config/dbConfig');
const user = require('./src/routes/authRoutes');
const app = express()
const dotenv = require('dotenv');
const category = require('./src/routes/categoryRoutes');
const product = require('./src/routes/productRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');

app.use(express.json());
dotenv.config()

//error handler

app.use(notFound);
app.use(errorHandler);

app.use("/api/v1/user", user)
app.use("/api/v1/category", category)
app.use("/api/v1/product", product)



const port = 1000
app.listen(port, async()=>{
    await connectDb()
    console.log(`Server running on ${port}`);
})
