//A
const findSpiderMan = function(superheroesToBeFiltered) {
    return superheroesToBeFiltered.find(function(superhero) {
      return superhero.name === "Spiderman";
    });
  };

//B
let array = [1, 2, 3];
const doubleArrayValues = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 2);
    });
    return newArray;
  };

//c
        const containsNumberBiggerThan10 = function(array) {
          return array.some(number => {
            return number > 10;
          });
        };
        containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11])

//d
function Italyinarray(array) {
    return array.includes("Italy");
  }
//E
const tenfold = function(array) {
    let newArray = [];
    array.forEach(number => {
      newArray.push(number * 10);
    });
    return newArray;
  };

//F
function isBelow100(array) {
    return array.every(number => {
      return number < 100;
    });
  }
  console.log(
    "Onder de 100?:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98])
  ); // false 
  console.log(
    "Onder de 100?:",
    isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11, 77, 84, 98])
  ); // true
//G
const numbers = [1, 81, 4, 53, 3, 6, 11, 77, 84, 98, 101, 206, 234];

const bigSum = function(array) {
  return array.reduce((acc, number) => {
    return acc + number;
  });
};
console.log("Big sum, add all numbers in array:", bigSum([3, 4]));
console.log("Big sum, add all numbers in array:", bigSum(numbers));

