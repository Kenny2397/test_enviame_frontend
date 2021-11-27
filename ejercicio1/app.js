/**
 * Función que recibe un rango entre A y B,
 *  y a partir de este rango se muestren en pantalla los números primos.
 * @param {number} a Parámetro inicial
 * @param {number} b Paramétro final
 * @returns Lista de números primos comprendidos entre los valores A y B
 */
function numerosPrimos(a,b){

    let array_primos = [];

    if(a === undefined || b === undefined){ return 'Ingrese al menos un parámetro.'; } //Validar que se ingrese al menos un parámetro.

    if(typeof(a) !== 'number' || typeof(b) !== 'number'){ return 'Los parámetros solo pueden ser números.'; } // Validar que solo se ingresen números

    if(a < 0 || b < 0){ return 'Solo se aceptan números enteros.'; } //Vallidar que solo se ingresen números enteros.

    if(a < b){
        for (let i = a; i <= b; i++) {
            if(esPrimo(i)){ array_primos.push(i); }                       
        }
    }else{
        return 'El primer número debe ser mayor al número segundo.'; //Validar que el primer parámetro sea mayor al segundo
    }

    return (array_primos.length > 0) ? array_primos : 'No hay valores que retornar.'; //Validar que al menos haya un valor que retornar.

}

function esPrimo(numero) {

    if(numero < 2){ return false; } //Los números 0 y 1 no son números primos bajo ninguna instancia.    

    for (let i = 2; i < numero; i++) {  //Dado que ya excluiimos los valores 0 y 1 de la evaluación inicializamos en 2 el for para hallar los residuos a través del operador módulo "%"      
      if (numero % i === 0) { return false; } //Si el número tiene como residuo 0, no es primo.
    }
  
    return true;    
}

console.log(numerosPrimos(1, 10));

