
        // obtención de un valor de retorno dado el argumento
export function whatsMyType<T> ( argument : T ) : T {

    const tipoArgumento = typeof(argument);
    console.log(tipoArgumento);

    return argument;
}
                            // !Nos permite definir de forma explicita el tipo de dato para un generico
let amIString = whatsMyType<string>('Prueba de cadena');
let amINumber = whatsMyType<number>(3312);
let amIArray = whatsMyType<number[]>([1,2,3,4,5,6,7]);


console.log(amIString.split(' '))
console.log(amINumber.toFixed())
console.log(amIArray.join('-'))