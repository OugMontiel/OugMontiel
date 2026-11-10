import { defineStore } from 'pinia'

const createSkills = categories => [
  {
    category: categories.backend,
    list: [
      {
        name: 'Python',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
        link: 'https://www.python.org/',
      },
      {
        name: 'Node.js',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
        link: 'https://nodejs.org/',
      },
      {
        name: 'Express.js',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/express-colored.svg',
        link: 'https://expressjs.com/',
      },
      {
        name: 'MongoDB',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mongodb-colored.svg',
        link: 'https://www.mongodb.com/',
      },
      {
        name: 'MySQL',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/mysql-colored.svg',
        link: 'https://www.mysql.com/',
      },
      {
        name: 'Docker',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
        link: 'https://www.docker.com/',
      },
      {
        name: 'Git',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
        link: 'https://git-scm.com/',
      },
      {
        name: 'GitHub',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github-dark.svg',
        link: 'https://github.com/',
      },
      {
        name: 'GitLab',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg',
        link: 'https://about.gitlab.com/',
      },
    ],
  },
  {
    category: categories.frontend,
    list: [
      {
        name: 'JavaScript',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/javascript-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
      },
      {
        name: 'React',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/react-colored.svg',
        link: 'https://reactjs.org/',
      },
      {
        name: 'Vue.js',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg',
        link: 'https://vuejs.org/',
      },
      {
        name: 'HTML5',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/html5-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5',
      },
      {
        name: 'CSS3',
        icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/css3-colored.svg',
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
      },
    ],
  },
  {
    category: categories.data,
    list: [
      {
        name: 'R',
        icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
        link: 'https://www.r-project.org/',
      },
      {
        name: 'Stata',
        icon: 'https://www.stata.com/includes/images/stata-logo-blue.svg',
        link: 'https://www.stata.com/',
      },
      {
        name: 'Power BI',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg',
        link: 'https://powerbi.microsoft.com/',
      },
      {
        name: 'Tableau',
        icon: 'https://www.tableau.com/themes/custom/tableau_www/favicon.ico',
        link: 'https://www.tableau.com/',
      },
      {
        name: 'Excel',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/e/e3/Microsoft_Office_Excel_%282019%E2%80%932025%29.svg',
        link: 'https://www.microsoft.com/excel',
      },
    ],
  },
]

const skillsEn = createSkills({
  backend: 'Backend, Databases & DevOps',
  frontend: 'Frontend & UI',
  data: 'Data & Econometrics',
})

const skillsEs = createSkills({
  backend: 'Backend, Bases de Datos & DevOps',
  frontend: 'Frontend & UI',
  data: 'Data & Econometría',
})

const sharedSocials = [
  {
    name: 'Discord',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg',
    link: 'https://discord.com/users/Oug#6073',
  },
  {
    name: 'GitHub',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg',
    link: 'https://www.github.com/OugMontiel',
  },
  {
    name: 'LinkedIn',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg',
    link: 'https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science/',
  },
  {
    name: 'Kaggle',
    icon: 'https://www.kaggle.com/static/images/favicon.ico',
    link: 'https://www.kaggle.com/ougmontiel',
  },
]

const sharedContacts = [
  {
    name: 'Email',
    icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico',
    link: 'mailto:montielflorezdiego@gmail.com',
  },
  {
    name: 'Telegram',
    icon: 'https://web.telegram.org/a/favicon-32x32.png',
    link: 'https://t.me/OugMontiel',
  },
  {
    name: 'WhatsApp',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png',
    link: 'https://wa.me/573186377582',
  },
]

export const useI18nStore = defineStore('i18n', {
  state: () => {
    const initialLang = localStorage.getItem('lang') || 'en'
    document.documentElement.lang = initialLang
    return {
      currentLanguage: initialLang,
      dictionaryEn: {
        nav: {
          about: 'About',
          resume: 'Resume',
          portfolio: 'Portfolio',
          blog: 'Blog',
          contact: 'Contact',
          menu: 'Menu',
        },
        sidebar: {
          roles: ['Data Science', 'Backend Developer', 'Economist'],
          email: 'Email',
          phone: 'Phone',
          birthday: 'Birthday',
          birthdayDate: 'Aug 12',
          location: 'Location',
        },
        about: {
          title: 'About me',
          bio: 'I build from the ground up. I am an economist who learned to orchestrate servers. My approach as a Backend / Fullstack Developer is straightforward: untangling complex operational bottlenecks and turning them into clean APIs, seamless data pipelines, and products that run flawlessly. Today, I channel that energy into MonyMonty, a Personal Finance SaaS designed to turn financial management from a burden into a true tool for empowerment.',
          bio2: 'Still, not everything comes down to mathematical logic. I deeply value empathy, time well spent, and collaborating with people who truly know how to listen. Away from the command line, I recharge by hiking up to new mountain viewpoints, enjoying a good dance, and sharing life’s sweet moments with the people closest to me.',
          servicesTitle: "What I'm doing",
          services: [
            {
              icon: 'icon-design.svg',
              alt: 'Design icon',
              title: 'Web design',
              description:
                'Modern, high-quality design crafted at a professional level.',
            },
            {
              icon: 'icon-dev.svg',
              alt: 'Web development icon',
              title: 'Web development',
              description:
                'High-quality development of web applications at a professional level.',
            },
            {
              icon: 'icon-economi.svg',
              alt: 'Econometric modeling icon',
              title: 'Econometric Modeling',
              description:
                'Design and analysis of econometric models for forecasting and quantitative data analysis.',
            },
            {
              icon: 'icon-api.svg',
              alt: 'API development icon',
              title: 'API Development',
              description:
                'Engineering efficient and scalable APIs for web and mobile applications.',
            },
            {
              icon: 'icon-maching.svg',
              alt: 'Machine learning icon',
              title: 'Machine Learning',
              description:
                'Developing machine learning models to automate and optimize business processes.',
            },
            {
              icon: 'icon-visualization.svg',
              alt: 'Data visualization icon',
              title: 'Data Visualization',
              description:
                'Building interactive dashboards and visual reports to interpret complex datasets.',
            },
            {
              icon: 'icon-time-serie.svg',
              alt: 'Time series icon',
              title: 'Time Series',
              description:
                'Developing forecasting models to predict trends and patterns in time-series data.',
            },
            {
              icon: 'icon-pipeline.svg',
              alt: 'Data pipeline icon',
              title: 'Creation of Data Pipelines',
              description:
                'Building automated pipelines for data extraction, transformation, and loading (ETL).',
            },
          ],
        },
        resume: {
          title: 'Resume',
          skillsTitle: 'My skills',
          resumeSections: [
            {
              title: 'Experience',
              icon: 'briefcase-outline',
              items: [
                {
                  title: 'Fullstack Developer — Okorum',
                  date: 'Jun 2025 — Present',
                  description:
                    'Engineered an internal analytics package (private NPM library) processing over 200,000 daily interactions across the company’s digital ecosystem. Architected the end-to-end Fullstack solution using Node.js, MongoDB, and React, implementing advanced Plotly.js visualizations to accelerate data-driven decision making.',
                },
                {
                  title: 'Software Developer — YMCA Santander',
                  date: 'Oct 2024 — Jul 2026',
                  description:
                    'Led the migration from legacy WordPress to a custom fullstack architecture (Vue.js, Node.js, MongoDB), delivering both a public-facing web platform and a private internal management system. Orchestrated containerized deployments on Linux servers using Docker, modernizing UX and operational efficiency across the NGO.',
                },
                {
                  title: 'Technical Consultant & Freelance Developer',
                  date: '2023 — Present',
                  description:
                    'Architecting and delivering custom technology solutions. Building econometric forecasting models (ARIMA in R) for stock market analysis, designing automated ETL data pipelines for enterprise proofs of concept (PoCs), and engineering backend architectures for private management systems.',
                },
                {
                  title: 'Data Analyst — Clavijo & Asociados SAS',
                  date: 'Feb 2022 — Mar 2023',
                  description:
                    'Transformed manual accounting workflows by automating CSV data analysis pipelines using Python (Pandas, NumPy). Streamlined collections management and achieved 100% payment tracking coverage, slashing query turnaround times by 80% and driving a 30% savings in the annual budget.',
                },
              ],
            },
            {
              title: 'Education',
              icon: 'book-outline',
              items: [
                {
                  title: 'Software Developer — Campuslands',
                  date: '2024',
                  description:
                    'Intensive software engineering training focused on backend architecture, RESTful API development, database management, frontend technologies (Vue.js), and DevOps deployment practices.',
                },
                {
                  title:
                    "Bachelor's Degree in Economics — Universidad Industrial de Santander (UIS)",
                  date: '2016 — 2022',
                  description:
                    'Economist specialized in advanced econometric modeling, forecasting, and quantitative analysis using R, Python, and Stata. Focused on transforming complex data into strategic insights for data-driven decision making.',
                },
              ],
            },
            {
              title: 'Certifications & Courses',
              icon: 'medal-outline',
              items: [
                {
                  title: 'Power BI & Business Intelligence — UNIMINUTO',
                  date: '2021',
                  description:
                    'Building interactive dashboards, data modeling, and database administration for strategic analytics.',
                },
                {
                  title: 'Programming from Scratch Latam — Egg',
                  date: '2023',
                  description:
                    'Programming fundamentals, algorithms, and computational logic.',
                },
                {
                  title: 'Introduction to SQL — Sololearn',
                  date: '2023',
                  description:
                    'Relational database management and structured querying.',
                },
              ],
            },
          ],
          skills: skillsEn,
        },
        portfolio: {
          title: 'Portfolio',
          selectCategory: 'Select category',
          filterButtons: [
            'All',
            'Web design',
            'Web development',
            'Econometric Modeling',
            'Backend Developer',
            'Data Visualization',
            'Time Series',
            'Pipelines',
          ],
          projects: [
            {
              title: 'MonyMonty — Personal Finance SaaS',
              categories: ['Web development', 'Backend Developer', 'Pipelines'],
              imgSrc: '/imgProyectos/loguinMonyMonty.png',
              link: 'https://monymonty.monteflor.co/',
            },
            {
              title: 'Public Website — YMCA Santander',
              categories: ['Web development', 'Backend Developer'],
              imgSrc: '/imgProyectos/ymcaWeb.webp',
              link: 'https://ymcasantander.org/',
            },
            {
              title: 'Team Management API (Confidential Code)',
              categories: ['Backend Developer'],
              imgSrc:
                'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
              link: '#',
              description:
                'Private backend system for team metrics management. Scalable architecture and optimized database. (Confidential code under NDA).',
            },
            {
              title: 'ETL Architecture & Data Pipelines (Technical Assessment)',
              categories: ['Pipelines'],
              imgSrc:
                'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
              link: '#',
              description:
                'Data pipeline built for extraction, transformation, and loading (ETL). (High-performance technical assessment).',
            },
            {
              title: 'ARIMA/VAR Stock Market Analysis (Consulting)',
              categories: ['Time Series'],
              imgSrc:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
              link: '#',
              description:
                'ARIMA/VAR econometric models for financial time-series forecasting. (Consulting project).',
            },
          ],
        },
        blog: {
          title: 'Blog',
          blogPosts: [
            {
              title: 'Ceasing to be me',
              category: 'Personal',
              date: '2024-02-14',
              formattedDate: 'Feb 14, 2024',
              imgSrc: '/my-avatar.png',
              alt: 'Ceasing to be me',
              link: 'https://medium.com/@OugMontiel/ceasing-to-be-me-a9c0d6d51f51',
              description:
                "If you want to know more about my journey, I invite you to read this post. Here, I'll share how my passion for data science ignited and my ongoing pursuit to become an expert in the field. Additionally, I'll discuss my personal and professional growth through the learning process. I hope you find it enjoyable and inspirational.",
            },
            {
              title: 'The initial stages of delving into Data Science',
              category: 'Data Science',
              date: '2024-03-18',
              formattedDate: 'Mar 18, 2024',
              imgSrc: '/imgBlog/blog-2.webp',
              alt: 'The initial stages of delving into Data Science',
              link: 'https://medium.com/@OugMontiel/data-science-first-steps-543fdab30cd5',
              description:
                'Exploring the Initial Stages of Data Science. The world of Data Science is an exciting journey into the realms of data, statistics, and human behavior! 🌐 Dive into the foundational concepts with me as we uncover its significance across diverse domains.',
            },
            {
              title: 'Understanding Data Science: A Guide for Beginners',
              category: 'Data Science',
              date: '2022-02-23',
              formattedDate: 'Feb 23, 2022',
              imgSrc: '/imgBlog/blog-3.webp',
              alt: 'Understanding Data Science: A Guide for Beginners',
              link: 'https://medium.com/@OugMontiel/entendiendo-la-ciencia-de-datos-una-guía-para-novatos-7f3da880fe20',
              description:
                'Discover how Data Science can transform your understanding of the world and boost your career! 🌟 Read our content to explore the keys to this revolutionary discipline and learn how to apply its principles in practice.',
            },
          ],
        },
        contact: {
          title: 'Contact',
          followMe: 'Follow Me',
          letsTalk: "Let's Talk",
          formTitle: 'Contact Form',
          fullnamePlaceholder: 'Full name',
          emailPlaceholder: 'Email address',
          messagePlaceholder: 'Your Message',
          sendBtn: 'Send Message',
          alertMessage:
            'The submission feature is currently unavailable. Please send an email to MontielFlorezDiego@gmail.com.',
          socials: sharedSocials,
          contacts: sharedContacts,
        },
      },
      dictionaryEs: {
        nav: {
          about: 'Sobre mí',
          resume: 'Currículum',
          portfolio: 'Portafolio',
          blog: 'Blog',
          contact: 'Contacto',
          menu: 'Menú',
        },
        sidebar: {
          roles: ['Ciencia de Datos', 'Desarrollador Backend', 'Economista'],
          email: 'Correo',
          phone: 'Teléfono',
          birthday: 'Cumpleaños',
          birthdayDate: '12 Ago',
          location: 'Ubicación',
        },
        about: {
          title: 'Sobre mí',
          bio: 'Construyo desde los cimientos. Soy un economista que aprendió a orquestar servidores. Mi enfoque como desarrollador fullstack es directo: tomar los nudos operativos de un negocio y convertirlos en APIs limpias, pipelines fluidos y productos que funcionen de manera impecable. Hoy concentro esa energía en MonyMonty, un SaaS diseñado para que la gestión financiera deje de ser una carga y se convierta en una herramienta real de empoderamiento.',
          bio2: 'Pero no todo es lógica matemática. Valoro profundamente la empatía, el tiempo bien invertido y el trabajo con personas que saben escuchar. Fuera de la terminal de comandos, recargo mi energía buscando nuevos miradores en la montaña, disfrutando de un buen baile y compartiendo los detalles dulces de la vida con mi gente.',
          servicesTitle: 'Lo que hago',
          services: [
            {
              icon: 'icon-design.svg',
              alt: 'Icono de diseño',
              title: 'Diseño web',
              description:
                'Diseño moderno y de alta calidad realizado a nivel profesional.',
            },
            {
              icon: 'icon-dev.svg',
              alt: 'Icono de desarrollo web',
              title: 'Desarrollo web',
              description:
                'Desarrollo de sitios web de alta calidad a nivel profesional.',
            },
            {
              icon: 'icon-economi.svg',
              alt: 'Icono de modelado econométrico',
              title: 'Modelado Econométrico',
              description:
                'Diseño y análisis de modelos econométricos para pronóstico y análisis de datos.',
            },
            {
              icon: 'icon-api.svg',
              alt: 'Icono de desarrollo de APIs',
              title: 'Desarrollo de APIs',
              description:
                'Creación de APIs eficientes y escalables para aplicaciones web y móviles.',
            },
            {
              icon: 'icon-maching.svg',
              alt: 'Icono de aprendizaje automático',
              title: 'Machine Learning',
              description:
                'Desarrollo de modelos de aprendizaje automático para automatizar y optimizar procesos.',
            },
            {
              icon: 'icon-visualization.svg',
              alt: 'Icono de visualización de datos',
              title: 'Visualización de Datos',
              description:
                'Creación de tableros e informes visuales para interpretar datos complejos.',
            },
            {
              icon: 'icon-time-serie.svg',
              alt: 'Icono de series de tiempo',
              title: 'Series de Tiempo',
              description:
                'Desarrollo de modelos para predecir tendencias y patrones en datos de series temporales.',
            },
            {
              icon: 'icon-pipeline.svg',
              alt: 'Icono de pipelines de datos',
              title: 'Creación de Pipelines de Datos',
              description:
                'Construcción de pipelines para automatizar procesos de extracción, transformación y carga de datos (ETL).',
            },
          ],
        },
        resume: {
          title: 'Currículum',
          skillsTitle: 'Mis habilidades',
          resumeSections: [
            {
              title: 'Experiencia',
              icon: 'briefcase-outline',
              items: [
                {
                  title: 'Fullstack Developer — Okorum',
                  date: 'Jun 2025 — Presente',
                  description:
                    'Desarrollé un paquete analítico interno (librería privada en NPM) que procesa más de 200,000 interacciones diarias para el ecosistema digital de la compañía. Arquitecté la solución Fullstack con Node.js, MongoDB y React, implementando visualizaciones avanzadas con Plotly.js para agilizar decisiones estratégicas.',
                },
                {
                  title: 'Consultor Técnico & Desarrollador Freelance',
                  date: '2023 — Presente',
                  description:
                    'Desarrollo de soluciones tecnológicas a medida. Construcción de modelos econométricos, diseño de pipelines de datos para pruebas de concepto empresariales (ETL), y desarrollo de arquitecturas backend para sistemas de gestión privados.',
                },
                {
                  title: 'Desarrollador de Software — YMCA Santander',
                  date: 'Oct 2024 — Jul 2026',
                  description:
                    'Lideré la migración desde WordPress hacia una arquitectura a medida (Vue.js, Node.js, MongoDB), desarrollando una web pública y un sistema de gestión privado. Gestioné el despliegue en servidores Linux con Docker, modernizando la UX y la eficiencia operativa de la ONG.',
                },
                {
                  title: 'Analista de Datos — Clavijo & Asociados SAS',
                  date: 'Feb 2022 — Mar 2023',
                  description:
                    'Transformé procesos contables manuales automatizando el análisis de datos (CSVs) con Python (Pandas, NumPy). Optimicé la gestión de cobranza y el monitoreo del 100% de pagos, reduciendo en un 80% los tiempos de respuesta y ahorrando un 30% del presupuesto anual.',
                },
              ],
            },
            {
              title: 'Educación',
              icon: 'book-outline',
              items: [
                {
                  title: 'Desarrollador de Software — Campuslands',
                  date: '2024',
                  description:
                    'Formación intensiva en ingeniería de software con enfoque en arquitectura backend, creación de APIs RESTful, manejo de bases de datos, tecnologías frontend (Vue) y prácticas DevOps de despliegue.',
                },
                {
                  title: 'Economía — Universidad Industrial de Santander (UIS)',
                  date: '2016 — 2022',
                  description:
                    'Economista especializado en modelado econométrico avanzado, pronósticos y análisis cuantitativo con R, Python y Stata. Enfoque en transformar datos en insights estratégicos.',
                },
              ],
            },
            {
              title: 'Certificaciones y Cursos',
              icon: 'medal-outline',
              items: [
                {
                  title:
                    'Developing Secure Software (LFD121) — The Linux Foundation',
                  date: 'May 2026',
                  description:
                    'Desarrollo seguro de software (SDLC), DevSecOps, mitigación de vulnerabilidades y secure coding basado en recomendaciones OWASP.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    'Building AI-Powered Search with MongoDB Vector Search — MongoDB',
                  date: 'May 2026',
                  description:
                    'Creación de experiencias de búsqueda impulsadas por IA utilizando Atlas Vector Search, embeddings y estrategias de recuperación.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title: 'Building AI Agents with MongoDB — MongoDB',
                  date: 'May 2026',
                  description:
                    'Creación de agentes inteligentes y Machine Learning automatizado (AutoML).',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    'Gemini Enterprise Essentials for Business and Power Users — Google Cloud',
                  date: 'May 2026',
                  description:
                    'Arki1. Integración de Inteligencia Artificial Generativa y herramientas de Google Workspace para automatización y productividad.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    "From Relational Model (SQL) to MongoDB's Document Model — MongoDB",
                  date: 'Abr 2026',
                  description:
                    'Arquitectura de datos y migración estratégica de modelos SQL relacionales a estructuras de documentos NoSQL.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    'MongoDB Overview: Core Concepts and Architecture — MongoDB',
                  date: 'Mar 2026',
                  description:
                    'MongoDB. Frameworks de arquitectura de datos y conceptos core del ecosistema MongoDB.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    'Foundations of Full‑Stack Development with Meteor.js — Meteor Labs (YC S25)',
                  date: 'Jul 2025',
                  description:
                    'Desarrollo integral de aplicaciones Fullstack, arquitecturas escalables y arquitecturas en tiempo real.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title:
                    'Understanding the OWASP® Top 10 Security Threats (SKF100) — The Linux Foundation.',
                  date: 'Jun 2025',
                  description:
                    'Identificación, pensamiento crítico y mitigación de las amenazas de seguridad más críticas (Secure Coding).',
                  link: '#',
                  ruta: '#',
                },
                {
                  title: 'Introduction to MongoDB — MongoDB',
                  date: 'Jun 2025',
                  description:
                    'Fundamentos de bases de datos NoSQL, consultas e indexación.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title: 'Introduction to SQL — Sololearn',
                  date: '2023',
                  description:
                    'Fundamentos de bases de datos relacionales, analítica de datos y consultas estructuradas.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title: 'Programación Desde Cero Latam — Egg',
                  date: 'Dic 2022',
                  description:
                    'Fundamentos de programación, algoritmos, lógica computacional y resolución colaborativa de problemas.',
                  link: '#',
                  ruta: '#',
                },
                {
                  title: 'Power BI & Business Intelligence — UNIMINUTO',
                  date: 'Ago 2021 — Dic 2021',
                  description:
                    'Creación de dashboards interactivos, modelado y administración de bases de datos para análisis estratégico.',
                  link: '#',
                  ruta: '#',
                },
              ],
            },
          ],
          skills: skillsEs,
        },
        portfolio: {
          title: 'Portafolio',
          selectCategory: 'Seleccionar categoría',
          filterButtons: [
            'Todos',
            'Diseño web',
            'Desarrollo web',
            'Modelado Econométrico',
            'Desarrollador Backend',
            'Visualización de Datos',
            'Series de Tiempo',
            'Pipelines',
          ],
          projects: [
            {
              title: 'MonyMonty — SaaS de Finanzas Personales',
              categories: [
                'Desarrollo web',
                'Desarrollador Backend',
                'Pipelines',
              ],
              imgSrc: '/imgProyectos/loguinMonyMonty.png',
              link: 'https://monymonty.monteflor.co/',
            },
            {
              title: 'Sitio Web Público — YMCA Santander',
              categories: ['Desarrollo web', 'Desarrollador Backend'],
              imgSrc: '/imgProyectos/ymcaWeb.webp',
              link: 'https://ymcasantander.org/',
            },
            {
              title: 'API de Gestión de Equipos (Código Confidencial)',
              categories: ['Desarrollador Backend'],
              imgSrc:
                'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/nodejs-colored.svg',
              link: '#',
              description:
                'Sistema backend privado para la administración de métricas de equipos. Arquitectura escalable y base de datos optimizada. (Código confidencial bajo NDA).',
            },
            {
              title: 'Arquitectura ETL & Pipelines de Datos (Prueba Técnica)',
              categories: ['Pipelines'],
              imgSrc:
                'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
              link: '#',
              description:
                'Pipeline de datos construido para extracción, transformación y carga (ETL). (Prueba técnica de alto rendimiento).',
            },
            {
              title: 'Análisis Bursátil ARIMA/VAR (Consultoría)',
              categories: ['Series de Tiempo'],
              imgSrc:
                'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg',
              link: '#',
              description:
                'Modelos econométricos ARIMA/VAR para pronóstico de series de tiempo financieras. (Proyecto de consultoría).',
            },
          ],
        },
        blog: {
          title: 'Blog',
          blogPosts: [
            {
              title: 'Dejar de ser yo',
              category: 'Personal',
              date: '2024-02-14',
              formattedDate: '14 Feb, 2024',
              imgSrc: '/my-avatar.png',
              alt: 'Dejar de ser yo',
              link: 'https://medium.com/@OugMontiel/ceasing-to-be-me-a9c0d6d51f51',
              description:
                'Si quieres conocer más sobre mi camino, te invito a leer esta publicación. Aquí comparto cómo nació mi pasión por la ciencia de datos y mi búsqueda constante por convertirme en un experto en el área. Además, hablo sobre mi crecimiento personal y profesional durante el proceso de aprendizaje. Espero que te resulte inspirador.',
            },
            {
              title:
                'Las etapas iniciales al adentrarse en la Ciencia de Datos',
              category: 'Ciencia de Datos',
              date: '2024-03-18',
              formattedDate: '18 Mar, 2024',
              imgSrc: '/imgBlog/blog-2.webp',
              alt: 'Las etapas iniciales al adentrarse en la Ciencia de Datos',
              link: 'https://medium.com/@OugMontiel/data-science-first-steps-543fdab30cd5',
              description:
                'Explorando las etapas iniciales de la Ciencia de Datos. ¡El mundo de la Ciencia de Datos es un viaje apasionante hacia los dominios de los datos, la estadística y el comportamiento humano! 🌐 Sumérgete conmigo en los conceptos fundamentales mientras descubrimos su importancia en diversos sectores.',
            },
            {
              title: 'Entendiendo la Ciencia de Datos: Una Guía para Novatos',
              category: 'Ciencia de Datos',
              date: '2022-02-23',
              formattedDate: '23 Feb, 2022',
              imgSrc: '/imgBlog/blog-3.webp',
              alt: 'Entendiendo la Ciencia de Datos: Una Guía para Novatos',
              link: 'https://medium.com/@OugMontiel/entendiendo-la-ciencia-de-datos-una-guía-para-novatos-7f3da880fe20',
              description:
                '¡Descubre cómo la Ciencia de Datos puede transformar tu comprensión del mundo y potenciar tu carrera! 🌟 Lee nuestro contenido para explorar las claves de esta disciplina revolucionaria y aprende a aplicar sus principios en la práctica.',
            },
          ],
        },
        contact: {
          title: 'Contacto',
          followMe: 'Sígueme',
          letsTalk: 'Hablemos',
          formTitle: 'Formulario de Contacto',
          fullnamePlaceholder: 'Nombre completo',
          emailPlaceholder: 'Correo electrónico',
          messagePlaceholder: 'Tu mensaje',
          sendBtn: 'Enviar Mensaje',
          alertMessage:
            'La funcionalidad de envío no está disponible de momento. Por favor, envíe un correo electrónico a MontielFlorezDiego@gmail.com.',
          socials: sharedSocials,
          contacts: sharedContacts,
        },
      },
    }
  },

  getters: {
    t: state => {
      const activeDictionary =
        state.currentLanguage === 'es' ? state.dictionaryEs : state.dictionaryEn
      return key => {
        if (!key) return ''
        const resolved = key
          .split('.')
          .reduce(
            (acc, part) =>
              acc && acc[part] !== undefined ? acc[part] : undefined,
            activeDictionary,
          )
        if (resolved !== undefined) return resolved
        if (activeDictionary.nav && activeDictionary.nav[key] !== undefined) {
          return activeDictionary.nav[key]
        }
        return key
      }
    },
  },

  actions: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en'
      localStorage.setItem('lang', this.currentLanguage)
      document.documentElement.lang = this.currentLanguage
    },
  },
})
