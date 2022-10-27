/* solucao 1 */
function solucao(carta) {
    const cartas = ['Q', 'J', 'K', 'A', '2', '3'];
    
    for(let i = 0; i < cartas.length; i++){
        if (cartas[i] == carta) {
            // verifica se esta no ultimo item do array de cartas
            // para exibir o elemento a seguir, que seria o primeiro elemento do array de cartas
            if (cartas[cartas.length - 1] == carta) {
                console.log(cartas[0]);
            } else {
                console.log(cartas[i + 1]);
            }
        }
    }
}

/* solucao 2 */
function solucao() {
    const cartas = ["Q", "J", "K", "A", "2", "3"];
    console.log(carta === "3" ? "Q" : cartas[cartas.indexOf(carta) + 1]);
}