let express = require('express');
let morgan = require('morgan');
let mongoose = require('./models/mongoose');
let bodyParser = require('body-parser');
let path = require('path');
let hbs  = require('hbs');
let methodOverride = require('method-override');


let credentials = require('./credentials/credentials');
let app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));

let placeRoute = require('./routes/place.js')

app.use(placeRoute);

app.listen(credentials.port, ()=>{
    console.log('Server is UP');
});

module.exports = app;