/* solucao 1 */
function solucao(lista) {
    let menorIdade = Infinity;

    for (let idade of lista) {
        if (idade >= 18 && idade < menorIdade) {
            menorIdade = idade;
        }
    }
    if (menorIdade != Infinity) {
        console.log(menorIdade);
    } else {
        console.log("CRESCA E APARECA");
    }
}

