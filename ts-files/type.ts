// // String
// let userName: string = 'Ilya';
//
// // Number
// let userAge: number = 19;
//
// // Boolean
// let isPeople: boolean = true;
//
// // Function
// function logMsg (userName: string, age: number, isPeople: boolean): string {
//   if (isPeople) {
//     return `${userName} ${age} years old`;
//   } else {
//     return 'Error';
//   }
// }
// logMsg(userName, userAge, isPeople);
//
// // Function arrow
// const logMsgArrow = (userName: string, age: number, isPeople: boolean): string => {
//   if (isPeople) {
//     return `${userName} ${age} years old`;
//   } else {
//     return 'Error';
//   }
// }
// console.log(logMsgArrow(userName, userAge, isPeople));
//
// // Type Any (JSON)
// let salary;
// salary = 5000;
//
// const userData = '{"bol": true, "num": 40}'
// const userObjJ: {
//   bol: true,
//   num: 40
// } = JSON.parse(userData);
// // console.log(userObjJ);
//
// // Type never
// const createError = (msg: string): never => {
//   throw new Error(msg);
// };
// createError('Error');

// Object destructuring
// const userObj = {
//   userName: 'Ilya',
//   userAge: 19,
//   isPeople: true
// }
// const logMsgObj = ({userName, userAge, isPeople}: {userName: string, userAge: number, isPeople: boolean}): string => {
//   if (isPeople) {
//     return `${userName} ${userAge} years old`;
//   } else {
//     return 'Error';
//   }
// }
// console.log(logMsgObj(userObj));
//
// // Array
// const departments: string[] = ['dev', 'design', 'figma'];
// const nums: number[] = [1, 4, 4];
// const Arr: number[][] = [[1,4], [2, 5]];
// const [first] = nums;

// // Tuples
// const userDataTuple: [boolean, number, string] = [true, 40, 'ilya'];
// const userDataTupleSpread: [boolean, number, ...string[]] = [true, 40, 'ilya', 'ann', 'alex'];

// Union
const message: string | number = 5;
const text: string | boolean | number = true;
const messages: string[] | number[] = ['d', 'df'];

function printMsg(msg: string | number): void {
  console.log(msg);
}
printMsg(5);
printMsg('hello');
