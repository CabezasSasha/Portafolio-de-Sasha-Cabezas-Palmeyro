const carouselContainer = document.querySelector('.carousel-container');
// Escuchar evento de scroll para activar/desactivar clase 'active'
carouselContainer.addEventListener('scroll', () => {
    const carouselItems = document.querySelectorAll('.proyectito');
    const carouselCenter = carouselContainer.scrollLeft + carouselContainer.offsetWidth / 2;
    carouselItems.forEach((item) => {
        const itemLeft = item.offsetLeft;
        const itemRight = item.offsetLeft + item.offsetWidth;
        if (itemLeft <= carouselCenter && carouselCenter < itemRight) {
            item.classList.add('active');
        }
        else {
            item.classList.remove('active');
        }
    });
});
