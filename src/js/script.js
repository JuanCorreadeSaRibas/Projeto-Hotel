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

    //Facilities Infos Ideia mei ruim e mau executada
    /*
    let facilitiesContainer = document.getElementById('facilities');

    let aboutItens = {
        pool: 'Oferecemos uma piscina grande para dias de sol',
        wifi: 'Nosso Wi-fi pega em todo o espaço',
        spa: 'Todo mundo merece um Spa como esse...',
        parking: 'O estacionamento é espaçoso e seguro para todos os veículos.',
        coffee: 'O nosso café da manhã é realmente divino, nem os maiores reis poderiam ter',
        games: 'Um pouco de diversão? Por que não?'
    };
    
    let lastClickedElement = null;
    
    facilitiesContainer.addEventListener('click', (event) => {
        if (event.target.tagName === 'I') {
            let facilityId = event.target.id;
            let parentItem = event.target.parentElement;
            let allItems = document.querySelectorAll('.facil-item');
            
            // Verifica se o mesmo item foi clicado novamente
            if (lastClickedElement === parentItem) {
                allItems.forEach(item => {
                    let infoP = item.querySelector('p');
                    if (infoP) {
                        infoP.remove(); // Remove o parágrafo de informação ao desmarcar
                    }
                });
                lastClickedElement = null; // Reseta o último item clicado
            } else {
                allItems.forEach(item => {
                    let infoP = item.querySelector('p');
                    if (infoP) {
                        infoP.remove(); // Remove as informações dos outros itens
                    }
                });
                
                // Adiciona o texto ao item clicado
                if (aboutItens[facilityId]) {
                    let p = document.createElement('p');
                    p.innerText = aboutItens[facilityId];
                    p.style.textAlign = 'center'
                    parentItem.appendChild(p);
                }
                
                lastClickedElement = parentItem; // Define o último item clicado
            }
        }
    });*/
   
    
});
