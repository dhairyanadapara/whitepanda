let mongoose = require('mongoose');
let credentials = require('../credentials/credentials')

mongoose.Promise = global.Promise;

var env = process.env.NODE_ENV || 'development';

if (env === 'development') {
    process.env.PORT = 3000;
    mongoose.connect(credentials.database, (err) => {
        if (err)
            console.log(err);
        else
            console.log('database is connected');
    });
} else if (env === 'test') {
    process.env.PORT = 3000;
    mongoose.connect(credentials.testdatabase, (err) => {
        if (err)
            console.log(err);
        else
            console.log('database is connected');
    });
}

module.exports ={
    mongoose
};