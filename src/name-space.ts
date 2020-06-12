export {};

namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }

  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('ハムさん');
const meOsaka = new Japanese.Osaka.Person('ハムやん');

const michel = new English.Person('Michel', 'Joseph', 'Jackson');

console.log(me);
console.log(meOsaka);
console.log(michel);
