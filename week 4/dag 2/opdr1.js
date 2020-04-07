//A
const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  }; 
  const getCarBrand = car.getBrand;
  getCarBrand();   // output == console.log(brand) 

//B
const car = {
    brand: "Nissan",
    getBrand: function(){
      console.log(this.brand);
    }
  };
  const getCarBrand = car.getBrand.bind(car);
  getCarBrand();   // output: console.log(this.brand);

//C
<button id="btn" type="button">Get the car's brand</button>
     
     var car = {
       brand: "Nissan",
       getBrand: function(){
         console.log(this.brand);
       }
     };
      
     var el = document.getElementById("btn");
     el.addEventListener("click", car.getBrand.bind(car));
     // Hey car.getBrand functie, ik weet dat je nu op een element Button staat, 
     // maar je hoort bij het car object, daar bind ik je nu even expliciet aan vast.

//D
const car = {
    brand: "Nissan",
    getBrand: function(){
      const printBrandName = function(){
        console.log(this.brand);
      }.bind(this);
      return printBrandName();
    }
  };
   
  car.getBrand();   // output: Nissan

//E
var car = {
    brand: "Nissan",
    getBrand: function(){
       const printBrandName = () => {   
        console.log(this.brand);
      };
      return printBrandName();
    }
  };
  car.getBrand();   // output: Nissan