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

    //date placeholder 
    const inputs = document.querySelectorAll('input[type="text"]');

    inputs.forEach(input => {
        input.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não for número
            if (value.length > 2) {
                value = value.slice(0, 2) + '/' + value.slice(2);
            }
            if (value.length > 5) {
                value = value.slice(0, 5) + '/' + value.slice(5);
            }
            e.target.value = value;
        });
    });

    //Phone placeholder
    const phoneInput = document.getElementById('phone');

    phoneInput.addEventListener('input', function(e) {
        let phone = e.target.value.replace(/\D/g, ''); // Remove caracteres não numéricos
        if (phone.length > 10) {
            phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (phone.length > 6) {
            phone = phone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (phone.length > 2) {
            phone = phone.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            phone = phone.replace(/(\d*)/, '($1');
        }
        e.target.value = phone;
    });

    
   
    
});
