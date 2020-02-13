var express = require('express');
var Enquiry = require('../models/Enquiry');
var Item = require('../models/Item');
var User = require('../models/User');


var router = express.Router();

router.route('/')
.get(async (req, res, next) => {
    let enquiries = await Enquiry.find({});
    let items= await Item.find({});
    let users = await User.find({});
    
    
    res.json({
        enquirycount: enquiries.length,
        usercount: users.length,
        itemcount: items.length,
        
        
    });
});
module.exports = router;