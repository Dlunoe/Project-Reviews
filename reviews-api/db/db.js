const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', ()=>{
    console.log('server is servering')
});

mongoose.connection.on('error',(err)=>{
    console.log(err, "didn't connect")
});

mongoose.connection.on('disconnected', ()=>{
    console.log('mongoose disconnected')
});