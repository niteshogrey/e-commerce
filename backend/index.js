const express = require('express');
const connectDb = require('./src/config/dbConfig');
const user = require('./src/routes/authRoutes');
const app = express()
const cors = require('cors');            
const dotenv = require('dotenv');
const category = require('./src/routes/categoryRoutes');
const product = require('./src/routes/productRoutes');
const { notFound, errorHandler } = require('./src/middleware/errorMiddleware');
const cart = require('./src/routes/cartRoutes');
const review = require('./src/routes/reviewRoutes');
const banner = require('./src/routes/bannerRoutes');

app.use(express.json());
dotenv.config()
app.use(cors())

//error handler

// app.use(notFound);
// app.use(errorHandler);

app.use("/api/v1/user", user)
app.use("/api/v1/category", category)
app.use("/api/v1/product", product)
app.use("/api/v1/cart", cart)
app.use("/api/v1/review", review)
app.use("/api/v1/banner", banner)


const port = 1000
app.listen(port, async()=>{
    await connectDb()
    console.log(`Server running on ${port}`);
})
