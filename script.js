document.addEventListener('DOMContentLoaded', () => {
    // Selecionando os cartões de serviço
    const cartoes = document.querySelectorAll('.cartao-servico');

    // Efeito de rolagem suave dos cartões de serviço
    const observador = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada, indice) => {
            if (entrada.isIntersecting) {
                setTimeout(() => {
                    entrada.target.classList.add('show');
                }, indice * 200);
            } else {
                entrada.target.classList.remove('show');
            }
        });
    }, { threshold: 0.2 });

    cartoes.forEach(cartao => {
        observador.observe(cartao);
    });

    // Rolagem suave para os itens da navbar
    const linksNavbar = document.querySelectorAll('nav a[href^="#"]');
    
    linksNavbar.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const alvoId = link.getAttribute('href');
            const elementoAlvo = document.querySelector(alvoId);

            if (elementoAlvo) {
                elementoAlvo.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
