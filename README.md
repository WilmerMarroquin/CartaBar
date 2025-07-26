# 🍦 Sleep Ice - Carta Digital

Una carta digital moderna y responsiva para heladería artesanal, con diseño elegante y funcionalidades avanzadas.

## ✨ Características

### 🎨 **Diseño y UX**

- **Diseño responsivo** que se adapta a todos los dispositivos
- **Menú hamburguesa** para móviles con animaciones suaves
- **Modal adaptativo** que cambia de layout según el dispositivo
- **Efectos hover** sutiles en imágenes y elementos interactivos
- **Navegación sticky** que permanece visible al hacer scroll

### 🚀 **Funcionalidades**

- **Carta de productos** organizada por categorías (Helados, Ensaladas, Postres, Bebidas)
- **Modal de detalles** con información completa de cada producto
- **Navegación por teclado** completa para accesibilidad
- **Gestión de focus** automática para lectores de pantalla
- **Botón flotante** para volver al inicio

### 📱 **Responsividad**

- **Desktop**: Layout horizontal optimizado
- **Tablet**: Modal adaptativo horizontal/vertical
- **Móvil**: Diseño vertical con menú hamburguesa
- **Accesibilidad**: Soporte completo para navegación por teclado

### 🔧 **Optimizaciones**

- **Lazy loading** en imágenes para mejor rendimiento
- **SEO optimizado** con meta tags completos
- **Accesibilidad WCAG** con atributos ARIA
- **Manejo de errores** robusto
- **Código optimizado** con mejores prácticas

## 🛠️ Tecnologías

- **HTML5** - Estructura semántica
- **CSS3** - Estilos modernos con Grid y Flexbox
- **JavaScript ES6+** - Funcionalidad interactiva
- **Google Fonts** - Tipografías Fredoka y Quicksand

## 📁 Estructura del Proyecto

```
CartaBar/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos principales
├── js/
│   ├── main.js             # Lógica principal y modal
│   ├── menu.js             # Menú hamburguesa
│   └── productos.js        # Datos de productos
├── img/                    # Imágenes de productos
│   ├── logo.png           # Logo principal
│   ├── h1.jpg - h6.jpg    # Imágenes de helados
│   ├── e1.jpg - e3.jpg    # Imágenes de ensaladas
│   ├── p1.jpg - p4.jpg    # Imágenes de postres
│   └── b1.jpg - b4.jpg    # Imágenes de bebidas
└── README.md              # Documentación
```

## 🚀 Instalación

1. **Clona el repositorio:**

   ```bash
   git clone https://github.com/tu-usuario/CartaBar.git
   cd CartaBar
   ```

2. **Abre el proyecto:**

   - Abre `index.html` en tu navegador
   - O usa un servidor local:

   ```bash
   # Con Python
   python -m http.server 8000

   # Con Node.js
   npx serve .

   # Con PHP
   php -S localhost:8000
   ```

3. **Accede a la aplicación:**
   - Navega a `http://localhost:8000`

## 📖 Uso

### **Navegación**

- **Menú principal**: Usa el menú hamburguesa en móviles
- **Categorías**: Navega entre Helados, Ensaladas, Postres y Bebidas
- **Productos**: Haz clic en cualquier tarjeta para ver detalles

### **Modal de Producto**

- **Abrir**: Haz clic en cualquier tarjeta de producto
- **Cerrar**:
  - Botón X en la esquina superior
  - Clic fuera del modal
  - Tecla Escape

### **Accesibilidad**

- **Navegación por teclado**: Usa Tab para navegar
- **Enter/Espacio**: Activar elementos
- **Escape**: Cerrar modales y menús

## 🎯 Características Técnicas

### **Responsividad**

- **Breakpoints**: 500px, 600px, 700px, 900px, 1024px
- **Grid adaptativo**: Se ajusta automáticamente al contenido
- **Modal inteligente**: Cambia layout según dispositivo

### **Accesibilidad**

- **WCAG 2.1 AA** compliant
- **Atributos ARIA** completos
- **Navegación por teclado** completa
- **Focus management** automático
- **Contraste** optimizado

### **SEO**

- **Meta tags** completos
- **Open Graph** para redes sociales
- **Twitter Cards** configuradas
- **Estructura semántica** HTML5

## 🔧 Personalización

### **Agregar Productos**

Edita `js/productos.js`:

```javascript
const productos = {
  helados: [
    {
      img: "img/nuevo-helado.jpg",
      title: "Nuevo Sabor",
      desc: "Descripción del producto",
      price: "$130",
      badge: "Nuevo", // o "Promo" o null
      ingredients: ["Ingrediente 1", "Ingrediente 2"],
    },
  ],
};
```

### **Modificar Estilos**

- **Colores**: Edita las variables CSS en `css/styles.css`
- **Fuentes**: Cambia las importaciones de Google Fonts
- **Layout**: Modifica los breakpoints según necesidades

## 🐛 Solución de Problemas

### **Imágenes no cargan**

- Verifica que las rutas en `productos.js` sean correctas
- Asegúrate de que las imágenes estén en la carpeta `img/`

### **Modal no funciona**

- Verifica que todos los archivos JS estén cargados
- Revisa la consola del navegador para errores

### **Menú no responde en móvil**

- Verifica que `menu.js` esté incluido en el HTML
- Asegúrate de que los IDs coincidan

## 📱 Compatibilidad

- ✅ **Chrome** 90+
- ✅ **Firefox** 88+
- ✅ **Safari** 14+
- ✅ **Edge** 90+
- ✅ **Móviles** iOS 12+, Android 8+

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Sleep Ice Team**

- Email: info@sleepice.com
- Sitio web: https://sleepice.com

---

⭐ **¡Si te gusta este proyecto, dale una estrella!**
