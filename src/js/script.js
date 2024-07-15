document.addEventListener('DOMContentLoaded', function() {
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