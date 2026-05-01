    //deinificion de tipo de arreglo de string
const skills : string[] = ['Bash', 'Counter', 'Healing'];

interface Character {
    name : String;
    hp : Number;
    skills : String[];
    hometown? :  String; // !Definicion de String o indefinido
    // hometown :  String | undefined; // !Definicion de String o indefinido

}


const strider : Character = {
    name : "",
    hp : 100,
    skills : ['Bash', 'Counter'],
    hometown : ''
}

strider.hometown = 'Rivendell';

console.table(strider)

export {};