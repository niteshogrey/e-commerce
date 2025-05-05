const express = require('express')
const { submitReview, getUserReview, deleteReview } = require('../controllers/reviewController')
const { authanticateUser } = require('../middleware/authMiddleware')

const review = express.Router()

review.use(authanticateUser)

review.post("/submit", submitReview)
review.get("/my-reviews", getUserReview)
review.delete("/delete/:product_id", deleteReview)

module.exports = review