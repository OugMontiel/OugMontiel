<template>
  <aside class="sidebar" data-sidebar>
    <div class="sidebarInfo">
      <figure class="siderAvatarBox">
        <img src="/my-avatar.png" alt="Diego Montiel" width="80" />
      </figure>

      <div class="siderInfoRoles">
        <h1 class="name" title="Diego Montiel">Diego Montiel</h1>
        <p class="title">Data Science</p>
        <p class="title">Backend Developer</p>
        <p class="title">Economist</p>
      </div>
    </div>

    <div class="sidebarMoreInfo">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:montielflorezdiego@gmail.com" class="contact-link"
              >MontielFlorezDiego@gmail.com</a
            >
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

      <ul class="sidebarSocial">
        <li class="sidebarSocialItem">
          <a
            href="https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science"
            class="sidebarSocialLink"
          >
            <ion-icon name="logo-linkedin"></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a href="https://github.com/OugMontiel" class="sidebarSocialLink">
            <ion-icon name="logo-github"></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a 
            href="https://www.kaggle.com/ougmontiel" 
            class="sidebarSocialLink"
          >
            <img
              src="https://www.kaggle.com/static/images/favicon.ico"
              width="18"
              height="18"
              alt="Kaggle"
              class="logo-kaggle"
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

.sidebarInfo {
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
}

.siderAvatarBox {
  background: var(--bg-gradient-onyx);
  border-radius: 20px;
}

.siderInfoRoles .name {
  color: var(--white-2);
  font-size: var(--fs-3);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

.siderInfoRoles .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-8);
  font-weight: var(--fw-300);
  width: max-content;
  padding: 3px 12px;
  border-radius: 8px;
  margin: 2px auto;
}

.sidebarSocial {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  padding-bottom: 4px;
  padding-left: 7px;
}

.sidebarSocialItem .sidebarSocialLink {
  color: var(--light-gray-70);
  font-size: 18px;
}

.sidebarSocialItem .sidebarSocialLink:hover {
  color: var(--light-gray);
}

.logo-kaggle {
  filter: grayscale(100%) brightness(0) invert(1);
  /* Blanco */
  width: 18px;
  height: 18px;
  transition: filter 0.3s ease;
}

.logo-kaggle:hover {
  filter: grayscale(100%) brightness(0);
  /* Negro al hacer hover */
}
</style>
