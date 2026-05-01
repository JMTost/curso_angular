const name : string = 'String';

    // !caso para emplear dos tipos de datos dentro de una variable
// let hpPoint : number | string = 95;
let hpPoint : number | 'Full' = 95; 

const isAlive : boolean = true;

hpPoint = 'Full';

console.log({name, hpPoint, isAlive});

export {};