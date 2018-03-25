module.exports.totalPrice = function(places){
    let total = 0;
    
    for(var place in places){
        total += (places[place].Details.Price);
    };

    return total;
}