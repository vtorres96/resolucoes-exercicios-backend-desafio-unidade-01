/* solucao 1 */
function solucao(lista) {
    let valorAcumulado = 0;

    for (let valor of lista) {
        valorAcumulado += valor;
    };

    console.log(valorAcumulado);
}

/* solucao 2 */
function solucao(lista) {
    let valorAcumulado = 0;

    for (let i = 0; i < lista.length; i++) {
        valorAcumulado += lista[i];
    };

    console.log(valorAcumulado);
}

solucao([1,2,3,4])