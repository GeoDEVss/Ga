document.addEventListener('DOMContentLoaded', function () {
    // Obtém todas as imagens
    const imagens = document.querySelectorAll('.imagens img');

    // Adiciona um ouvinte de evento de rolagem à janela
    window.addEventListener('scroll', function () {
        // Itera sobre cada imagem
        imagens.forEach(function (imagem) {
            // Obtém a posição vertical da parte superior da imagem em relação à viewport
            const posicaoImagem = imagem.getBoundingClientRect().top;

            // Verifica se a imagem está visível na viewport
            if (posicaoImagem < window.innerHeight / 2) {
                // Adiciona a classe 'visivel' para mostrar a imagem
                imagem.classList.add('visivel');
            } else {
                // Remove a classe 'visivel' para ocultar a imagem
                imagem.classList.remove('visivel');
            }
        });
    });
});
