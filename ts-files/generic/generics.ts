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

function processing<T, S>(data: T[], options: S): string {
  data.length;
  switch (typeof data) {
    case "string":
      return `${data}, speed: ${options}`;
      break;
    case "number":
      return `${data}, speed: ${options}`;
      break;
    default:
      return "Not valid";
  }
}

const res1 = processing([1], 'slo');
const res2 = processing(['1'], 'slo');

const res3 = processing<number, string>([10], 'slo');

function processings<T>(data: T): T {
  return data;
}

let newFunc: <T>(data: T) => T = processings;

interface  DataServer {
  process: <T>(data: T) => T;
}

const server: DataServer = {
  // process(data) {
  //   console.log(data);
  //   return data;
  // }
  // process: <T>(data: T) => {
  //   return data;
  // }
  process: processings
}
