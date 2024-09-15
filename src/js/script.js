document.addEventListener('DOMContentLoaded', function() {

    let header = document.querySelector('header')
    window.document.addEventListener('scroll', () => {
        header.style.position = 'fixed'
    })

    // Menu clicável
    let navLinks = document.querySelector('.nav-links')
    document.querySelector('.menu-icon').addEventListener('click', function() {
        
        navLinks.classList.toggle('active')

        if(navLinks.classList.contains('active')){
            document.body.style.overflowY = 'hidden'
        } else{
            document.body.style.overflowY = 'scroll'
        }
    })
    

    // Efeito opacidade
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    //efeito animate
    const animate = document.querySelectorAll('.animate');
    animate.forEach(element => {
        observer.observe(element);
    });


});
