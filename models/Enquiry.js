var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');
var Schema = mongoose.Schema;

let EnquirySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
	  yourenquiry: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    }
  
  
    
},
    {
    timestamps: true
    });

var Enquiry = mongoose.model('Enquiry', EnquirySchema);
module.exports = Enquiry;