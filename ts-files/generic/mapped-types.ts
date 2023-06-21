// type Currencies = {
//   usa: 'usd';
//   china: 'cny';
//   ukrain: 'uah';
//   kz: 'tenge';
// };
//
// type CreateCustomCur<T> = {
//   [P in keyof T as `custom${Capitalize<string & P>}`]: string
// }
//
// type CustimClone = CreateCustomCur<Currencies>;
//
// type MyAnimation = 'fade' | 'swipe';
//
// type Direction = 'in' | 'out';
//
// type MyNewAnim = `${MyAnimation}${Capitalize<Direction>}`;

// type CustomCurrencies = {
//   usa: string;
//   china: string;
//   ukrain: string;
//   kz: string;
// };

type Keys = 'name' | 'age' | 'role';

type UserS = {
  [K in Keys] : string
}

const alexs: UserS = {
  name: 'alex',
  age: '25',
  role: 'admin',
}
