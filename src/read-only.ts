export {};

class VisaCard {
  constructor(public readonly owner: string) {}
}

let myVisaCard = new VisaCard('taichi');

console.log(myVisaCard);
console.log(myVisaCard.owner);
// myVisaCard.owner = 'be-konn';
