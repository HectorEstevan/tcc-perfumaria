// ================= CRIA O CARROSSEL =================

// Ativa o Swiper
new Swiper(".myHeroSlider", {

    // Faz loop infinito
    loop:true,

    // Troca automática
    autoplay:{
        delay:4000, // 4 segundos
        disableOnInteraction:false
    },

    // Bolinhas inferiores
    pagination:{
        el:".swiper-pagination",
        clickable:true
    },

    // Setas laterais
    navigation:{
        nextEl:".swiper-button-next",
        prevEl:".swiper-button-prev"
    }

});