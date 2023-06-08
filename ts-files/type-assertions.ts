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
  name: 'car';
  engine: string;
  wheels: number;
}

interface Ship {
  name: 'ship';
  engine: string
  sail: string;
}

interface ComplexVehicle {
  name: 'car' | 'ship' | 'airplane';
  engine: string;
  wheels?: number;
  wings?: string;
  sail?: string;
}

function repairVehicle(vehicle: Car | Ship) {
  switch (vehicle.engine) {
    case "ship":
      console.log(vehicle.engine)
      break;
    case "car":
      console.log(vehicle.engine);
      break;
    default:
      console.log('op!');
  }
}

function isCar(car: Car | Ship): car is Car {
  return (car as Car).wheels !== undefined;
}

function isShip(ship: Car | Ship): ship is Ship {
  return (ship as Ship).sail !== undefined;
}

