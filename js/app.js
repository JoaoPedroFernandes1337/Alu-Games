function alterarStatus(id) {
    let gameClicado = document.getElementById('game-' + id);
    let imagem = gameClicado.querySelector('.dashboard__item__img');
    let botao = gameClicado.querySelector('.dashboard__item__button');

    // Aqui começamos a verificar se o jogo já está alugado
    if (imagem.classList.contains('dashboard__item__img--rented')) {
        // Lógica para quando o jogo está alugado (devolver)
    } else {
        // Lógica para quando o jogo está disponível (alugar)
    }
}