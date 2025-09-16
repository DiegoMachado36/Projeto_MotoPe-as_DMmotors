const listaCards = [ 
    {img: 'src/img/capacete.png', titulo: 'Capacetes'}, 
    {img: 'src/img/acessorios.png', titulo: 'Acessórios'},
    {img: 'src/img/vestimento.png', titulo: 'Vestimentas'},
    {img: 'src/img/peças.png', titulo: 'Peças'},
]

function criarCards(servico) {
    const url = new URL(window.location);
    return `
    <div class="card">
        <img class="img_card" src="${servico.img}" alt="${servico.titulo}">
        <h3 class="titulo">${servico.titulo}</h3>
    </div>
    `
}

function carregarCards(listaCards) {
    const container = document.getElementById('container_cards');
    container.innerHTML = listaCards.map(criarCards).join('');
}

window.addEventListener('DOMContentLoaded', () => { 
    carregarCards(listaCards);
})