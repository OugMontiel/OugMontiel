<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 article-title">Portfolio</h2>
    </header>

    <section class="projects">
      <!-- Filter List -->
      <ul class="filter-list has-scrollbar">
        <li class="filter-item" v-for="(filter, index) in filters" :key="index">
          <button
            :class="{ active: selectedFilter === filter }"
            @click="handleFilter(filter)"
            data-filter-btn
          >
            {{ filter }}
          </button>
        </li>
      </ul>

      <!-- Select Dropdown -->
      <div class="filter-select-box">
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
      </div>

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
          imgSrc: './assets/images/project-time-series-1.webp',
          link: 'https://github.com/OugMontiel/ModeloARIMA-Fase-2',
        },
        {
          title: 'Control and registration oof all teams',
          category: 'Backend Developer',
          imgSrc: './assets/images/project-backend-developer-1.webp',
          link: 'https://github.com/OugMontiel/projectTeamSoccer-Campus',
        },
        {
          title: 'Ingeneria de datos',
          category: 'Pipelines',
          imgSrc: './assets/images/project-pipelines-1.webp',
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
