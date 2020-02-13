var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let ReviewSchema = new Schema({
   rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true,
    },
    
    review: {
        type: String,
        required: true,
       
    }
   

},
    {
    timestamps: true
    });

var Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;