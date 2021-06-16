// if statement
const UTS_MTK = 85;
const KKM = 75;

if (UTS_MTK > 80) {
  console.log('you received grade A');
} else {
  console.log('your score is under standard, remedial!!')
}

// nested if
if (UTS_MTK > KKM) {
  if (UTS_MTK > 80) {
    console.log('your grade is A');
  } else if(UTS_MTK > 75) {
    console.log('your grade is B');
  } else {
    console.log("you don't have grade");
  }
  console.log('You passed');
} else {
  console.log('remedial!!!');
}

// switch case
const status = "LOGIN";

switch(status) {
  case "LOGIN":
    console.log("you don't have permission");
    break;
  case 'LOGOUT':
    console.log("you have access");
    break;
  default:
    console.log("unknown type");
}

// ternary operator

// const hasil = condition ? codeIfTrue : codeIfFalse; // skema penulisan

const hasilTernary = UTS_MTK > KKM ? 'You passed' : 'You Failed'


const hasilNestedTernary = UTS_MTK > KKM 
              ? UTS_MTK > 80 
                ? 'you received grade A': UTS_MTK > 75 
                ? 'your grade is B' : "you don't have grade"
              : 'your score is under standard, remedial!!'

console.log('announce: ',hasilNestedTernary);


