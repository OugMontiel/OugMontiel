<template>
  <article class="about" data-page="about">
    <header>
      <h2 class="articleTitle">{{ t('about.title') }}</h2>
    </header>

    <section class="aboutText">
      <p>
        {{ t('about.bio') }}
      </p>

      <p>
        {{ t('about.bio2') }}
      </p>
    </section>

    <!-- Service Section -->

    <section class="service">
      <h3 class="service-title">{{ t('about.servicesTitle') }}</h3>

      <ul class="service-list">
        <li
          v-for="(service, index) in t('about.services')"
          :key="index"
          class="service-item"
        >
          <div class="service-icon-box">
            <img
              :src="getPath(`${imageBaseService}${service.icon}`)"
              :alt="service.alt"
              width="40"
            />
          </div>
          <div class="service-content-box">
            <h4 class="service-item-title">{{ service.title }}</h4>
            <p class="service-item-text">{{ service.description }}</p>
          </div>
        </li>
      </ul>
    </section>

    <!--- clients-->

    <!-- <section class="clients">
      <h3 class="h3 clients-title">Clients</h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-1-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-2-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-3-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-4-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-5-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="./assets/images/logo-6-color.png" alt="client logo" />
          </a>
        </li>
      </ul>
    </section> -->
  </article>
</template>

<script>
import { mapState } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

const getPath = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

export default {
  name: 'AboutMyPortafolio',

  data() {
    return {
      // Ruta base para las imágenes
      imageBaseService: '/iconPortafolio/',
    }
  },

  computed: {
    ...mapState(useI18nStore, ['t']),
  },

  methods: {
    getPath,
  },
}
</script>

<style>
.aboutText {
  color: var(--light-gray);
  font-size: var(--fs-4);
  font-weight: var(--fw-400);
  line-height: 1.7;
}

.aboutText p {
  margin-bottom: 15px;
}

/**
 * #service 
 */

.service {
  margin-bottom: 35px;
}

.service-title {
  margin-bottom: 20px;
}

.service-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 20px;
}

.service-item {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 24px;
  border-radius: 14px;
  box-shadow: var(--shadow-2);
  z-index: 1;
}

.service-item::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
}

.service-icon-box {
  margin-bottom: 10px;
}

.service-icon-box img {
  margin: auto;
}

.service-content-box {
  text-align: center;
}

.service-item-title {
  margin-bottom: 7px;
}

.service-item-text {
  color: var(--light-gray);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  line-height: 1.65;
}

/**
 * #clients 
 */

.clients {
  margin-bottom: 15px;
}

.clients-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin: 0 -15px;
  padding: 25px;
  padding-bottom: 25px;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
  scroll-padding-inline: 25px;
}

.clients-item {
  /* min-width: 50%; */
  scroll-snap-align: start;
}

.clients-item img {
  width: 100%;
  filter: grayscale(1);
  transition: var(--transition-1);
}

.clients-item img:hover {
  filter: grayscale(0);
}
</style>
