document.addEventListener('DOMContentLoaded', function() {

    //Cabeçalho fixo 
    let header = document.querySelector('header')
    window.document.addEventListener('scroll', () => {
        header.style.position = 'fixed'
        
    })

    // Menu clicável

    
    document.querySelector('.menu-icon').addEventListener('click', function() {
        document.querySelector('.nav-links').classList.toggle('active');
        document.querySelector('body').style.overflowY = "hidden"
    });
    

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
