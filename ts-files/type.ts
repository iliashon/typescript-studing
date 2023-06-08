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
// const message: string | number = 5;
// const text: string | boolean | number = true;
// const messages: string[] | number[] = ['d', 'df'];
//
// function printMsg(msg: string | number): void {
//   console.log(msg);
// }
// printMsg(5);
// printMsg('hello');

// Narrowing
// function printMsg(msg: string | number): void {
//   if (typeof msg === 'string') {
//     console.log(msg.toUpperCase());
//   } else {
//     console.log(msg * 2);
//   }
// }
// function printMsg(msg: string[] | number): void {
//   if (Array.isArray(msg)) {
//     msg.forEach(m => console.log(m));
//   } else if (typeof msg === "number") {
//     console.log(msg.toFixed());
//   } else {
//     console.log(msg);
//   }
// }
// printMsg(5);
// printMsg(['3df', '4df', '5df']);

// Literal types
// let msg: 'hello' = 'hello';
// msg = 'hello';
//
// const port3000: number = 3000;
// const port3001: number = 3001;
// function startServer(protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' {
//   if (port === port3000 || port === port3001) {
//     console.log(`Server started on ${protocol}://server:${port}`)
//   }
//   return 'Server started';
// }
// startServer('http', 3001);

// Aliases type
// type AnimTimingFunc = 'ease' | 'ease-out' | 'ease-in';
// function createAnimation(id: string | number,
//                          animationName: string,
//                          timingFunc: AnimTimingFunc = 'ease',
//                          duration: number,
//                          iterCount: 'infinite' | number
//                          ): void {
//   console.log(`${animationName} ${timingFunc} ${duration} ${iterCount}`);
// }
//
// createAnimation('id', 'fade', 'ease-in', 5, 'infinite');

// Object literal and annotation
// const serverConfig: {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
// } = {
//   protocol: 'http',
//   port: 3001,
// }
// const port3000: number = 3000;
// const port3001: number = 3001;
// const startServer: (protocol: 'http' | 'https', port: 3000 | 3001) => string =
//   (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
//   if (port === port3000 || port === port3001) {
//     console.log(`Server started on ${protocol}://server:${port}`)
//   }
//   return 'Server started';
// }
// startServer(serverConfig.protocol, serverConfig.port);

// Type (Intersection)
// type Config = {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
// };
// type Role = {
//   role: string,
// }
// type ConfigWithRole = Config & Role;
//
// const serverConfig: ConfigWithRole  = {
//   protocol: 'http',
//   port: 3001,
//   role: 'admin',
// }
//
// const beckupConfig: ConfigWithRole = {
//   protocol: 'https',
//   port: 3000,
//   role: 'sysadmin',
// }
//
// const port3000: number = 3000;
// const port3001: number = 3001;
//
// type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001) => string;
// const startServer: StartFunction =
//   (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
//   if (port === port3000 || port === port3001) {
//     console.log(`Server started on ${protocol}://server:${port}`)
//   }
//   return 'Server started';
// }
// startServer(serverConfig.protocol, serverConfig.port);

// interface

// type Config = {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
// };

// interface IConfig {
//   protocol: 'http' | 'https';
//   port: 3000 | 3001;
//   log: (msg: string) => void
// }
//
// interface Role {
//   role: string,
// }
//
// interface ConfigWithRole extends IConfig, Role {}
//
// const serverConfig: ConfigWithRole  = {
//   protocol: 'http',
//   port: 3001,
//   role: 'admin',
//   log: (msg: string): void => console.log(msg),
// }
//
// const port3000: number = 3000;
// const port3001: number = 3001;
//
// type StartFunction = (protocol: 'http' | 'https', port: 3000 | 3001, log: (msg: string) => void) => string;
// const startServer: StartFunction =
//   (protocol: 'http' | 'https', port: 3000 | 3001): 'Server started' => {
//     if (port === port3000 || port === port3001) {
//       console.log(`Server started on ${protocol}://server:${port}`)
//     }
//     return 'Server started';
//   }
// startServer(serverConfig.protocol, serverConfig.port, serverConfig.log);

// // multi Interface
// interface Istyles {
//   [key: string]: string;
// }
//
// const stylees: Istyles = {
//   position: 'absolut',
//   top: '20px',
//   left: '50px',
// }
// console.log(stylees);

// problem Json.parse interface

// const userData = '{"isBirthdayDat": true, "ageData": 19, "userNameData": "Ilya"}';
//
// interface UserData {
//   isBirthdayData: boolean;
//   ageData: number;
//   userNameData: string;
// }
//
// const userOnj: UserData = JSON.parse(userData);
// console.log(userOnj.ageData);
//
// let isOkey = true;
// let movement: boolean | string = false;
//
// if (isOkey) {
//   movement = "moving";
// }

//  not use '?' && 'string | undefined' and readonly

// interface User {
//   readonly login: string;
//   password: string;
//   age: number;
//   // addr?: string;
//   readonly addr: string | undefined,
//   parents?: {
//     mother?: string;
//     father?: string;
//   }
// }
//
// const user: User = {
//   login: 'user',
//   password: 'qqq',
//   age: 19,
//   addr: 'asdf',
//   parents: {
//     mother: 'lena',
//     father: 'alex',
//   },
// }
//
// const userFreez: Readonly<User>= {
//   login: 'user',
//   password: 'qqq',
//   age: 19,
//   addr: 'asdf',
//   parents: {
//     mother: 'lena',
//     father: 'alex',
//   },
// }
//
// let dbName: string;
//
// function sendUserData(obj: User, db?: string): void {
//   console.log(obj.parents!.father?.toUpperCase(), db?.toUpperCase());
// }
//
// const basicPorts: ReadonlyArray<number> = [3000, 3001, 5555];

//  enums
//
// const TOP = 'Top';
// const RIGHT = 'Right';
//
// enum Directions {
//   TOP,
//   RIGHT,
//   LEFT,
//   BOTTOM
// }
// enum TimingFunc {
//   EASE = 'ease',
//   EASE_IN = 'ease-in',
//   LINER = 'liner'
// }
//
// const enum TimingFuncN {
//   EASE = 1,
//   EASE_IN = 2,
//   LINER = EASE * 2
// }
// function  frame(elem: string, dir: Directions, tFunc: TimingFunc): void {
//   if (dir === Directions.RIGHT) {
//     console.log(tFunc);
//   }
// }
//
// frame('id', Directions.RIGHT, TimingFunc.EASE);

// type unknown

// let smth: unknown;
//
// smth = 'str';
//
// // let data: string[] = smth;
// data.find(e => e);
//
// const someValue: unknown = 10;
// // someValue.method();
// function fetchData(data: unknown): void {
//   if (typeof data === "string") {
//     console.log(data.toUpperCase());
//   }
// }
//
// const userData = '{"isBirthdayDat": true, "ageData": 19, "userNameData": "Ilya"}';
//
// function safeParse(s: string): unknown {
//   return JSON.parse(s);
// }
//
// const data = safeParse((userData));
//
// function transsferData(d: unknown): void {
//   if (typeof d === "string") {
//     console.log(d.toUpperCase());
//   } else if ( typeof d === "object" && d) {
//     console.log(data);
//   } else {
//     console.error('Some error');
//   }
// }
//
// type T0 = any | unknown;
// type T1 = number | unknown;
// type T2 = any & unknown;
// type T3 = number & unknown;

const dataFromControl = {
  water: 200,
  el: 350,
}

function checkReadings(data: typeof dataFromControl): boolean {
  const dataFromUser = {
    water: 200,
    el: 350,
  }
  if (data.el === dataFromUser.el && data.water === dataFromUser.water) {
    return true;
  } else {
    return false;
  }
}

const PI = 3.14;
let PIClone: typeof PI;
