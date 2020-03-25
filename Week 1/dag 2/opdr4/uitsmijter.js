const minage = 18;

//Test data
const isFemale = false;
const driverStatus ='Bob';
let age = 40;



//minderjarig
if (age > minage){
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
if(driverStatus == 'Bob'){
    console.log('Ja, Je mag rijden');
}else{ console.log('Nop, Je heb te veel op'); }