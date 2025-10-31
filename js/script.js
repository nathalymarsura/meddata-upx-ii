document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            if (this.getAttribute('href') !== '#form-demo') {
                e.preventDefault();
                const navLinks = document.getElementById('menu-toggle').previousElementSibling;
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }

                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = menuToggle.previousElementSibling;

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    const form = document.getElementById('demoForm');
    const formMessage = document.getElementById('formMessage');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault(); 
        const formData = new FormData(form);
        console.log('Dados do Formulário:', Object.fromEntries(formData.entries()));

        formMessage.style.color = 'white';
        formMessage.textContent = 'Enviando sua solicitação...';
        form.querySelector('button').disabled = true;

        setTimeout(() => {
            const success = true; 

            if (success) {
                formMessage.style.color = 'lightgreen';
                formMessage.textContent = '✅ Demonstração agendada! Entraremos em contato.';
                form.reset(); 
            } else {
                formMessage.style.color = 'red';
                formMessage.textContent = '❌ Erro ao agendar. Tente novamente mais tarde.';
            }

            form.querySelector('button').disabled = false;
        }, 2000);
    });
});