<template>
  <article class="resume" data-page="resume">
    <header>
      <h2 class="h2 articleTitle">Resume</h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Education</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">CampusLand</h4>

          <span>01/2024</span>

          <p class="timeline-text">
            Desarrollo backend con un enfoque en la creación de APIs y manejo de
            bases de datos SQL y NoSQL. Complementado con conocimientos en
            frontend (HTML, CSS, JavaScript, vue) y prácticas en DevOps para la
            automatización y despliegue de aplicaciones. Capacitado para
            desempeñarme en roles de Desarrollador Backend y Full Stack, con
            habilidades para construir soluciones completas y escalables.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Universidad Industrial de Santanderr (UIS)
          </h4>

          <span>2016 — 2022</span>

          <p class="timeline-text">
            Economista especializado en la aplicación avanzada de técnicas
            econométricas para modelar, predecir y optimizar escenarios
            económicos complejos. Dominio de herramientas de análisis de datos
            como R, Python, y Stata, integrando métodos estadísticos de
            vanguardia, machine learning, y big data en la investigación
            económica. Capaz de transformar datos en insights estratégicos para
            la toma de decisiones en entornos dinámicos y competitivos,
            abarcando desde análisis de políticas públicas hasta consultoría
            financiera y estudios de mercado.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">UNIMINUTO</h4>

          <span>08/2021 — 12/2021</span>

          <p class="timeline-text">
            Excel y Power BI para análisis de datos y business intelligence.
            Capacitado en la creación de dashboards interactivos, modelado y
            almacenamiento eficiente de datos, y administración de bases de
            datos relacionales y no relacionales
          </p>
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"></ion-icon>
        </div>

        <h3 class="h3">Experience</h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">Analista de datos</h4>

          <span>02/2022 — 04/2023</span>

          <p class="timeline-text">
            Participe en la optimización de recursos de edificios mediante la
            creación de modelos predictivos y herramientas de análisis con
            Python, SQL y Power BI. Automatizando informes, logré reducir en un
            80% el tiempo de consulta de datos y monitorear el 100% de los pagos
            pendientes. Además, diseñé un sistema de consulta que mejoró la toma
            de decisiones administrativas, generando un ahorro del 30% en el
            presupuesto anual.
          </p>
        </li>
      </ol>
    </section>

    <section class="skill">
      <h3 class="h3 skills-title">My skills</h3>

      <ul class="skills-list content-card">
        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Python</h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">HTML, CSS y JavaScript</h5>
            <data value="85">85%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 85%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Node.js</h5>
            <data value="90">90%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">MySQL</h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">MongoDB</h5>
            <data value="70">70%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 70%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Scrum</h5>
            <data value="65">65%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 65%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">R</h5>
            <data value="80">80%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 80%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Excel</h5>
            <data value="95">95%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 95%"></div>
          </div>
        </li>

        <li class="skills-item">
          <div class="title-wrapper">
            <h5 class="h5">Git</h5>
            <data value="90">90%</data>
          </div>
          <div class="skill-progress-bg">
            <div class="skill-progress-fill" style="width: 90%"></div>
          </div>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'ResumeMyPortafolio',
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
