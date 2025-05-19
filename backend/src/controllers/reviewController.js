const Review = require("../models/reviewModel")

const submitReview =async(req, res) =>{
    try {
        const {product_id, rating, comment} = req.body
        let review = await Review.findOne({user_id: req.user._id, product_id})
        if (review) {
            // Update existing review
            review.rating = rating;
            review.comment = comment;
          } else {
            // Create new review
            review = new Review({
              user_id: req.user._id,
              product_id,
              rating,
              comment
            });
          }
          await review.save()
          res.json(review);
    } catch (error) {
        res.status(400).json( error.message);
    }
}


const getUserReview = async(req, res) =>{
    try {
        const reviews = await Review.find({user_id: req.user._id}).populate('product_id')
        res.json(reviews);
    } catch (error) {
        res.status(500).json( error.message);
    }
}

const deleteReview = async(req, res) =>{
    try {
        const { product_id} = req.params
        await Review.findOneAndDelete({user_id: req.user._id, product_id})
        res.json({ message: 'Review deleted' });
    } catch (error) {
        res.status(500).json( error.message);
    }
}

module.exports = {submitReview, getUserReview, deleteReview}