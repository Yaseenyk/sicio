const express = require('express');

const app = express();
const port = 8000;

// use express Routing

app.use('/',require('./routes/router'));





app.listen(port,function(){
    console.log('Server Started')
})