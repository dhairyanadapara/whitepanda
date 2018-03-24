let router = require('express').Router();
let Place = require('../models/model');

router.get('/places', (req,res)=>{
    Place.find({},(err,places)=>{
        console.log(places);
        res.send({places:places});
    })
});

module.exports = router;