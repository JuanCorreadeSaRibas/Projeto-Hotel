document.addEventListener('DOMContentLoaded', function() {

    //Cabeçalho fixo
    let header = document.querySelector('header')
    window.document.addEventListener('scroll', () => {
        header.style.position = 'fixed'
        header.style.zIndex = 1
        
    })

    // Menu clicável
    let navLinks = document.querySelector('.nav-links');
    let menuIcon = document.querySelector('.menu-icon');

    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-visible');
    });

    // Efeito opacidade
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    const elements = document.querySelectorAll('.animate');
    elements.forEach(element => {
        observer.observe(element);
    });

});
