// Skills Data
const skills = [
    {
        name: 'Laravel',
        icon: 'fa-brands fa-laravel',
        description: 'Framework PHP para desarrollo web rápido y elegante.',
        tags: ['Eloquent ORM', 'Artisan CLI', 'Blade Templates', 'API Resources', 'Laravel Sanctum', 'Migrations']
    },
    {
        name: 'Java',
        icon: 'fa-brands fa-java',
        description: 'Lenguaje de programación orientado a objetos multiplataforma.',
        tags: ['Spring Boot', 'JPA/Hibernate', 'Maven', 'REST APIs', 'Multithreading']
    },
    {
        name: 'Moodle',
        icon: 'fa-solid fa-graduation-cap',
        description: 'Plataforma de aprendizaje en línea y gestión de cursos.',
        tags: ['Plugin Development', 'Theme Customization', 'LTI Integration', 'Web Services API']
    },
    {
        name: 'MySQL',
        icon: 'fa-solid fa-database',
        description: 'Sistema de gestión de bases de datos relacionales.',
        tags: ['Query Optimization', 'Stored Procedures', 'Indexing', 'Backup & Recovery', 'Performance Tuning']
    },
    {
        name: 'Javascript',
        icon: 'fa-brands fa-js',
        description: 'Lenguaje de programación para el desarrollo web.',
        tags: ['React', 'Node.js', 'Express', 'REST APIs', 'Vue']
    }
];

// Hero Technologies
const heroTechnologies = [
    { name: 'Laravel', icon: 'fa-brands fa-laravel' },
    { name: 'MySQL', icon: 'fa-solid fa-database' },
    { name: 'Moodle', icon: 'fa-solid fa-graduation-cap' },
];

// Contact Data
const contactMethods = [
    {
        type: 'Email',
        icon: 'fa-solid fa-envelope',
        value: 'Samueljzd@samuraizcode.dev',
        link: 'mailto:Samueljzd@samuraizcode.dev'
    },
    {
        type: 'GitHub',
        icon: 'fa-brands fa-github',
        value: '@samuelp21',
        link: 'https://github.com/samuelp21'
    },
    {
        type: 'LinkedIn',
        icon: 'fa-brands fa-linkedin',
        value: 'Samuel Zabala',
        link: 'https://www.linkedin.com/in/samueljzd'
    }
];

// Projects Data
const projects = [
    {
        title: 'Aplicación de Recursos Humanos',
        description: 'Esta aplicación de recursos humanos está diseñada para facilitar la gestión de empleados en una organización, permitiendo realizar diversas acciones clave como:<br>• <b>Registro y gestión de usuarios</b>: Alta y baja de empleados.<br>•<b> Control de fichajes</b>: Registros de entradas y salidas de los empleados.<br>• <b>Solicitudes de vacaciones</b>: Sistema para solicitar y gestionar las vacaciones del personal.<br>• <b>Gestión de documentación</b>: Almacenamiento y manejo de documentos importantes, como contratos, permisos, y otros archivos relacionados con los empleados.',
        buttonText: 'Repositorio',
        technology: ['Laravel', 'Revert', 'PHP', 'Mysql', 'Inertia.js', 'React'],
        buttonLink: 'https://github.com/SamuelP21/React-Inertia-Breeze-Tailwind',
        image: 'images/projects/RRHH.png',
        //demoLink : '#'
    },
    {
        title: 'Portafolio',
        description: 'Portafolio personal estático desarrollado con HTML, CSS y JavaScript vanilla. Diseñado para destacar proyectos y habilidades como desarrollador backend.',
        buttonText: 'Repositorio',
        technology: ['JavaScript', 'CSS', 'HTML'],
        buttonLink: 'https://github.com/SamuelP21/samuelzabala-portfolio',
        image: 'images/projects/portafolio.png',
        //demoLink : '#'
    }
];

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderHeroTechnologies();
    renderSkills();
    renderProjects();
    renderContactCards();
    setupNavigation();
});

// Render Skills
function renderSkills() {
    const container = document.getElementById('skills-container');
    if (!container) return;

    container.innerHTML = skills.map(skill => `
        <div class="skill-card">
            <div class="skill-header">
                <div class="skill-icon-wrapper">
                    <i class="skill-icon ${skill.icon}"></i>
                </div>
                <h3 class="skill-name">${skill.name}</h3>
            </div>
            <p class="skill-description">${skill.description}</p>
            <div class="skill-tags">
                ${skill.tags.map(tag => `<span class="skill-tag">${tag}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

// Render Hero Technologies
function renderHeroTechnologies() {
    const container = document.getElementById('hero-tech-icons');
    if (!container) return;

    container.innerHTML = heroTechnologies.map(tech => `
        <div class="hero-tech-icon">
            <i class="${tech.icon}"></i>
            <span class="hero-tech-name">${tech.name}</span>
        </div>
    `).join('');
}

// Render Projects
function renderProjects() {
    const container = document.getElementById('projects-container');
    if (!container) return;

    container.innerHTML = projects.map(project => `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title}" class="project-image">
            ${project.technology && project.technology.length > 0 ? `
                <div class="project-technologies">
                    ${project.technology.map(tech => `<span class="project-tech-tag">${tech}</span>`).join('')}
                </div>
            ` : ''}
            <h3 class="project-title">${project.title}</h3>
            <p class="project-description">${project.description}</p>
            <a href="${project.buttonLink}" class="project-btn" target="_blank" rel="noopener noreferrer">
                ${project.buttonText}
            </a>
            ${project.demoLink ? `<a href="${project.demoLink}" class="project-btn" target="_blank" rel="noopener noreferrer">
                Demo
            </a>` : ''}
        </div>
    `).join('');
}

// Navigation Active State
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNav() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveNav);

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Render Contact Cards
function renderContactCards() {
    const container = document.getElementById('contact-cards-container');
    if (!container) return;

    container.innerHTML = contactMethods.map((contact, index) => {
        const linkAttr = contact.link ? `href="${contact.link}" target="_blank" rel="noopener noreferrer"` : '';
        const cardClass = contact.link ? 'contact-card clickable' : 'contact-card';

        return `
            <${contact.link ? 'a' : 'div'} class="${cardClass}" ${linkAttr} style="animation-delay: ${index * 0.1}s">
                <div class="contact-card-icon-wrapper">
                    <div class="contact-card-icon">
                        <i class="${contact.icon}"></i>
                    </div>
                    <div class="contact-card-glow"></div>
                </div>
                <div class="contact-card-content">
                    <h3 class="contact-card-title">${contact.type}</h3>
                    <p class="contact-card-value">${contact.value}</p>
                </div>
            </${contact.link ? 'a' : 'div'}>
        `;
    }).join('');
}

