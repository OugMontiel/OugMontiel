<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 articleTitle">Portfolio</h2>
    </header>

    <section class="projects">
      <!-- Filter List -->
      <!-- <ul class="filter-list has-scrollbar">
        <li class="filter-item" v-for="(filter, index) in filters" :key="index">
          <button
            :class="{ active: selectedFilter === filter }"
            @click="handleFilter(filter)"
            data-filter-btn
          >
            {{ filter }}
          </button>
        </li>
      </ul> -->

      <!-- Select Dropdown -->
      <!-- <div class="filter-select-box">
        <button class="filter-select" @click="toggleSelect" data-select>
          <div class="select-value" data-selecct-value>{{ selectedValue }}</div>
          <div class="select-icon">
            <ion-icon name="chevron-down"></ion-icon>
          </div>
        </button>

        <ul v-if="selectOpen" class="select-list">
          <li
            v-for="(filter, index) in filters"
            :key="index"
            class="select-item"
            @click="selectFilter(filter)"
            data-select-item
          >
            <button>{{ filter }}</button>
          </li>
        </ul>
      </div> -->

      <!-- Project List -->
      <ul class="project-list">
        <li
          v-for="(project, index) in filteredProjects"
          :key="index"
          class="project-item active"
          :data-category="project.category"
        >
          <a :href="project.link">
            <figure class="project-img">
              <div class="project-item-icon-box">
                <ion-icon name="eye-outline"></ion-icon>
              </div>
              <img :src="project.imgSrc" :alt="project.title" loading="lazy" />
            </figure>
            <h3 class="project-title">{{ project.title }}</h3>
            <p class="project-category">{{ project.category }}</p>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'PortfolioMyPortafolio',
  data() {
    return {
      filters: [
        'All',
        'Web design',
        'Web development',
        'Econometric Modeling',
        'Backend Developer',
        'Data Visualization',
        'Time Series',
        'Pipelines',
      ],
      selectedFilter: 'All',
      selectOpen: false,
      selectedValue: 'Select category',
      projects: [
        {
          title: 'Tecnicas de pronostico',
          category: 'Time Series',
          imgSrc: '../../public/imgProyectos/project-time-series-1.webp',
          link: 'https://github.com/OugMontiel/ModeloARIMA-Fase-2',
        },
        {
          title: 'Control and registration oof all teams',
          category: 'Backend Developer',
          imgSrc: '../../public/imgProyectos/project-backend-developer-1.webp',
          link: 'https://github.com/OugMontiel/projectTeamSoccer-Campus',
        },
        {
          title: 'Ingeneria de datos',
          category: 'Pipelines',
          imgSrc: '../../public/imgProyectos/project-pipelines-1.webp',
          link: 'https://github.com/OugMontiel/Pragma',
        },
        // ... Agrega más proyectos aquí
      ],
    }
  },
  computed: {
    filteredProjects() {
      if (this.selectedFilter === 'All') return this.projects
      return this.projects.filter(
        project => project.category === this.selectedFilter,
      )
    },
  },
  methods: {
    toggleSelect() {
      this.selectOpen = !this.selectOpen
    },
    handleFilter(filter) {
      this.selectedFilter = filter
      this.selectedValue = filter
      this.selectOpen = false // Cerrar el select después de seleccionar
    },
    selectFilter(filter) {
      this.handleFilter(filter)
    },
  },
}
</script>

<style>
.filter-list {
  display: none; /* Cambiar de none a flex o block */
  overflow-y: auto; /* Habilita el desplazamiento vertical */
}

.filter-select-box {
  position: relative;
  margin-bottom: 25px;
}

.filter-select {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 12px 16px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.filter-select.active .select-icon {
  transform: rotate(0.5turn);
}

.select-list {
  background: var(--eerie-black-2);
  position: absolute;
  top: calc(100% + 6px);
  width: 100%;
  padding: 6px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  z-index: 2;
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: 0.15s ease-in-out;
}

.filter-select.active + .select-list {
  opacity: 1;
  visibility: visible;
  pointer-events: all;
}

.select-item button {
  background: var(--eerie-black-2);
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  text-transform: capitalize;
  width: 100%;
  padding: 8px 10px;
  border-radius: 8px;
}

.select-item button:hover {
  --eerie-black-2: hsl(240, 2%, 20%);
}

.project-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 30px;
  margin-bottom: 10px;
}

.project-item {
  display: none;
}

.project-item.active {
  display: block;
  animation: scaleUp 0.25s ease forwards;
}

@keyframes scaleUp {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

.project-item > a {
  width: 100%;
}

.project-img {
  padding: 1em;
  position: relative;
  width: 100%;
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 15px;
  background: hsla(0, 0%, 0%, 0.25);
}

.project-img::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item > a:hover .project-img::before {
  background: hsla(0, 0%, 0%, 0.5);
}

.project-item-icon-box {
  --scale: 0.8;

  background: var(--jet);
  color: var(--orange-yellow-crayola);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(var(--scale));
  font-size: 20px;
  padding: 18px;
  border-radius: 12px;
  opacity: 0;
  z-index: 1;
  transition: var(--transition-1);
}

.project-item > a:hover .project-item-icon-box {
  --scale: 1;
  opacity: 1;
}

.project-item-icon-box ion-icon {
  --ionicon-stroke-width: 50px;
}

.project-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.project-item > a:hover img {
  transform: scale(1.1);
}

.project-title,
.project-category {
  margin-left: 10px;
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  text-transform: capitalize;
  line-height: 1.3;
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}
</style>
