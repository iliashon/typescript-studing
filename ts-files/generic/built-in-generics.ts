const arr: Array<number> = [1, 2, 4];
const arr1: number[] = [1, 2, 4];

const roarr: ReadonlyArray<string> = ['str'];

interface IState {
  readonly data: {
    name: string
  };
  tag?: string;
}

function action(state: Readonly<IState>) {
  state.data.name = 'av';
}

const state: Partial<IState> = {
  data: {
    name: 'jon'
  }
}

const strictState: Required<IState> = {
  data: {
    name: 'jon'
  },
  tag: 'dfdfd'
}
