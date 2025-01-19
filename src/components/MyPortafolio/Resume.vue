<template>
  <article class="resume" data-page="resume">
    <header>
      <h2 class="h2 articleTitle">Resume</h2>
    </header>

    <section
      class="timeline"
      v-for="(section, index) in resumeSections"
      :key="index"
    >
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon :name="section.icon"></ion-icon>
        </div>
        <h3 class="h3">{{ section.title }}</h3>
      </div>

      <ol class="timeline-list">
        <li
          class="timeline-item"
          v-for="(item, idx) in section.items"
          :key="idx"
        >
          <h4 class="h4 timeline-item-title">{{ item.title }}</h4>
          <span>{{ item.date }}</span>
          <p class="timeline-text">{{ item.description }}</p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>
      <ul class="skills-list content-card">
        <li class="skills-item" v-for="(skill, index) in skills" :key="index">
          <a :href="skill.link" target="_blank" rel="noreferrer">
            <img :src="skill.icon" :alt="skill.name" width="36" height="36" />
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ResumeMyPortafolio',
  data() {
    return {
      resumeSections: [
        {
          title: 'Education',
          icon: 'book-outline',
          items: [
            {
              title: 'CampusLand',
              date: '01/2024',
              description:
                'Desarrollo backend con un enfoque en la creación de APIs y manejo de bases de datos SQL y NoSQL. Complementado con conocimientos en frontend (HTML, CSS, JavaScript, vue) y prácticas en DevOps para la automatización y despliegue de aplicaciones. Capacitado para desempeñarme en roles de Desarrollador Backend y Full Stack, con habilidades para construir soluciones completas y escalables.',
            },
            {
              title: 'Universidad Industrial de Santander (UIS)',
              date: '2016 — 2022',
              description:
                'Economista especializado en la aplicación avanzada de técnicas econométricas para modelar, predecir y optimizar escenarios económicos complejos. Dominio de herramientas de análisis de datos como R, Python, y Stata, integrando métodos estadísticos de vanguardia, machine learning, y big data en la investigación económica. Capaz de transformar datos en insights estratégicos para la toma de decisiones en entornos dinámicos y competitivos, abarcando desde análisis de políticas públicas hasta consultoría financiera y estudios de mercado.',
            },
            {
              title: 'UNIMINUTO',
              date: '08/2021 — 12/2021',
              description:
                'Excel y Power BI para análisis de datos y business intelligence. Capacitado en la creación de dashboards interactivos, modelado y almacenamiento eficiente de datos, y administración de bases de datos relacionales y no relacionales',
            },
          ],
        },
        {
          title: 'Experience',
          icon: 'briefcase-outline',
          items: [
            {
              title: 'Analista de datos',
              date: '02/2022 — 04/2023',
              description:
                'Participe en la optimización de recursos de edificios mediante la  creación de modelos predictivos y herramientas de análisis con  Python, SQL y Power BI. Automatizando informes, logré reducir en un  80% el tiempo de consulta de datos y monitorear el 100% de los pagos  pendientes. Además, diseñé un sistema de consulta que mejoró la toma  de decisiones administrativas, generando un ahorro del 30% en el  presupuesto anual.',
            },
          ],
        },
      ],
      skills: [
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
      ],
    }
  },
}
</script>

<style>
.articleTitle {
  margin-bottom: 30px;
}

/**
 * education and experience 
 */

.timeline {
  margin-bottom: 30px;
}

.timeline .title-wrapper {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 25px;
}

.timeline-list {
  font-size: var(--fs-6);
  margin-left: 45px;
}

.timeline-item {
  position: relative;
}

.timeline-item:not(:last-child) {
  margin-bottom: 20px;
}

.timeline-item-title {
  font-size: var(--fs-6);
  line-height: 1.3;
  margin-bottom: 7px;
}

.timeline-list span {
  color: var(--vegas-gold);
  font-weight: var(--fw-400);
  line-height: 1.6;
}

.timeline-item:not(:last-child)::before {
  content: '';
  position: absolute;
  top: -25px;
  left: -30px;
  width: 1px;
  height: calc(100% + 50px);
  background: var(--jet);
}

.timeline-item::after {
  content: '';
  position: absolute;
  top: 5px;
  left: -33px;
  height: 6px;
  width: 6px;
  background: var(--text-gradient-yellow);
  border-radius: 50%;
  box-shadow: 0 0 0 4px var(--jet);
}

.timeline-text {
  color: var(--light-gray);
  font-weight: var(--fw-300);
  line-height: 1.6;
}

/**
 * skills 
 */

.skills-title {
  margin-bottom: 20px;
}

.skills-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  padding: 20px;
}

.skills-item:not(:last-child) {
  margin-bottom: 15px;
}

.skill .title-wrapper {
  display: flex;
  align-items: center;
  gap: 5px;
  margin-bottom: 8px;
}

.skill .title-wrapper data {
  color: var(--light-gray);
  font-size: var(--fs-7);
  font-weight: var(--fw-300);
}

.skill-progress-bg {
  background: var(--jet);
  width: 100%;
  height: 8px;
  border-radius: 10px;
}

.skill-progress-fill {
  background: var(--text-gradient-yellow);
  height: 100%;
  border-radius: inherit;
}
</style>
