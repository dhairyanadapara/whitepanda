let mongoose = require('mongoose');

let PlacesSchema = mongoose.Schema({
    Name: {type : String, require:true },
    Details:{ 
        Price: {type : Number, require: true },
        Picture: {type : String }
    },
    Quantity:{type: Number, default: 1}
});

module.exports = mongoose.model('PlacePrice ', PlacesSchema, 'places');