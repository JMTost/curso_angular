/*
    ===== Código de TypeScript =====
*/

interface HeroAddress {
    calle : string,
    pais : string,
    ciudad : string
}

interface SuperHero {
    name : string,
    age : number,
    address : HeroAddress,
    showAddress : () => string,
}
// interface SuperHero {
//     name : string,
//     age : number,
//     address : {
//         calle : string,
//         pais : string,
//         ciudad : string
//     },
//     showAddress : () => string,
// }



const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.ciudad + ', ' + this.address.pais;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};
