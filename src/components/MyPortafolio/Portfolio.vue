<template>
  <article class="portfolio" data-page="portfolio">
    <header>
      <h2 class="h2 articleTitle">{{ t('portfolio.title') }}</h2>
    </header>

    <section class="projects">
      <!-- Filter List -->
      <ul class="filter-list has-scrollbar">
        <li
          class="filter-item"
          v-for="(category, index) in categories"
          :key="index"
        >
          <button
            type="button"
            :class="{
              active:
                activeFilter === category ||
                ((activeFilter === 'Todos' || activeFilter === 'All') &&
                  (category === 'Todos' || category === 'All')),
            }"
            @click="setFilter(category)"
            data-filter-btn
          >
            {{ category }}
          </button>
        </li>
      </ul>

      <!-- Project List -->
      <ul class="project-list">
        <li
          v-for="(project, index) in displayedProjects"
          :key="index"
          class="project-item active"
          :data-category="
            Array.isArray(project.categories)
              ? project.categories.join(', ')
              : project.category
          "
        >
          <a
            :href="project.link"
            :target="project.link !== '#' ? '_blank' : undefined"
            :rel="project.link !== '#' ? 'noopener noreferrer' : undefined"
            @click="project.link === '#' ? $event.preventDefault() : null"
          >
            <figure class="project-img">
              <div v-if="project.link !== '#'" class="project-item-icon-box">
                <ion-icon name="eye-outline" aria-hidden="true"></ion-icon>
              </div>
              <img
                :src="getPath(project.logo || project.imgSrc)"
                :alt="project.title"
                :class="{ 'is-logo': isLogo(project) }"
                loading="lazy"
              />
              <div class="project-overlay" v-if="project.link === '#'">
                <p>{{ project.description }}</p>
              </div>
            </figure>

            <h3 class="project-title">{{ project.title }}</h3>

            <div
              v-if="project.level || project.date"
              class="project-meta"
            >
              <span v-if="project.level" class="project-badge project-badge--level">
                {{ project.level }}
              </span>
              <span v-if="project.date" class="project-badge project-badge--date">
                {{ project.date }}
              </span>
            </div>

            <p class="project-category">
              {{
                Array.isArray(project.categories)
                  ? project.categories.join(' · ')
                  : project.category
              }}
            </p>
          </a>
        </li>
      </ul>

      <button
        v-if="filteredProjects.length > 5"
        type="button"
        class="portfolio-more-btn"
        @click="showAllProjects = !showAllProjects"
      >
        <ion-icon
          :name="showAllProjects ? 'chevron-up' : 'chevron-down'"
          aria-hidden="true"
        ></ion-icon>
        <span>{{ showAllProjects ? 'Ver menos' : 'Ver más' }}</span>
      </button>
    </section>
  </article>
</template>

<script>
import { ref, computed, watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

const getPath = path => {
  if (!path) return ''
  if (/^https?:\/\//i.test(path)) return path
  return import.meta.env.BASE_URL + path.replace(/^\//, '')
}

const isLogo = project => {
  const src = project.logo || project.imgSrc || ''
  return (
    Boolean(project.logo) ||
    Boolean(project.isLogo) ||
    src.toLowerCase().endsWith('.svg') ||
    /^https?:\/\//i.test(src)
  )
}

export default {
  name: 'PortfolioMyPortafolio',
  setup() {
    const i18nStore = useI18nStore()
    const { currentLanguage, t } = storeToRefs(i18nStore)

    const activeFilter = ref(currentLanguage.value === 'es' ? 'Todos' : 'All')
    const showAllProjects = ref(false)

    const categories = computed(() => {
      const configuredButtons = t.value('portfolio.filterButtons')
      if (Array.isArray(configuredButtons) && configuredButtons.length > 0) {
        return configuredButtons
      }
      const projects = t.value('portfolio.projects') || []
      const allLabel = currentLanguage.value === 'es' ? 'Todos' : 'All'
      const uniqueCategories = [
        ...new Set(
          projects
            .flatMap(project =>
              Array.isArray(project.categories)
                ? project.categories
                : [project.category],
            )
            .filter(Boolean),
        ),
      ]
      return [allLabel, ...uniqueCategories]
    })

    const filteredProjects = computed(() => {
      const projects = t.value('portfolio.projects') || []
      if (activeFilter.value === 'Todos' || activeFilter.value === 'All') {
        return projects
      }
      return projects.filter(project =>
        Array.isArray(project.categories)
          ? project.categories.includes(activeFilter.value)
          : project.category === activeFilter.value,
      )
    })

    const displayedProjects = computed(() => {
      if (!showAllProjects.value) {
        return filteredProjects.value.slice(0, 5)
      }
      return filteredProjects.value
    })

    const setFilter = category => {
      activeFilter.value = category
    }

    watch(currentLanguage, newLang => {
      activeFilter.value = newLang === 'es' ? 'Todos' : 'All'
    })

    return {
      t,
      activeFilter,
      showAllProjects,
      categories,
      filteredProjects,
      displayedProjects,
      setFilter,
      getPath,
      isLogo,
    }
  },
}
</script>

<style scoped>
.filter-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 25px;
  margin-bottom: 30px;
  padding-left: 5px;
}

.filter-item button {
  color: var(--light-gray);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  transition: color var(--transition-1);
}

.filter-item button:hover {
  color: var(--light-gray-70);
}

.filter-item button.active {
  color: var(--orange-yellow-crayola);
  font-weight: var(--fw-500);
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
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
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

.project-img img.is-logo {
  object-fit: contain;
  padding: 40px;
  background: var(--eerie-black-1);
}

.project-item > a:hover img {
  transform: scale(1.1);
}

.project-title,
.project-meta,
.project-category {
  margin-left: 10px;
}

.project-title {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  line-height: 1.4;
  margin-bottom: 6px;
}

.project-meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 6px;
  margin-bottom: 6px;
}

.project-badge {
  display: inline-flex;
  align-items: center;
  font-size: var(--fs-8);
  font-weight: var(--fw-400);
  padding: 2px 10px;
  border-radius: 8px;
  line-height: 1.5;
  border: 1px solid var(--jet);
}

.project-badge--level {
  background: var(--onyx);
  color: var(--light-gray);
}

.project-badge--date {
  background: hsla(45, 100%, 72%, 0.08);
  color: var(--vegas-gold);
  border-color: hsla(45, 100%, 72%, 0.25);
}

.project-category {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-400);
}

.portfolio-more-btn {
  position: relative;
  width: 100%;
  margin-top: 25px;
  padding: 12px 20px;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 14px;
  font-size: var(--fs-6);
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);
}

.portfolio-more-btn::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}

.portfolio-more-btn ion-icon {
  font-size: 16px;
}

.portfolio-more-btn:hover {
  background: var(--bg-gradient-yellow-1);
}

.portfolio-more-btn:hover::before {
  background: var(--bg-gradient-yellow-2);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(30, 30, 32, 0.9);
  backdrop-filter: blur(4px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
  text-align: center;
  color: var(--light-gray);
  font-size: var(--fs-6);
  line-height: 1.5;
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.project-item:hover .project-overlay {
  opacity: 1;
}
</style>
