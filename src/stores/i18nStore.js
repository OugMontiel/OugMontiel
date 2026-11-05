import { defineStore } from 'pinia'

const sharedSkills = [
  {
    name: 'Python',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/python-colored.svg',
    link: 'https://www.python.org/',
  },
  {
    name: 'Git',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/git-colored.svg',
    link: 'https://git-scm.com/',
  },
  {
    name: 'Docker',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/docker-colored.svg',
    link: 'https://www.docker.com/',
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
    name: 'AWS',
    icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/aws-colored.svg',
    link: 'https://aws.amazon.com/',
  },
  {
    name: 'Tableau',
    icon: 'https://www.tableau.com//themes/custom/tableau_www/favicon.ico',
    link: 'https://www.tableau.com/',
  },
  {
    name: 'R',
    icon: 'https://www.r-project.org/favicon-32x32.png',
    link: 'https://www.r-project.org/',
  },
  {
    name: 'Stata',
    icon: 'https://www.stata.com/includes/images/stata-logo-blue.svg',
    link: 'https://www.stata.com/',
  },
  {
    name: 'Jupyter',
    icon: 'https://jupyter.org/favicon.ico',
    link: 'https://jupyter.org/',
  },
  {
    name: 'Matplotlib',
    icon: 'https://matplotlib.org/_static/favicon.ico',
    link: 'https://www.matplotlib.org/',
  },
]

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
          bio: 'Economist and Backend / Fullstack Developer focused on transforming complex business challenges into scalable data-driven products, robust APIs, and automated pipelines. Currently building MonyMonty, a personal finance SaaS that bridges economic modeling with modern software architecture.',
          bio2: 'I’m also a judoka, chess player, and entrepreneur. I apply the discipline and strategic thinking of judo and chess to software engineering, while valuing time with loved ones and outdoor activities like hiking to recharge.',
          servicesTitle: "What I'm doing",
          services: [
            {
              icon: 'icon-design.svg',
              alt: 'Design icon',
              title: 'Web design',
              description:
                'The most modern and high-quality design made at a professional level.',
            },
            {
              icon: 'icon-dev.svg',
              alt: 'Web development icon',
              title: 'Web development',
              description:
                'High-quality development of sites at the professional level.',
            },
            {
              icon: 'icon-economi.svg',
              alt: 'Econometric modeling icon',
              title: 'Econometric Modeling',
              description:
                'Design and analysis of econometric models for forecasting and data analysis.',
            },
            {
              icon: 'icon-api.svg',
              alt: 'API development icon',
              title: 'API Development',
              description:
                'Creation of efficient and scalable APIs for web and mobile applications.',
            },
            {
              icon: 'icon-maching.svg',
              alt: 'Machine learning icon',
              title: 'Machine Learning',
              description:
                'Development of machine learning models to automate and enhance processes.',
            },
            {
              icon: 'icon-visualization.svg',
              alt: 'Data visualization icon',
              title: 'Data Visualization',
              description:
                'Creation of dashboards and visual reports to interpret complex data.',
            },
            {
              icon: 'icon-time-serie.svg',
              alt: 'Time series icon',
              title: 'Time Series',
              description:
                'Developing models to predict trends and patterns in time-series data.',
            },
            {
              icon: 'icon-pipeline.svg',
              alt: 'Data pipeline icon',
              title: 'Creation of Data Pipelines',
              description:
                'Building pipelines to automate data extraction, transformation, and loading processes.',
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
                    'Development of key business metrics, internal analytical packages, and end-to-end fullstack features. Responsible for designing scalable APIs, optimizing data processing workflows, and integrating analytical modules for strategic decision-making.',
                },
                {
                  title: 'Software Developer (Volunteer) — YMCA Santander',
                  date: 'Oct 2024 — Jul 2026',
                  description:
                    'Led the redesign of the institutional website and internal management platform, modernizing user experience, digitizing administrative workflows, and improving platform maintainability.',
                },
                {
                  title: 'Data Analyst — Clavijo & Asociados SAS',
                  date: 'Feb 2022 — Mar 2023',
                  description:
                    'Participated in resource optimization through predictive modeling and analytics tools using Python, SQL, and Power BI. Automated reporting workflows, reducing data query time by 80%, monitoring 100% of pending payments, and generating a 30% savings in the annual budget.',
                },
              ],
            },
            {
              title: 'Education',
              icon: 'book-outline',
              items: [
                {
                  title: 'Software Development Training — Campuslands',
                  date: '2024',
                  description:
                    'Intensive software engineering training focused on backend architecture, RESTful API development, SQL and NoSQL database management, frontend technologies (HTML, CSS, JavaScript, Vue), and DevOps deployment practices.',
                },
                {
                  title:
                    'B.S. in Economics — Universidad Industrial de Santander (UIS)',
                  date: '2016 — 2022',
                  description:
                    'Economist specialized in advanced econometric modeling, forecasting, and quantitative analysis using R, Python, and Stata. Focused on transforming complex datasets into strategic insights for public policy, financial consulting, and market analysis.',
                },
                {
                  title: 'UNIMINUTO',
                  date: '08/2021 — 12/2021',
                  description:
                    'Excel and Power BI for data analysis and business intelligence. Trained in creating interactive dashboards, efficient data modeling and storage, and managing relational and non-relational databases.',
                },
              ],
            },
          ],
          skills: sharedSkills,
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
              category: 'Web development',
              imgSrc: '/imgProyectos/project-1.jpg',
              link: 'https://github.com/OugMontiel',
            },
            {
              title: 'Forecasting Techniques',
              category: 'Time Series',
              imgSrc: '/imgProyectos/project-time-series-1.webp',
              link: 'https://github.com/OugMontiel/ModeloARIMA-Fase-2',
            },
            {
              title: 'Control and Registration of All Teams',
              category: 'Backend Developer',
              imgSrc: '/imgProyectos/project-backend-developer-1.webp',
              link: 'https://github.com/OugMontiel/projectTeamSoccer-Campus',
            },
            {
              title: 'Data Engineering',
              category: 'Pipelines',
              imgSrc: '/imgProyectos/project-pipelines-1.webp',
              link: 'https://github.com/OugMontiel/Pragma',
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
          bio: 'Economista y Desarrollador Backend / Fullstack enfocado en transformar retos complejos de negocio en productos escalables basados en datos, APIs robustas y pipelines automatizados. Actualmente construyendo MonyMonty, un SaaS de finanzas personales que une el modelado económico con arquitectura de software moderna.',
          bio2: 'También soy judoca, ajedrecista y emprendedor. Aplico la disciplina y el pensamiento estratégico del judo y el ajedrez a la ingeniería de software, valorando el tiempo con mis seres queridos y las actividades al aire libre como el senderismo para recargar energías.',
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
                    'Desarrollo de métricas clave de negocio, paquetes analíticos internos y funcionalidades fullstack de extremo a extremo. Responsable del diseño de APIs escalables, optimización de flujos de procesamiento de datos e integración de módulos analíticos para la toma de decisiones estratégicas.',
                },
                {
                  title:
                    'Desarrollador de Software (Voluntariado) — YMCA Santander',
                  date: 'Oct 2024 — Jul 2026',
                  description:
                    'Lideré el rediseño de su sitio web institucional y plataforma interna de gestión, modernizando la experiencia de usuario, digitalizando flujos administrativos y mejorando la mantenibilidad del sistema.',
                },
                {
                  title: 'Analista de Datos — Clavijo & Asociados SAS',
                  date: 'Feb 2022 — Mar 2023',
                  description:
                    'Participé en la optimización de recursos mediante modelos predictivos y herramientas de análisis con Python, SQL y Power BI. Automatizando informes, reduje en un 80% el tiempo de consulta de datos, monitoreé el 100% de los pagos pendientes y generé un ahorro del 30% en el presupuesto anual.',
                },
              ],
            },
            {
              title: 'Educación',
              icon: 'book-outline',
              items: [
                {
                  title: 'Formación en Desarrollo de Software — Campuslands',
                  date: '2024',
                  description:
                    'Formación intensiva en ingeniería de software con enfoque en arquitectura backend, creación de APIs RESTful, manejo de bases de datos SQL y NoSQL, tecnologías frontend (HTML, CSS, JavaScript, Vue) y prácticas DevOps de despliegue.',
                },
                {
                  title:
                    'Pregrado en Economía — Universidad Industrial de Santander (UIS)',
                  date: '2016 — 2022',
                  description:
                    'Economista especializado en modelado econométrico avanzado, pronósticos y análisis cuantitativo con R, Python y Stata. Enfocado en transformar datos complejos en insights estratégicos para políticas públicas, consultoría financiera y estudios de mercado.',
                },
                {
                  title: 'UNIMINUTO',
                  date: '08/2021 — 12/2021',
                  description:
                    'Excel y Power BI para análisis de datos y business intelligence. Capacitado en la creación de dashboards interactivos, modelado y almacenamiento eficiente de datos, y administración de bases de datos relacionales y no relacionales.',
                },
              ],
            },
          ],
          skills: sharedSkills,
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
              category: 'Desarrollo web',
              imgSrc: '/imgProyectos/project-1.jpg',
              link: 'https://github.com/OugMontiel',
            },
            {
              title: 'Técnicas de pronóstico',
              category: 'Series de Tiempo',
              imgSrc: '/imgProyectos/project-time-series-1.webp',
              link: 'https://github.com/OugMontiel/ModeloARIMA-Fase-2',
            },
            {
              title: 'Control y registro de todos los equipos',
              category: 'Desarrollador Backend',
              imgSrc: '/imgProyectos/project-backend-developer-1.webp',
              link: 'https://github.com/OugMontiel/projectTeamSoccer-Campus',
            },
            {
              title: 'Ingeniería de datos',
              category: 'Pipelines',
              imgSrc: '/imgProyectos/project-pipelines-1.webp',
              link: 'https://github.com/OugMontiel/Pragma',
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
