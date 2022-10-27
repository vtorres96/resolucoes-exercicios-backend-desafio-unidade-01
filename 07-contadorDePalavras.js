/* solucao 1 */
function solucao(texto) {
    const palavras = texto.trim().split(" ");

    //existem casos de teste em que tem varios espaços seguidos
    // por ex: "Eu    sou    legal"
    // por isso ao dar split por espacos ficam varios elementos nulos,
    // que precisam ser removidos

    let contador = 0;

    for (let palavra of palavras){
        if (palavra){
            contador++;
        }
    }

    console.log(contador);
}

/* solucao 2 */
function solucao(texto) {
    let contador = texto.trim().split(" ").filter(palavra => palavra);
    console.log(contador.length);
}