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
