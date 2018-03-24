let express = require('express');
let morgan = require('morgan');
let mongoose = require('mongoose');
let bodyParser = require('body-parser');


let credentials = require('./credentials/credentials');
let app = express();

mongoose.connect(credentials.database, (err) => {
    if (err)
        console.log(err);
    else
        console.log('database is connected');
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

let placeRoute = require('./routes/place.js')

app.use(placeRoute);


app.listen(credentials.port, ()=>{
    console.log('Server is UP');
});