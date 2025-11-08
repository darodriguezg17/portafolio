// Archivo js/script.js

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lógica para el Menú Hamburguesa (Mobile Navigation)
    const burgerMenu = document.getElementById('burger-menu');
    const nav = document.querySelector('.nav');
    const navLinks = document.querySelectorAll('.nav-list a');

    burgerMenu.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Cierra el menú cuando se hace clic en un enlace (útil en móviles)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('active')) {
                nav.classList.remove('active');
            }
        });
    });

    // 2. Lógica para actualizar el año en el footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }
});