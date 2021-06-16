// Array
const todos = [];

// adding element to last position array;
todos.push("ngepel rumah");
todos.push("mandi");
todos.push("mengerjakan tugas sekolah");

// adding element to first position array
todos.unshift("tidur");

todos[4] = "makan"

// length array
console.log(todos.length);

// document.write(todos)
console.log(todos)

// removing element at last position
todos.pop();

// removing element at first position
todos.shift();

// slicing array (copy element tertentu)
const todos2 = todos.slice(0, 2);

// splice array ()
const todos3 = todos.splice(1, 1);

console.log('original todos', todos);
console.log('todos by slice', todos2);
console.log('todos by splice', todos3);

// looping through array
const primes = [1,3,5,7,11,13,17,19];

// classical for loop
for (let i = 0; i < primes.length; i++) {
  // document.write(`${primes[i]} + <br>`) // i == index
  console.log(`index ${i}: ${primes[i]}`)
}

// for of
for (element of primes) {
  console.log(element)
}

// forEach
primes.forEach(elm => {
  console.log(elm)
})

const multidimentionArray = [1, [1,2,3,4,5,6,7,8,9,10], 3];

for (elem of nestedArray) {
  if (typeof elem === 'object') {
    for (innerElem of elem) {
      console.log(innerElem)
    }
  }
};

