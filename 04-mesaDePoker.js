/* solucao 1 */
function solucao(min, max, valores) {
    let valoresPermitidos = [];

    for (let valor of valores) {
        if (valor >= min && valor <= max) {
            valoresPermitidos.push(valor);
        }
    }

    console.log(valoresPermitidos);
}

/* solucao 2 */
function solucao(min, max, valores) {
    let valoresPermitidos = [];

    for (let i = 0; i < valores.length; i++) {
        if (valores[i] >= min && valores[i] <= max) {
            valoresPermitidos.push(valores[i]);
        }
    }

    console.log(valoresPermitidos);
}