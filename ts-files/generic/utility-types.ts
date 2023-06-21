type Currencies = {
  usa: 'usd';
  china: 'cny';
  ukrain: 'uah';
  kz: 'tenge';
};

type CurrWithoutUSA = Omit<Currencies, 'usa'>;

type CurrUSAAndUK = Pick<Currencies, 'usa' | 'ukrain'>

type FadeType = Exclude<MyAnimation, 'swipe'>;

type Count = Exclude<keyof Currencies, 'usa'>;

type SwipeType = Extract<MyAnimation, 'swipe'>;

type PlayersNames = 'alex' | 'john';
type GameCurrCust = Record<PlayersNames, CustimClone>

type CreateCustomCur<T> = {
  [P in keyof T as `custom${Capitalize<string & P>}`]: string
}

type CustimClone = CreateCustomCur<Currencies>;

type MyAnimation = 'fade' | 'swipe';

type Direction = 'in' | 'out';

type MyNewAnim = `${MyAnimation}${Capitalize<Direction>}`;
