<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img
          src="./assets/images/my-avatar.png"
          alt="Diego Montiel"
          width="80"
        />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Diego Montiel">Diego Montiel</h1>
        <p class="title">Data Science</p>
        <p class="title">Backend Developer</p>
        <p class="title">Economist</p>
      </div>

      <button class="info_more-btn" data-sidebar-btn>
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Email</p>
            <a href="mailto:montielflorezdiego@gmail.com" class="contact-link">
              MontielFlorezDiego@gmail.com
            </a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Phone</p>
            <a href="tel:+573186377582" class="contact-link">+57 318 6377582</a>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Birthday</p>
            <time datetime="1998-08-12">Aug 12, 1998</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>Bucaramanga, Santander, Colombia</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a
            href="https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science"
            class="social-link"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="https://github.com/OugMontiel" class="social-link">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="https://www.kaggle.com/ougmontiel" class="social-link">
            <img
              src="https://www.kaggle.com/static/images/favicon.ico"
              width="18"
              height="18"
              alt="Kaggle"
              class="kaggle-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
// Función de utilidad para alternar clases
const elementToggleFunc = elem => {
  elem.classList.toggle('active')
}

// Inicialización de la funcionalidad del sidebar
export default {
  name: 'SidebarMyPortafolio',
  mounted() {
    // Seleccionamos los elementos del DOM
    const sidebar = this.$el.querySelector('[data-sidebar]')
    const sidebarBtn = this.$el.querySelector('[data-sidebar-btn]')

    // Agregamos el evento de click para alternar el sidebar
    sidebarBtn.addEventListener('click', () => {
      elementToggleFunc(sidebar)
    })
  },
}
</script>

<style>
.sidebar {
  margin-bottom: 15px;
  height: 95vh;
  overflow: hidden;
  transition: var(--transition-2);
}

.sidebar.active {
  max-height: 405px;
}

.sidebar-info {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.avatar-box {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
}

.info-content .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

.info-content .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  font-weight: var(--fw-300);
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
  margin: 2px auto;
}

.info_more-btn {
  position: absolute;
  top: -15px;
  right: -15px;
  border-radius: 0 15px;
  font-size: 13px;
  color: var(--orange-yellow-crayola);
  background: var(--border-gradient-onyx);
  padding: 10px;
  box-shadow: var(--shadow-2);
  transition: var(--transition-1);
  z-index: 1;
}

.info_more-btn::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--bg-gradient-jet);
  transition: var(--transition-1);
  z-index: -1;
}

.info_more-btn:hover,
.info_more-btn:focus {
  background: var(--bg-gradient-yellow-1);
}

.info_more-btn:hover::before,
.info_more-btn:focus::before {
  background: var(--bg-gradient-yellow-2);
}

.info_more-btn span {
  display: none;
}

.sidebar-info_more {
  opacity: 0;
  visibility: hidden;
  transition: var(--transition-2);
}

.sidebar.active .sidebar-info_more {
  opacity: 1;
  visibility: visible;
}

.contacts-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

.contact-item {
  min-width: 100%;
  display: flex;
  align-items: center;
  gap: 16px;
}

.contact-info {
  max-width: calc(100% - 46px);
  width: calc(100% - 46px);
}

.contact-title {
  color: var(--light-gray-70);
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}

.contact-info :is(.contact-link, time, address) {
  color: var(--white-2);
  font-size: var(--fs-7);
}

.contact-info address {
  font-style: normal;
}

.social-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-bottom: 4px;
  padding-left: 7px;
}

.social-item .social-link {
  color: var(--light-gray-70);
  font-size: 18px;
}

.social-item .social-link:hover {
  color: var(--light-gray);
}

.kaggle-icon {
  filter: grayscale(100%) brightness(0) invert(1); /* Blanco */
  width: 18px;
  height: 18px;
  transition: filter 0.3s ease;
}

.kaggle-icon:hover {
  filter: grayscale(100%) brightness(0); /* Negro al hacer hover */
}
</style>
