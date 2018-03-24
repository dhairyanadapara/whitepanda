let router = require('express').Router();
let Place = require('../models/model');

router.get('/places', (req,res)=>{
    Place.find({},(err,places)=>{
        console.log(places);
        res.send({places:places});
    })
});

router.post('/places', (req,res)=>{

    let place = new Place();

    place.Name=req.body.name;
    place.Details.Price = req.body.price;
    place.Details.Picture = req.body.picture;
    place.Quantity = req.body.quantity;
    
    place.save((err)=>{
        if(err) return err;

        console.log(`added to database`);
    })
});

module.exports = router;