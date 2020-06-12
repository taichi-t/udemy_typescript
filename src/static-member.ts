export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'Atsushi';
  static lastName: string = 'Ishida';

  static work() {
    // return 'Hey, guys! are you interested in Typescript? lets dive into Typescript!';
    return `Hey, guys! This is ${this.firstName}!. Are you interested in Typescript? Let's dive into Typescript!`;
  }
}

let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.work());
