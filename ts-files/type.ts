// String
let userName: string = 'Ilya';
// Number
let userAge: number = 19;
// Boolean
let isPeople: boolean = true;
// Function
function logMsg (userName: string, age: number, isPeople: boolean): string {
  if (isPeople) {
    return `${userName} ${age} years old`;
  } else {
    return 'Error';
  }
}
logMsg(userName, userAge, isPeople);
// Function arrow
const logMsgArrow = (userName: string, age: number, isPeople: boolean): string => {
  if (isPeople) {
    return `${userName} ${age} years old`;
  } else {
    return 'Error';
  }
}
console.log(logMsgArrow(userName, userAge, isPeople));
