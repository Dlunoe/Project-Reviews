const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');

router.post('/login', async (req, res)=>{
    try{
        const foundUser = await User.findOne({username: req.body.username});

        if(foundUser){
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.userId = foundUser._id;
                req.session.username=foundUser.username;
                req.session.logged=true;

                res.json({
                    status:{
                        code:7
                    },
                    data: foundUser
                })
            }
        }
        else{
            req.session.message = 'Username or password is incorrect';
            res.redirect('/');
        }
    } catch(err){
        res.send(err);
    }
});

router.post('/register', async (req, res)=>{
    const password = req.body.password;

    const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    console.log(hashedPassword)

    req.body.password = hashedPassword;

    try{
        const createdUser = await User.create(req.body);

        req.session.userId=createdUser._id;
        req.session.username=createdUser.username;
        req.session.logged = true;

        res.json({
            status:{
                code: 8,
                data:createdUser
            }
        })
    }catch(err){
        res.send(err)
    }
})

module.exports = router;