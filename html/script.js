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
