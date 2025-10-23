fetch('./header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container_pag').insertAdjacentHTML('afterbegin', data);
        })
    .catch(error => console.error('Erro ao carregar o cabeçalho:', error));

fetch('./footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('container_pag').insertAdjacentHTML('beforeend', data);
        })
    .catch(error => console.error('Erro ao carregar o rodapé:', error));






// document.addEventListener('DOMContentLoaded', function() {
//     // Menu mobile toggle
//     const menuToggle = document.getElementById('menu-toggle');
//     const menuPrincipal = document.getElementById('menu_principal');
    
//     if (menuToggle && menuPrincipal) {
//         menuToggle.addEventListener('click', function() {
//             menuPrincipal.classList.toggle('active');
//         });
//     }
    
//     // Detectar página atual para destacar no menu
//     const currentPage = window.location.pathname.split('/').pop();
//     const navLinks = document.querySelectorAll('.nav-link');
    
//     navLinks.forEach(link => {
//         const href = link.getAttribute('href').split('/').pop();
//         if (href === currentPage) {
//             link.classList.add('active');
//         }
//     });
// });
