/* solucao 1 */
function solucao(numeros) {
    let soma = 0;
    for (let num of numeros){
        soma += num;
    }
    const resto = soma % numeros.length;

    if (resto === 0) {
        console.log(numeros.length)
    } else {
        console.log(resto);
    }
}