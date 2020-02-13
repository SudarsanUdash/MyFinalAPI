var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let ItemSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    imageName: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        required: true
    }
    
},
    {
    timestamps: true
    });

var Item = mongoose.model('Item', ItemSchema);
module.exports = Item;