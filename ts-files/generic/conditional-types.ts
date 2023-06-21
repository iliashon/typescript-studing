// Condition ? true : false

import * as stream from "stream";

type Example = 'string' extends 'Hello' ? string : number;

type FromUserOrFromBase<T extends string | number> = T extends string
  ? IDataFromUser
  : IDataFromBase;

interface User<T extends 'created' | Date> {
  created: T extends 'created' ? 'created' : Date;
}

const user: User<'created'> = {
  created: 'created'
}

interface IDataFromUser {
  weight: string;
}
interface IDataFromBase {
  calories: number;
}

function calcDalyCalories<T extends string | number>(numOrStr: T): T extends string ? IDataFromUser : IDataFromBase{
  if (typeof numOrStr === 'string') {
    const obj: IDataFromUser = {
      weight: numOrStr,
    }
    return obj as FromUserOrFromBase<T>;
  } else {
    const obj: IDataFromBase = {
      calories: numOrStr,
    }
    return obj as FromUserOrFromBase<T>;
  }
}
