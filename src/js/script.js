document.addEventListener('DOMContentLoaded', function() {

    //Cabeçalho fixo 
    let header = document.querySelector('header')
    window.document.addEventListener('scroll', () => {
        header.style.position = 'fixed'
        
    })

    // Menu clicável

    
    document.querySelector('.menu-icon').addEventListener('click', function() {

        let navLinks = document.querySelector('.nav-links')
        navLinks.classList.toggle('active')

        if(navLinks.classList.contains('active')){
            document.body.style.overflow = 'hidden'
        } else{
            document.body.style.overflow = 'auto'
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
