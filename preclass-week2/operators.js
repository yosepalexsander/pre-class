// arithmetic operators

// addition

const MTK = 80;
const BAHASA = 85;
const sum = MTK + BAHASA;

// console.log(sum);
// subtraction
const subtract = MTK - BAHASA;
// console.log(subtract);

// multiplication
const multiplication = MTK * BAHASA; 
// console.log(multiplication);

// division 
const division = MTK / BAHASA;
// console.log(division);

// modulus
const modulus = BAHASA % MTK;
// console.log(modulus);

// increment 
let initialValue = 100;
const incrementBeforeVar = ++initialValue;
// console.log(incrementBeforeVar);

const incrementAfterVar = initialValue++;
// console.log(incrementAfterVar);

// console.log(initialValue);

// decrement
const decrementBeforeVar = --initialValue;
// console.log(decrementBeforeVar);

const decrementAfterVar = initialValue--;
// console.log(decrementAfterVar);

// console.log(initialValue);

// assignment operators
initialValue += 500; //short version

initialValue = initialValue + 500; //long version

// console.log(initialValue);



// logical operators

// AND (&&)
let a = 15;
let b = 20
const evaluationAND = ((a > 10) && (a > 20) && (a < b)); // if all comparison true, result would be true
console.log('AND result', evaluationAND);

// OR (||)
const evalutionOR = ((a > 10) || (a > 20) || (a > b))
console.log('OR result', evalutionOR);

// NOT (!)
const evaluationNOT = !(a < 20);
console.log('NOT result', evaluationNOT)


// comparison operators

// greater than
const greaterResult = 200 > 100;
console.log('greater than', greaterResult);

// greater than or equal
const greaterEqualResult = 100 >= 100;
console.log('greater than or equal', greaterEqualResult);

// less than
const lessResult = 100 < 200;
console.log('less than', lessResult);

// less than or equal
const lessEqualResult = 1000 <= 1000;
console.log('less than or equal', lessEqualResult);

// equal
const equalResult = '1000' == 1000;
console.log('equal', equalResult);

// strict equality
const strictEqualResult = '1000' === 1000;
console.log('equal', strictEqualResult);

// not equal
const notEqualResult = 1001 != 1000;
console.log('not equal', notEqualResult);

// strict inequality
const strictNotEqualResult = '1000' !== 1000;
console.log('not equal', strictNotEqualResult);