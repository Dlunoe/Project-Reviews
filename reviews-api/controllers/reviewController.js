const express = require('express');

const router = express.Router();

const Review = require('../models/review');

router.get('/', async (req, res, next)=>{
    try{
        const allReviews = await Review.find().populate('User');
        res.json({
            status:{
                code: 200,
                message:"success"
            },
            data: allReviews
        })
    } catch(err){
        res.send(err)
    }
});


router.post('/', async (req,res)=>{
    req.body.creator = req.session.userId;
    try{
        console.log('this is', req.body)
        const madeReview = await Review.create(req.body);
        res.json({
            status:{
                code:201,
                message:"review made"
            },
            data: madeReview
        })
    } catch(err){
        res.send(err)
    }
})

router.get('/:id', async (req, res, next)=>{
    try{
        const foundReview = await Review.findById(req.params.id).populate('User');
        res.json({
            status:{
                code:200,
                message: "found the review"
            },
            data: foundReview
        })
    } catch(err){
        res.send(err);
    }
})

router.put('/:id', async (req, res)=>{
    try{
        const updatedReview = await Review.findByIdAndUpdate(req.params.id, req.body, {new:true});
        res.json({
            status:{
                code:200,
                message:"review updated"
            },
            data:updatedReview
        })
    } catch(err){
        res.send(err)
    }
})

router.delete('/:id', async (req, res)=>{
    try{
        const deletedReview = await Review.findByIdAndRemove(req.params.id);
        res.json({
            status:{
                code:200,
                message: 'review deleted'
            },
            data: deletedReview
        })
    } catch(err){
        res.send(err)
    }
});

module.exports = router