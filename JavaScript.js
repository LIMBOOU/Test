document.addEventListener('DOMContentLoaded', function () {
    let lastScrollTop = 0; // Переменная для отслеживания последней позиции прокрутки
  
    document.addEventListener('scroll', function () {
      const parallaxImage = document.querySelector('.parallax-image');
  
      if (!parallaxImage) {
        console.error('Элемент с классом "parallax-image" не найден.');
        return;
      }
  
      const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (currentScrollTop > lastScrollTop) {
        // Прокрутка вниз: показать картинку
        parallaxImage.style.opacity = 1;
        parallaxImage.style.transform = 'translateY(0)';
      } else {
        // Прокрутка вверх: спрятать картинку
        parallaxImage.style.opacity = 0;
        parallaxImage.style.transform = 'translateY(100%)';
      }
  
      lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Обновляем последнюю позицию прокрутки
    });
  });