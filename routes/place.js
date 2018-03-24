let router = require('express').Router();
let Place = require('../models/model');

router.get('/places', (req,res)=>{
    Place.find({},(err,places)=>{
        if(err) return res.status(404).send();

        console.log(__dirname);
        res.render('cards',{places:places});
        console.log(__dirname);
    });
});

router.post('/places', (req,res)=>{

    let place = new Place();

    place.Name=req.body.name;
    place.Details.Price = req.body.price;
    place.Details.Picture = req.body.picture;
    place.Quantity = req.body.quantity;
    
    place.save((err)=>{
        if(err) return res.status(404).send();

        console.log(`added to database`);
    })
});

router.delete('/places/:id',(req,res)=>{
    let id = req.params.id;



    Place.findOneAndRemove({_id:id},(err,place)=>{
        if(err) return res.status(404).send();;

        if (!place) {
            return res.status(404).send();
        }

        console.log(`Item is removed`);
    });
});

module.exports = router;