// while
let i = 1;
while (i <= 10) {
  console.log("hi i'm rafel");
  i++;
}

// do while 
do {
  console.log("hi i'm rafel");
  i++;
} while(i <= 10);

// classical for loop
for (let i = 1; i <= 10; i++) {
  console.log("hi i'm rafel");
}

const person = {
  name: "kelvin",
  age: 23,
  hobby: "playing football"
}

// for in (looping properti object)
for (properti in person) {
  console.log(properti);
  console.log(person[properti]);
}

const array =[1,2,3,4,5,6,7,8,10];
const name = "jody septiawan";

for (let elm of array) {
  console.log(elm);
};

// nested loop
for (let i = 0; i < 5; i++) { //outer loop
  console.log('outer', i)
  for (let j = 0; j < 5; j++) { //inner loop
    console.log('inner', j)
  }
}

// study case (pattern)
for (let i = 1; i < 5; i++) { //outer loop
  document.write('i =',i);
  for (let j = 0; j <= i; j++) { //inner loop
    document.write('j =', j)
  }
  document.write('<br>')
}

// prime number
function isPrime(num) {
  if (num === 2) {
    return true
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true
}

function printPrime(num) {
  for (let i = 2; i <= num; i++) {
    if(isPrime(i)) {
      console.log(i)
    }
  }
}

printPrime(20);


let num = 6;

if(num % 2 === 0) {
  console.log('even');
}

if(num % 2 !== 0) {
  console.log('even')
}
