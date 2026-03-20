let timer;
window.addEventListener('scroll', function() {
    document.body.classList.add('scrolling-cursor');
    
    clearTimeout(timer);
    timer = setTimeout(function() {
        document.body.classList.remove('scrolling-cursor');
    }, 100);
});
