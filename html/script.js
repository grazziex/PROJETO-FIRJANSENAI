function toggleMenu() {
    const menu = document.getElementById("menu");
    const menuBtn = document.querySelector(".menu-btn"); // Seleciona o botão

    if (menu.style.display === "block") {
        menu.style.display = "none";
        menuBtn.style.display = "block"; // Garante que o botão volte se o menu fechar
    } else {
        menu.style.display = "block";
        menuBtn.style.display = "none";  // Faz o botão ficar invisível
    }
}
function filtrarLivros() {
    // Pega o valor digitado e transforma em minúsculas para comparar
    let input = document.getElementById('campoPesquisa').value.toLowerCase();
    
    // Pega todos os cards que usam a classe 'book-card'
    let cards = document.getElementsByClassName('book-card');

    for (let i = 0; i < cards.length; i++) {
        // Procura pelo H3 dentro de cada card
        let tituloElemento = cards[i].querySelector('h3');
        
        if (tituloElemento) {
            let titulo = tituloElemento.innerText.toLowerCase();
            
            // Se o título contiver o que foi digitado, mostra, senão, esconde
            if (titulo.includes(input)) {
                cards[i].style.display = ""; // Volta ao estado normal (grid)
            } else {
                cards[i].style.display = "none"; // Esconde o card
            }
        }
    }
}
