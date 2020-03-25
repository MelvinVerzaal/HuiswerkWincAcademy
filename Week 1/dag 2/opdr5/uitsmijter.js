const minage = 18;

//Test data
const isFemale = false;
const driverStatus ='Bob';
const name ='Bram';
const totalAmount = 25;
let age = 23;




//minderjarig
if (age >= minage){
    console.log('persoon mag naar binnen kwa leeftijd');
}else{
    console.log('Helaas bent u te jong om naar binnen te mogen');
}

//vrouwelijk genoeg
if(isFemale){
    console.log('Ja je bent vrouwelijk (ook al zie je dat niet)');
}else{
    console.log('Nee wij zijn super sexisties, Wat nou feminisme... Vrouwen worden alleen maar voor getokken hierzo.');
}

//rijdbaar
if(driverStatus === 'Bob'){
    console.log('Ja, Je mag rijden');
}else{ console.log('Nop, Je heb te veel op'); }


//Korting vanwege 50 jarig jubeleum
if(age <= 25 && age >= 18 ){
    console.log('Vanwege je leeftijd krijg je 50% corting op je bier'); 
}
if(name ==='Bram' || name==='Sarah'){
    console.log('Je krijgt een gratis bietje vanwegen je naam'); 
}

if(totalAmount >= 100){
    console.log('gratis flesje champagne.')
} else if (totalAmount > 50) {
    console.log('gratis portie nachos')
} else if (totalAmount > 25) {
    console.log('gratis (vega)bitterballen')
} else {
    console.log('Helaas geen korting, maar leuk dat je er bent')
}
