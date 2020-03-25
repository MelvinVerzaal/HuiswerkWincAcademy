
//deel 1
let person = {
    name: 'Melvin',
    age: '24'
}
/*
console.log(person);
console.log(person.name);
console.log(person.age);

console.log(person['name']);
console.log(person['age']);

let evaluations = [7, 10, 9];
console.log(evaluations);
*/

//deel 2
let newvariabele = [];
newvariabele.push('groen', 'blauw', 'rood');

console.log(newvariabele);
console.log(newvariabele.length);
console.log(newvariabele[0]);
console.log(newvariabele[newvariabele.length - 1]);

newvariabele.push('geel');
newvariabele.push(5);

let testobjc = {
    greeting: 'hi ik ben een object'
}
newvariabele.push(testobjc);
console.log(newvariabele);

//deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
		food: {
			favourite_food: "fish",
      medium_liked_food: "dried fruits", 
      disliked_food: "walnuts"
     }
  },
	{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: [ "Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
			favourite_food: "tuna",
      medium_liked_food: "canned food", 
      disliked_food: "all fruits"
     }
  },
	{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: [ "Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
			favourite_food: "meaty things",
      medium_liked_food: "tuna", 
      disliked_food: "canned food"
     }
  }
]
   
//1
console.log("naam van het laatste kattenras:", catBreeds[catBreeds.length - 1].name);
//2
console.log("energy levels van de eerste:", catBreeds[0].energy_level);
//3
console.log("eerste temperament tweede kat:", catBreeds[1].temperament[0]);
//4
console.log("laatst temperament van de derde kat:", catBreeds[2].temperament[catBreeds[2].temperament.length-1]);
//5
console.log("favoriete voedsel van de derde kat:", catBreeds[2].food.favourite_food);