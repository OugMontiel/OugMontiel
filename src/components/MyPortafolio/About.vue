<template>
  <article class="about" data-page="about">
    <header>
      <h2 class="articleTitle">About me</h2>
    </header>

    <section class="aboutText">
      <p>
        Focused on transforming business problems and needs into data-driven
        products and solutions using econometric models, API development, and
        pipeline creation.
      </p>

      <p>
        I’m also a judoka, chess player, and entrepreneur. I enjoy the
        discipline and strategy of judo and chess, and I value time with loved
        ones and outdoor activities like hiking to recharge.
      </p>
    </section>

    <!-- Service Section -->
    <section class="service">
      <h3 class="service-title">What I'm doing</h3>

      <ul class="service-list">
        <li
          v-for="(service, index) in services"
          :key="index"
          class="service-item"
        >
          <div class="service-icon-box">
            <img
              :src="`${imageBaseService}${service.icon}`"
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

    <section class="clients">
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
    </section>
  </article>
</template>

<script>
export default {
  name: 'AboutMyPortafolio',

  data() {
    return {
      // Ruta base para las imágenes
      imageBaseService: './assets/images/',
      // Lista de servicios
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
    }
  },

  mounted() {
    this.initTestimonialsModal()
  },

  methods: {
    // Toggle class for elements
    elementToggleFunc(elem) {
      elem.classList.toggle('active')
    },

    // Function to handle modal toggling
    testimonialsModalFunc() {
      const modalContainer = document.querySelector('[data-modal-container]')
      const overlay = document.querySelector('[data-overlay]')
      this.elementToggleFunc(modalContainer)
      this.elementToggleFunc(overlay)
    },

    // Initialize event listeners for testimonial modals
    initTestimonialsModal() {
      const testimonialsItems = document.querySelectorAll(
        '[data-testimonials-item]',
      )
      const modalImg = document.querySelector('[data-modal-img]')
      const modalTitle = document.querySelector('[data-modal-title]')
      const modalText = document.querySelector('[data-modal-text]')
      const modalCloseBtn = document.querySelector('[data-modal-close-btn]')
      const overlay = document.querySelector('[data-overlay]')

      // Event listeners for opening modals
      testimonialsItems.forEach(item => {
        item.addEventListener('click', () => {
          modalImg.src = item.querySelector('[data-testimonials-avatar]').src
          modalImg.alt = item.querySelector('[data-testimonials-avatar]').alt
          modalTitle.innerHTML = item.querySelector(
            '[data-testimonials-title]',
          ).innerHTML
          modalText.innerHTML = item.querySelector(
            '[data-testimonials-text]',
          ).innerHTML
          this.testimonialsModalFunc()
        })
      })

      // Event listeners for closing the modal
      modalCloseBtn.addEventListener(
        'click',
        this.testimonialsModalFunc.bind(this),
      )
      overlay.addEventListener('click', this.testimonialsModalFunc.bind(this))
    },
  },
}
</script>

<style>
.aboutText {
  color: var(--light-gray);
  font-size: var(--fs-5);
  font-weight: var(--fw-300);
  line-height: 1.6;
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
  grid-template-columns: 1fr;
  gap: 20px;
}

.service-item {
  position: relative;
  background: var(--border-gradient-onyx);
  padding: 20px;
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
  font-size: var(--fs-6);
  font-weight: var(--fw-3);
  line-height: 1.6;
}

/**
 * #testimonials 
 */

.testimonials {
  margin-bottom: 30px;
}

.testimonials-title {
  margin-bottom: 20px;
}

.testimonials-list {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  margin: 0 -15px;
  padding: 25px 15px;
  padding-bottom: 35px;
  overflow-x: auto;
  scroll-behavior: smooth;
  overscroll-behavior-inline: contain;
  scroll-snap-type: inline mandatory;
}

.testimonials-item {
  min-width: 100%;
  scroll-snap-align: center;
}

.testimonials-avatar-box {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(15px, -25px);
  background: var(--bg-gradient-onyx);
  border-radius: 14px;
  box-shadow: var(--shadow-1);
}

.testimonials-item-title {
  margin-bottom: 7px;
}

.testimonials-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
  display: -webkit-box;
  line-clamp: 4;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/**
 * #testimonials-modal
 */

.modal-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  overscroll-behavior: contain;
  z-index: 20;
  pointer-events: none;
  visibility: hidden;
}

.modal-container::-webkit-scrollbar {
  display: none;
}

.modal-container.active {
  pointer-events: all;
  visibility: visible;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: hsl(0, 0%, 5%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  z-index: 1;
  transition: var(--transition-1);
}

.overlay.active {
  opacity: 0.8;
  visibility: visible;
  pointer-events: all;
}

.testimonials-modal {
  background: var(--eerie-black-2);
  position: relative;
  padding: 15px;
  margin: 15px 12px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  box-shadow: var(--shadow-5);
  transform: scale(1.2);
  opacity: 0;
  transition: var(--transition-1);
  z-index: 2;
}

.modal-container.active .testimonials-modal {
  transform: scale(1);
  opacity: 1;
}

.modal-close-btn {
  position: absolute;
  top: 15px;
  right: 15px;
  background: var(--onyx);
  border-radius: 8px;
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white-2);
  font-size: 18px;
  opacity: 0.7;
}

.modal-close-btn:hover,
.modal-close-btn:focus {
  opacity: 1;
}

.modal-close-btn ion-icon {
  --ionicon-stroke-width: 50px;
}

.modal-avatar-box {
  background: var(--bg-gradient-onyx);
  width: max-content;
  border-radius: 14px;
  margin-bottom: 15px;
  box-shadow: var(--shadow-2);
}

.modal-img-wrapper > img {
  display: none;
}

.modal-title {
  margin-bottom: 4px;
}

.modal-content time {
  font-size: var(--fs-6);
  color: var(--light-gray-70);
  font-weight: var(--fw-300);
  margin-bottom: 10px;
}

.modal-content p {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
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
  min-width: 50%;
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
