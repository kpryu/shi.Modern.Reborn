const element = document.querySelector('.l-menu');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      // Элемент вышел из видимой области
      element.style.display = 'none';
    } else {
      // Снова стал видим (по желанию)
      element.style.display = 'flex';
    }
  });
});
observer.observe(element);
