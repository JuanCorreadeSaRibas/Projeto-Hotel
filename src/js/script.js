document.addEventListener('DOMContentLoaded', function() {

    let navLinks = document.querySelector('.nav-links');

    document.querySelector('.menu-icon').addEventListener('click', () => {
        navLinks.classList.toggle('nav-links-visible');
    });

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
