document.addEventListener('DOMContentLoaded', function () {
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function showItem(index) {
        carouselItems.forEach(item => item.classList.remove('show', 'hide'));
        carouselItems[index].classList.add('show');
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showItem(currentIndex);
    }

    // Inicia o carrossel
    showItem(currentIndex);

    // Define um intervalo para trocar automaticamente os itens (a cada 3 segundos, por exemplo)
    setInterval(nextItem, 1000);

    // Adiciona evento de mouseover para ajustar a opacidade dos outros itens
    carouselItems.forEach(item => {
        item.addEventListener('mouseover', function () {
            carouselItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.add('hide');
                }
            });
        });

        item.addEventListener('mouseout', function () {
            carouselItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('hide');
                }
            });
        });
    });
});
