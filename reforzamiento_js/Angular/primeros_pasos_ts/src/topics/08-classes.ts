export class Person {
    // public name : string;
    // public address : string;
    // public name ?: string;
    // public address ?: string;

    constructor (
        public firstName : string, public lastNmae : string, private address : string = 'No address'
    ) {
        // this.name = nombre;
        // this.address = address;
        // this.name = 'Fernando';
        // this.address = 'New York';
    }
};


// export class Hero extends Person {
//     constructor(public alterEgo : string, public age : number, public realName : string ) {
//         super(realName, 'NJ')
//     }

// };

export class Hero {

    // !Priorización de la composición en lugar de la herencia
    // public person : Person;
    constructor(public alterEgo : string, public age : number, public realName : string, public person : Person) {
        // this.person = new Person(realName);
    }

};

const person = new Person("Tony", 'Starks', 'Phoenix');

const ironman = new Hero('PEPITO', 45, 'Fernando', person);

console.log(ironman);