export {};

const reducer = (accumulator: number, currentValue: number): number => {
  console.log({ accumulator, currentValue });
  return accumulator + currentValue;
};

const sum: (...values: Array<number>) => number = (
  ...values: Array<number>
): number => {
  return values.reduce(reducer);
};

console.log(sum(1, 2, 3, 4, 5));
