# Portafolio Samuel Zabala - Desarrollador Backend

Portafolio personal estático desarrollado con HTML, CSS y JavaScript vanilla. Diseñado para destacar proyectos y habilidades como desarrollador backend.

## 📁 Estructura del Proyecto

```
samuelzabala-portfolio/
├── index.html              # Página principal
├── css/
│   ├── variables.css      # Variables CSS (colores, tipografía, espaciado)
│   └── styles.css         # Estilos principales
├── js/
│   └── main.js            # Lógica de la aplicación
├── images/
│   ├── profile.jpg        # Tu foto de perfil (agregar)
│   └── projects/          # Imágenes de proyectos (opcional)
└── README.md
```

## 🚀 Características

- **Diseño Responsive**: Adaptado para móviles, tablets y desktop
- **Navegación Suave**: Scroll suave entre secciones
- **Secciones Incluidas**:
  - Header con navegación fija
  - Hero section con presentación
  - Habilidades clave
  - Proyectos backend
  - Contacto
  - Footer

## 📝 Personalización

### 1. Información Personal

Edita `index.html` para actualizar:
- Nombre en el header
- Descripción en hero section
- Email de contacto 
- Enlaces de redes sociales

### 2. Habilidades

Edita el array `skills` en `js/main.js` (líneas 2-33):
```javascript
const skills = [
   {
        name: 'Laravel',
        icon: 'fa-brands fa-laravel',
        description: 'Framework PHP ...',
        tags: ['Eloquent ORM', 'Artisan CLI']
    },
    // Agrega más habilidades aquí
];
```

### 3. Tecnologias (líneas 36-40)
```javascript
const heroTechnologies = [
    { name: 'Laravel', icon: 'fa-brands fa-laravel' },
    // Agrega más habilidades aquí
];
```
### 4. Contacto (líneas 43-62)
```javascript
const contactMethods = [
    {
        type: 'Email',
        icon: 'fa-solid fa-envelope',
        value: 'correo@correo.com',
        link: 'mailto:correo@correo.com'
    },
    // Agrega más habilidades aquí
];
```

### 5. Proyectos

Edita el array `projects` en `js/main.js` (líneas 65-84):
```javascript
const projects = [
    {
        title: 'Titulo del proyecto',
        description: 'Descripción del proyecto',
        buttonText: 'Repositorio',
        technology: ['HTML', 'JAVA', 'PHP'],
        buttonLink: 'https:...',
        image: 'images/projects/RRHH.png',
        demoLink : 'https:...' // En caso de no tener demo no colocar
    },
    // Agrega más proyectos aquí
];
```

### 4. Colores y Estilos

Edita `css/variables.css` para cambiar:
- Colores del tema
- Tipografía
- Espaciado
- Tamaños de fuente

### 5. Foto de Perfil

1. Coloca tu foto en `images/profile.jpg`
2. Asegúrate de que tenga buena calidad y formato JPG/PNG
3. Recomendado: 400x400px o similar (cuadrada)


**Desarrollado por Samuel Zabala** 🚀

