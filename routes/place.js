let router = require('express').Router();
let Place = require('../models/model');
let total = require('../public/js/totalPrice');

router.get('/places', (req,res)=>{
    Place.find({},(err,places)=>{
        if(err) return res.status(404).send();

        res.render('cards',{places:places,total:total.totalPrice(places)});
    });
});

router.post('/places', (req,res)=>{

    let place = new Place();

    place.Name=req.body.Name;
    place.Details.Price = req.body.Price;
    place.Details.Picture = req.body.Picture;
    place.Quantity = req.body.Quantity;
    
    place.save((err)=>{
        if(err) return res.status(404).send();

        console.log(`added to database`);
    })
    res.redirect('/places');
});

router.delete('/places/:id',(req,res)=>{
    let id = req.params.id;

    Place.findOneAndRemove({_id:id},(err,place)=>{
        if(err) return res.status(404).send();;

        res.redirect('/places');
    });
});

module.exports = router;