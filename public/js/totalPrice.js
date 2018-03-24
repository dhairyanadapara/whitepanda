module.exports.totalPrice = function(places){
    console.log("Hello World")
    let total = 0;
    console.log(places);
    for(var place in places){
        total += (places[place].Details.Price);
    };

    return total;
}