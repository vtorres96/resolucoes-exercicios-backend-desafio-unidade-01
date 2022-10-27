/* solucao 1 */
function solucao(lista) {
    let valorAcumulado = 0;

    for (let valor of lista) {
        valorAcumulado += valor;
    };

    const mediaDiaria = valorAcumulado / lista.length;
    console.log(mediaDiaria);
}

/* solucao 2 */
function solucao(lista) {
    let valorAcumulado = 0;

    for (let i = 0; i < lista.length; i++) {
        valorAcumulado += lista[i];
    };

    const mediaDiaria = valorAcumulado / lista.length;
    console.log(mediaDiaria);
}