let express = require('express');
let morgan = require('morgan');

let app = express();

app.listen(3000, ()=>{
    console.log('Server is UP');
})