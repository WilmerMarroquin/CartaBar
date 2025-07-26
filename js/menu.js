// Script optimizado para menú hamburguesa responsive
document.addEventListener('DOMContentLoaded', function () {
    try {
        // Cache de elementos DOM
        const elements = {
            menuToggle: document.getElementById('menu-toggle'),
            nav: document.getElementById('main-nav'),
            menuClose: document.getElementById('menu-close'),
            navLinks: document.querySelectorAll('#main-nav a')
        };

        // Validar elementos críticos
        if (!elements.menuToggle || !elements.nav) {
            console.error('Elementos del menú no encontrados');
            return;
        }

        // Función optimizada para abrir menú
        const openMenu = () => {
            try {
                elements.nav.classList.add('open');
                elements.menuToggle.classList.add('open');
                
                // Focus management para accesibilidad
                if (elements.menuClose) {
                    elements.menuClose.focus();
                }
                
                // Prevenir scroll del body
                document.body.style.overflow = "hidden";
            } catch (error) {
                console.error('Error abriendo menú:', error);
            }
        };

        // Función optimizada para cerrar menú
        const closeMenu = () => {
            try {
                elements.nav.classList.remove('open');
                elements.menuToggle.classList.remove('open');
                
                // Restaurar scroll del body
                document.body.style.overflow = "";
                
                // Restaurar focus al botón de menú
                elements.menuToggle.focus();
            } catch (error) {
                console.error('Error cerrando menú:', error);
            }
        };

        // Event listeners optimizados
        elements.menuToggle.addEventListener('click', openMenu);
        
        // Soporte para teclado en botón de menú
        elements.menuToggle.addEventListener('keydown', (e) => {
            if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openMenu();
            }
        });

        // Cerrar menú con botón de cerrar
        if (elements.menuClose) {
            elements.menuClose.addEventListener('click', closeMenu);
            
            // Soporte para teclado en botón de cerrar
            elements.menuClose.addEventListener('keydown', (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    closeMenu();
                }
            });
        }

        // Cerrar menú al hacer click en enlaces
        elements.navLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
            
            // Soporte para teclado en enlaces
            link.addEventListener('keydown', (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    closeMenu();
                }
            });
        });

        // Cerrar menú con Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && elements.nav.classList.contains('open')) {
                closeMenu();
            }
        });

        // Cerrar menú al hacer click fuera
        document.addEventListener('click', (e) => {
            if (elements.nav.classList.contains('open') && 
                !elements.nav.contains(e.target) && 
                !elements.menuToggle.contains(e.target)) {
                closeMenu();
            }
        });

    } catch (error) {
        console.error('Error inicializando menú:', error);
    }
}); 