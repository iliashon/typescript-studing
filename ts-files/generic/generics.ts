// function processing<T>(data: T): T {
//   return data;
// }
//
// const res1 = processing(1);
// const res2 = processing('1');
//
// const res3 = processing<number>(10);
//
// interface IPrint {
//   desing: number;
// }
//
// interface IPrintES {
//   desing: string;
// }
//
// interface Print<T> {
//   desing: T;
// }
//
// const somePrint: Print<string> = {
//   desing: 'ten'
// }

// function processing<T, S>(data: T[], options: S): string {
//   data.length;
//   switch (typeof data) {
//     case "string":
//       return `${data}, speed: ${options}`;
//       break;
//     case "number":
//       return `${data}, speed: ${options}`;
//       break;
//     default:
//       return "Not valid";
//   }
// }
//
// const res1 = processing([1], 'slo');
// const res2 = processing(['1'], 'slo');
//
// const res3 = processing<number, string>([10], 'slo');
//
// function processings<T>(data: T): T {
//   return data;
// }
//
// let newFunc: <T>(data: T) => T = processings;
//
// interface  DataServer {
//   process: <T>(data: T) => T;
// }
//
// const server: DataServer = {
//   // process(data) {
//   //   console.log(data);
//   //   return data;
//   // }
//   // process: <T>(data: T) => {
//   //   return data;
//   // }
//   process: processings
// }

import * as stream from "stream";

interface ProcessingFn {
  <T>(data: T): T;
}

function processing<T>(data: T): T {
  return data;
}

let newFunc: ProcessingFn = processing;

type Smth<T> = T;

const num: Smth<number> = 5;

interface ParentsOfUser {
  mother: string, father: string,
}

interface User<ParentsData extends ParentsOfUser> {
  login: string;
  age: number;
  parents: ParentsData;
}

const user: User<{mother: string, father: string, married: string}> = {
  login: 'str',
  age: 54,
  parents: {
    mother: 'anna',
    father: 'alex',
    married: 'no',
  }
}

type OrNull<Type> = Type | null;
type OneOrMany<Type> = Type | Type[];

const data: OneOrMany<number[]> = [5];

const deposit = <T extends number | string>(amount: T): T => {
  console.log(`reg ${amount}`);
  return amount;
}
deposit(500);
