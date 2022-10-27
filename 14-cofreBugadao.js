/* solucao 1 */
function processData(input) {
    const linha = input.trim().split("\n");
    const correta = linha[0];
    let digitada = linha[1];

    for (let c of correta) {
        let index = digitada.indexOf(c);
        if (index === -1) {
            console.log("NAO");
            return;
        } else {
            digitada = digitada.slice(index + 1);
        }
    }
    console.log("SIM");
}

const teste = "cubos\ncuggbyos";
/* solucao 2 */
function processData(input) {
    let palavras = input.trim().split('\n');
    let senhaCorreta = String(palavras[0]);
    let senhaDigitada = String(palavras[1]);
    let acertos = 0;
    
    for (let caracter of senhaDigitada) {
        if (caracter === senhaCorreta[acertos]) {
            acertos++;
        }
    }

    if (acertos === senhaCorreta.length) {
        console.log('SIM');
    } else {
        console.log('NAO');
    }
}

processData(teste);
