//A
    //Sandwichshop
    //Sandwich
    //topping
    //tray
    function Sandwichshop(){
        console.log('Sandwich');
        console.log('topping');
        console.log('tray');
    };
    Sandwichshop('ham');

//B
    //declareerd
    function makeSandwich(topping){
        console.log('There you go, a sandwich with ' + topping);
    
    };
    //cald
    makeSandwich('ham');
    makeSandwich('pizza');
//C
/*
    function calculateDiscountedPrice(totalAmount, discount){
        return Math.round (totalAmount - discount);
    };

    calculateDiscountedPrice(50, 2.5);
    */
//D
function calculateDiscountedPrice(totalAmount, discount){
    if(totalAmount < 25){
    return Math.round (totalAmount - discount);
    }else{ return totalAmount;}
};

console.log(calculateDiscountedPrice(50, 2.5));
