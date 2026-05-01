
function addNumbers(a : number, b : number ) : number  {
    return a + b;
}


const addNumbersArrow = (a : number, b : number) : number => {
    return a + b
};

        // !Generación de parametros opcionales
function multiply (firstNumber : number, secondNumber? : number , base : number = 2) {
    return firstNumber * base;
}

interface CharacterInterface {
    name : string,
    hp : number,
    showHp : () => void,

}

const healCharacter = (character : CharacterInterface, amount : number) => {
    character.hp += amount;
}

const aragon : CharacterInterface = {
    name : 'Aragon',
    hp : 50,
    showHp() {
        console.log(`Currently you have: ${this.hp}`);
    },
}


healCharacter(aragon, 20);
healCharacter(aragon, 20);
healCharacter(aragon, 20);




aragon.showHp();


// funciones que obtienen 


// const salida = addNumbers(1, 2);
// const salida_arrow = addNumbersArrow(1,3);
// const multiplyResult : number = multiply(5);



// console.log(`salida de la función : ${salida}`)
// console.log(`salida de la función arrow : ${salida_arrow}`)
// console.log(multiplyResult);

export {};