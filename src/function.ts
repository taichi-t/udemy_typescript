export {};

const bmi = (height: number, weight: number): number => {
  return weight / (height * height);
};

console.log(bmi(1.7, 90));
