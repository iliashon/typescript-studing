const fetchData = (url: string, method: "GET" | "POST"): void => {
  console.log(method);
}

const reqOptions = {
  url: 'https://some',
  method: 'GET'
};

const str = 'str';
const method = 'GET';

fetchData("qqq", "GET");
fetchData(reqOptions.url, reqOptions.method as 'GET');
fetchData(reqOptions.url, <'GET'>reqOptions.method);

const box = document.querySelector('.box') as HTMLElement;
const input = <HTMLInputElement>document.querySelector('.input');

const someNumber: number = +input.value
// box.style
// box?.classList.add()

let a = 'ilya' as const;

let b = {
  f: 'sdf',
} as const;

let c = [] as const;

let value = 'value';
let arr = ['sd', 'sd'];
let obj = {f: 10};

// let T0 = value as const; ---ERROR---

// let a: number = (Math.round(Math.random() * 1) ? 'yes' : 'no') as const; ---ERROR---

// type guard

// function isNumber (n: string[] | number | boolean): n is number {
//   return typeof n === "number";
// }

function isNumber (n: unknown): n is number {
  return typeof n === "number";
}

interface Car {
  engine: string;
  wheels: number;
}

interface Ship {
  engine: string
  sail: string;
}

function repairVehicle(vehicle: Car | Ship) {
  if (isCar(vehicle)) {
    vehicle.engine;
  } else {
    vehicle.sail;
  }
}

function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels !== undefined;
}
