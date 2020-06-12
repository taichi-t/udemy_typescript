export {};

//* owner
// *owner
// *setting on initialization
// *imutable
// *refarable
//*secretNumber
// *personal number
// *setting on initialization
// *mutable
// *unable to refar

class MyNumberCard {
  constructor(private _owner: string, private _secretNumber: number) {}

  get owner() {
    return this._owner;
  }

  set secretNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}

let card = new MyNumberCard('ham', 12345678910);
console.log(card.debugPrint());
// card.owner = 'hamm';
// console.log(card.owner);
// card.secretNumber;
// card._secretNumber;

card.secretNumber = 1111111111;

console.log(card.debugPrint());
