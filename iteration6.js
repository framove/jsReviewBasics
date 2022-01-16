//Crea una función llamada swap() que reciba un array y dos parametros que sean indices del array. La función deberá intercambiar la posición de los valores de los indices que hayamos enviado como parametro. Retorna el array resultante.

let futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

let swap = (array, index1, index2) => {
    for(let value of array) {
        if (value.findIndex == index1) {
            index1 = index2
        }
    }
    return array
}
console.log(swap(futbolistas, 1, 3));