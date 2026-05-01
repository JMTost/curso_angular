export interface Passenger {
    name : string;
    children ?: string [];
}

const passenger1 : Passenger = {
    name : 'hernesto',
};

const passenger2 : Passenger = {
    name : "Fernando",
    children: ['Natalia', 'Elizabeth'],
};

//referencia a un valor 

const printChildren = (passenger : Passenger) => {
    const howManyChildren = passenger.children?.length || 0;// !TERNARIO?
    // const howManyChildren = passenger.children!.length ;// ! ASEGURA QUE SE TENDRA ESTE ELEMENTO <non null assertion operator>

    console.log(passenger.name, howManyChildren);
}

printChildren(passenger2);