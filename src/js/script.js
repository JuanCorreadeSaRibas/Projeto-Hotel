document.addEventListener('DOMContentLoaded', function() {
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
