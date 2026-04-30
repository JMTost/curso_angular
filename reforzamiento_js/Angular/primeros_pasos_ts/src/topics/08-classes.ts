export class Person {
    // public name : string;
    // public address : string;
    // public name ?: string;
    // public address ?: string;

    constructor (
        public name : string, private address : string = 'No address'
    ) {
        // this.name = nombre;
        // this.address = address;
        // this.name = 'Fernando';
        // this.address = 'New York';
    }
};


export class Hero extends Person {

    constructor(public alterEgo : string, public age : number, public realName : string ) {
        super()
    }

};



const ironman = new Hero('PEPITO', 'CALIZ');

console.log(ironman);