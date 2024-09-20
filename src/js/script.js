document.addEventListener('DOMContentLoaded', function() {

    function exiba(txt){
        alert(txt)
    }
    
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


    //Facilities Icones

const facilitiesContainer = document.querySelector('.facil-container');

// Objeto com as descrições das facilidades
let aboutItens = {
    pool: 'Oferecemos uma piscina grande para dias de sol',
    wifi: 'Nosso Wi-fi pega em todo o espaço',
    spa: 'Todo mundo merece um Spa como esse...',
    parking: 'Nosso estacionamento é amplo e seguro',
    coffee: 'O nosso café da manhã é realmente divino, nem os maiores reis poderiam ter',
    games: 'Um pouco de diversão? Por que não?'
};


