document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-icon');
    const animateElements = document.querySelectorAll('.animate');
    const textInputs = document.querySelectorAll('input[type="text"]');
    const phoneInput = document.getElementById('phone');

    const handleScroll = () => {
        header.style.position = 'fixed';
    };

    const toggleMenu = (e) => {
        navLinks.classList.toggle('active');
        document.body.style.overflowY = navLinks.classList.contains('active') ? 'hidden' : '';
        navLinks.addEventListener('click', (e) => {
            if (e.target.tagName === 'A') {
                navLinks.classList.remove('active');
                document.body.style.overflowY = '';
            }
        }
        );
    };

    const handleResize = () => {
        if (window.innerWidth > 767) {
            navLinks.classList.remove('active');
            document.body.style.overflowY = '';
        }
    };

    const handleTextInput = (e) => {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 2) value = `${value.slice(0, 2)}/${value.slice(2)}`;
        if (value.length > 5) value = `${value.slice(0, 5)}/${value.slice(5)}`;
        e.target.value = value;
    };

    const handlePhoneInput = (e) => {
        let phone = e.target.value.replace(/\D/g, '');
        if (phone.length > 10) {
            phone = phone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        } else if (phone.length > 6) {
            phone = phone.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
        } else if (phone.length > 2) {
            phone = phone.replace(/(\d{2})(\d{0,5})/, '($1) $2');
        } else {
            phone = phone.replace(/(\d*)/, '($1)');
        }
        e.target.value = phone;
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    window.addEventListener('scroll', handleScroll);
    menuIcon.addEventListener('click', toggleMenu);
    window.addEventListener('resize', handleResize);

    animateElements.forEach(element => observer.observe(element));
    textInputs.forEach(input => input.addEventListener('input', handleTextInput));
    phoneInput.addEventListener('input', handlePhoneInput);
});
