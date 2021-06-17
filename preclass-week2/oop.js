// prototype
const Animal = function () {} // first-class citizens

Animal.prototype.type = 'Mamalia';
Animal.prototype.eat = function() {
  console.log("nyum nyum");
}
Animal.prototype.sleep = function() {
  console.log('zzzz');
}

const bird = new Animal();

bird.type = 'unggas';
bird.eat();
bird.sleep();

console.log('bird type: ', bird.type);

const elephant = new Animal();
elephant.type = "reptill"
console.log('elephant type: ', elephant.type);

// constructor
const Vehicles = function(type, color, mileage) {
  this.type = type;
  this.color = color;
  this.mileage = mileage;
}

//instance 
const toyota = new Vehicles("sedan", "metal", 1000);
const pajero = new Vehicles("SUV", "dark", 2000);
const alphard = new Vehicles("minibus", "white", 2000);

Vehicles.prototype.price = 5000000;

console.log(toyota);
console.log(pajero.price);
console.log(alphard.price);

console.log( toyota instanceof Object);
