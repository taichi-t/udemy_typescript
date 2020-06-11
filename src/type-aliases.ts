export {};

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello';

const example1: Profile = {
  name: 'ham',
  age: 43,
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'ham',
  age: 43,
};

type Profiles2 = typeof example1;
