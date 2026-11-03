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
  state: () => ({
    currentLanguage: localStorage.getItem('lang') || 'en',
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
        bio: 'Focused on transforming business problems and needs into data-driven products and solutions using econometric models, API development, and pipeline creation.',
        bio2: 'I’m also a judoka, chess player, and entrepreneur. I enjoy the discipline and strategy of judo and chess, and I value time with loved ones and outdoor activities like hiking to recharge.',
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
            title: 'Education',
            icon: 'book-outline',
            items: [
              {
                title: 'CampusLand',
                date: '01/2024',
                description:
                  'Backend development focused on API creation and SQL and NoSQL database management. Complemented with frontend knowledge (HTML, CSS, JavaScript, Vue) and DevOps practices for application automation and deployment. Qualified to perform in Backend and Full Stack Developer roles, with skills to build complete and scalable solutions.',
              },
              {
                title: 'Universidad Industrial de Santander (UIS)',
                date: '2016 — 2022',
                description:
                  'Economist specialized in the advanced application of econometric techniques to model, predict, and optimize complex economic scenarios. Proficient in data analysis tools such as R, Python, and Stata, integrating cutting-edge statistical methods, machine learning, and big data in economic research. Capable of transforming data into strategic insights for decision-making in dynamic and competitive environments, ranging from public policy analysis to financial consulting and market studies.',
              },
              {
                title: 'UNIMINUTO',
                date: '08/2021 — 12/2021',
                description:
                  'Excel and Power BI for data analysis and business intelligence. Trained in creating interactive dashboards, efficient data modeling and storage, and managing relational and non-relational databases.',
              },
            ],
          },
          {
            title: 'Experience',
            icon: 'briefcase-outline',
            items: [
              {
                title: 'Data Analyst',
                date: '02/2022 — 04/2023',
                description:
                  'Participated in building resource optimization through predictive modeling and analytics tools using Python, SQL, and Power BI. By automating reports, I reduced data query time by 80% and monitored 100% of pending payments. Additionally, I designed a query system that improved administrative decision-making, generating a 30% savings in the annual budget.',
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
        bio: 'Enfocado en transformar problemas y necesidades de negocio en productos y soluciones basadas en datos mediante modelos econométricos, desarrollo de APIs y creación de pipelines.',
        bio2: 'También soy judoca, ajedrecista y emprendedor. Disfruto de la disciplina y la estrategia del judo y el ajedrez, y valoro el tiempo con mis seres queridos y las actividades al aire libre como el senderismo para recargar energías.',
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
            title: 'Educación',
            icon: 'book-outline',
            items: [
              {
                title: 'CampusLand',
                date: '01/2024',
                description:
                  'Desarrollo backend con un enfoque en la creación de APIs y manejo de bases de datos SQL y NoSQL. Complementado con conocimientos en frontend (HTML, CSS, JavaScript, Vue) y prácticas en DevOps para la automatización y despliegue de aplicaciones. Capacitado para desempeñarme en roles de Desarrollador Backend y Full Stack, con habilidades para construir soluciones completas y escalables.',
              },
              {
                title: 'Universidad Industrial de Santander (UIS)',
                date: '2016 — 2022',
                description:
                  'Economista especializado en la aplicación avanzada de técnicas econométricas para modelar, predecir y optimizar escenarios económicos complejos. Dominio de herramientas de análisis de datos como R, Python y Stata, integrando métodos estadísticos de vanguardia, machine learning y big data en la investigación económica. Capaz de transformar datos en insights estratégicos para la toma de decisiones en entornos dinámicos y competitivos, abarcando desde análisis de políticas públicas hasta consultoría financiera y estudios de mercado.',
              },
              {
                title: 'UNIMINUTO',
                date: '08/2021 — 12/2021',
                description:
                  'Excel y Power BI para análisis de datos y business intelligence. Capacitado en la creación de dashboards interactivos, modelado y almacenamiento eficiente de datos, y administración de bases de datos relacionales y no relacionales.',
              },
            ],
          },
          {
            title: 'Experiencia',
            icon: 'briefcase-outline',
            items: [
              {
                title: 'Analista de datos',
                date: '02/2022 — 04/2023',
                description:
                  'Participé en la optimización de recursos de edificios mediante la creación de modelos predictivos y herramientas de análisis con Python, SQL y Power BI. Automatizando informes, logré reducir en un 80% el tiempo de consulta de datos y monitorear el 100% de los pagos pendientes. Además, diseñé un sistema de consulta que mejoró la toma de decisiones administrativas, generando un ahorro del 30% en el presupuesto anual.',
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
            title: 'Las etapas iniciales al adentrarse en la Ciencia de Datos',
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
  }),

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
    },
  },
})
