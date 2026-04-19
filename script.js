// Controle do carrossel

let current = 0; 
// Guarda o índice do slide atual (começa no primeiro = 0)

const slides = document.querySelectorAll(".slide"); 
// Seleciona TODOS os elementos com classe "slide" e guarda em uma lista

// Função para mostrar o slide atual
function showSlide(index) {

    // Remove a classe "active" de todos os slides
    slides.forEach(slide => slide.classList.remove("active"));

    // Adiciona a classe "active" apenas no slide atual
    slides[index].classList.add("active");
}

// ================= BOTÃO PRÓXIMO =================

// Seleciona o botão com classe "next" e adiciona evento de clique
document.querySelector(".next").addEventListener("click", () => {

    // Avança para o próximo slide
    current = (current + 1) % slides.length;
    // % (módulo) faz voltar para o início quando chegar no último

    showSlide(current); 
    // Mostra o novo slide
});

// ================= BOTÃO ANTERIOR =================

// Seleciona o botão com classe "prev"
document.querySelector(".prev").addEventListener("click", () => {

    // Volta para o slide anterior
    current = (current - 1 + slides.length) % slides.length;
    // Esse cálculo evita número negativo (volta pro último slide)

    showSlide(current); 
    // Mostra o slide atualizado
});

// ================= TROCA AUTOMÁTICA =================

// Troca de slide automaticamente a cada 4 segundos
setInterval(() => {

    current = (current + 1) % slides.length; 
    // Vai para o próximo slide automaticamente

    showSlide(current); 
    // Atualiza na tela

}, 4000); // Tempo em milissegundos (4000 = 4 segundos)