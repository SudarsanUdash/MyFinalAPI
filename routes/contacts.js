const express = require('express');
var router = express.Router();
const contactsModel = require('../models/contacts');

router.route('/')
    .get( async (req, res) =>{
        try{
            const data = await contactsModel.find({})
            res.json({
                data: data,
                message: true
            })
        }
        catch(err){
            res.json({
                message: false,
                error: err
            })
        }
    })
    .post( async (req, res) =>{
        const post = new contactsModel({
            fullname: req.body.fullname,
            email: req.body.email,
            message: req.body.message
        })

        try{
            const data = await post.save()
            res.json({
                status: 200,
                isSuccess: true,
                data: data,
                message: 'Successfully Inserted'
            })
            console.log("Inserted Successfully");
        }
        catch(err){
            res.json({
                message: err
            })
        }
    })

module.exports = router;