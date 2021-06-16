// objects

const person = {
  name: "Jhon Doe",
  age: 21,
  motto: "keep it simple boy"
};

// access properties object
// console.log(person.name);
// console.log(person.age);
// console.log(person.motto);

// console.log(person);

// changing value properties object
person.name = "Kelvin";
person.age = 23;
person.motto = "Be humble"

// console.log(person);
// document.write(JSON.stringify(person));

// user
const user = {
  name: "user",
  email: "user@gmail.com",
  password: "asfds"
}

// looping through properties
for (property in person) {
  console.log(typeof property);
  console.log(person[property]); 
};

// array of objects

const persons = [
  {
    name: "Jhon Doe",
    age: 21,
    motto: "keep it simple boy"
  },
  {
    name: "Lordgent",
    age: 20,
    motto: "Sharing is caring"
  },
  {
    name: "Diky",
    age: 19,
    motto: "nope"
  },
  {
    name: "Jony",
    age: 26,
    motto: "lu jual gua beli"
  },
];

// looping through array of object
for (elem of persons) {
  console.log(elem)
  console.log(elem.name);
};

// accessing certain object in array 
console.log(persons[1].name);