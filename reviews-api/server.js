const express = require('express');
const app = express()
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session')

require('./db/db');

app.use(session({
    secret:'hush child',
    resave:false,
    saveUninitialized:false
}));

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(cors({
    credentials: true,
    origin: "http://localhost:3000"
}))

app.use((req, res, next)=>{
    console.log(req.session.userId)
    next();
})

const userController = require('./controllers/userController.js');
const reviewController = require('./controllers/reviewController.js');

app.use('/reviews', reviewController)
app.use('/user', userController)


app.listen(process.env.PORT || 9000, ()=>{
    console.log('listening on port 9000')
})