// Optimizado con mejores prácticas de JavaScript
document.addEventListener("DOMContentLoaded", () => {
    // Cache de elementos DOM para mejor rendimiento
    const elements = {
        containers: {
            helados: document.querySelector("#helados .d-flex"),
            ensaladas: document.querySelector("#ensaladas .d-flex"),
            postres: document.querySelector("#postres .d-flex"),
            bebidas: document.querySelector("#bebidas .d-flex")
        },
        modal: {
            container: document.getElementById("modal-producto"),
            img: document.getElementById("modal-img"),
            title: document.getElementById("modal-title"),
            desc: document.getElementById("modal-desc"),
            price: document.getElementById("modal-price"),
            ingredients: document.querySelector(".ingredientes ul"),
            closeBtn: document.getElementById("modal-cerrar")
        }
    };

    // Verificar que todos los elementos existen
    const validateElements = () => {
        const requiredElements = [
            ...Object.values(elements.containers),
            ...Object.values(elements.modal)
        ];
        
        const missingElements = requiredElements.filter(el => !el);
        if (missingElements.length > 0) {
            console.error('Elementos DOM faltantes:', missingElements);
            return false;
        }
        return true;
    };

    if (!validateElements()) return;

    // Función optimizada para crear tarjetas
    const createCard = (producto) => {
        try {
            const card = document.createElement("div");
            card.classList.add("card", "card-trigger");
            card.setAttribute("role", "button");
            card.setAttribute("tabindex", "0");
            card.setAttribute("aria-label", `Ver detalles de ${producto.title}`);

            // Crear imagen con manejo de errores
            const img = document.createElement("img");
            img.src = producto.img;
            img.classList.add("card-img-top");
            img.alt = producto.title;
            img.loading = "lazy";
            
            // Manejo de errores de imagen
            img.onerror = () => {
                img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' fill='%23999' font-family='Arial' font-size='16'%3EImagen no disponible%3C/text%3E%3C/svg%3E";
                img.alt = "Imagen no disponible";
            };
            
            card.appendChild(img);

            // Crear contenido de la tarjeta
            const cardBody = document.createElement("div");
            cardBody.classList.add("card-body");

            const title = document.createElement("h5");
            title.classList.add("card-title");
            title.textContent = producto.title;
            cardBody.appendChild(title);

            const price = document.createElement("p");
            price.classList.add("card-price");
            price.textContent = producto.price;
            cardBody.appendChild(price);

            // Agregar badge si existe
            if (producto.badge) {
                const badge = document.createElement("span");
                badge.classList.add(producto.badge === "Nuevo" ? "badge-nuevo" : "badge-promo");
                badge.textContent = producto.badge;
                badge.setAttribute("aria-label", `Producto ${producto.badge.toLowerCase()}`);
                cardBody.appendChild(badge);
            }

            card.appendChild(cardBody);

            // Event listeners optimizados
            const openModal = () => openProductModal(producto);
            
            card.addEventListener("click", openModal);
            card.addEventListener("keydown", (e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openModal();
                }
            });

            return card;
        } catch (error) {
            console.error('Error creando tarjeta:', error);
            return null;
        }
    };

    // Función optimizada para abrir modal
    const openProductModal = (producto) => {
        try {
            const { modal } = elements;
            
            // Actualizar contenido del modal
            modal.img.src = producto.img;
            modal.img.alt = producto.title;
            modal.title.textContent = producto.title;
            modal.desc.textContent = producto.desc;
            modal.price.textContent = producto.price;

            // Limpiar y agregar ingredientes
            modal.ingredients.innerHTML = "";
            producto.ingredients.forEach(ingredient => {
                const li = document.createElement("li");
                li.textContent = ingredient;
                modal.ingredients.appendChild(li);
            });

            // Mostrar modal
            modal.container.style.display = "block";
            
            // Focus management para accesibilidad
            modal.closeBtn.focus();
            
            // Prevenir scroll del body
            document.body.style.overflow = "hidden";
            
        } catch (error) {
            console.error('Error abriendo modal:', error);
        }
    };

    // Función optimizada para cerrar modal
    const closeModal = () => {
        try {
            elements.modal.container.style.display = "none";
            document.body.style.overflow = "";
            
            // Restaurar focus al elemento que abrió el modal
            const activeElement = document.querySelector('.card:focus');
            if (activeElement) {
                activeElement.focus();
            }
        } catch (error) {
            console.error('Error cerrando modal:', error);
        }
    };

    // Event listeners optimizados
    elements.modal.closeBtn.addEventListener("click", closeModal);

    // Cerrar modal al hacer click fuera
    elements.modal.container.addEventListener("click", (event) => {
        if (event.target === elements.modal.container) {
            closeModal();
        }
    });

    // Cerrar modal con Escape key
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && elements.modal.container.style.display === "block") {
            closeModal();
        }
    });

    // Renderizar productos de forma optimizada
    const renderProducts = () => {
        try {
            const categories = [
                { container: elements.containers.helados, products: productos.helados },
                { container: elements.containers.ensaladas, products: productos.ensaladas },
                { container: elements.containers.postres, products: productos.postres },
                { container: elements.containers.bebidas, products: productos.bebidas }
            ];

            categories.forEach(({ container, products }) => {
                if (container && products) {
                    products.forEach(producto => {
                        const card = createCard(producto);
                        if (card) {
                            container.appendChild(card);
                        }
                    });
                }
            });
        } catch (error) {
            console.error('Error renderizando productos:', error);
        }
    };

    // Inicializar
    renderProducts();
});