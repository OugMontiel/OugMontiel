<template>
  <aside>
    <div class="sidebarInfo">
      <figure class="siderAvatarBox">
        <img src="/my-avatar.png" alt="Diego Montiel" />
      </figure>

      <div class="siderInfoRoles">
        <h1 class="name" title="Diego Montiel">Diego Alejandro Montiel FLorez</h1>
        <div class="rolesContainer">
          <p class="title">Data Science</p>
          <p class="title">Backend Developer</p>
          <p class="title">Economist</p>
        </div>
      </div>
    </div>

    <div class="sidebarMoreInfo">
      <div class="separator"></div>

      <ul class="sidebarContacts">
        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">Email</p>

            <a
              href="mailto:montielflorezdiego@gmail.com"
              class="sidebarContactLink"
              >MontielFlorezDiego@gmail.com</a
            >
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">Phone</p>

            <a href="tel:+573186377582" class="sidebarContactLink"
              >+57 318 6377582</a
            >
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">Birthday</p>

            <time datetime="1998-08-12" class="sidebarContactLink"
              >Aug 12</time
            >
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">Location</p>

            <address class="sidebarContactLink">
              Bucaramanga, Santander, Colombia
            </address>
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
            <ion-icon
              name="logo-linkedin"
              class="sidebarlogoBlackAndWhite"
            ></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a href="https://github.com/OugMontiel" class="sidebarSocialLink">
            <ion-icon
              name="logo-github"
              class="sidebarlogoBlackAndWhite"
            ></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a href="https://www.kaggle.com/ougmontiel" class="sidebarSocialLink">
            <img
              src="https://www.kaggle.com/static/images/favicon.ico"
              alt="Kaggle"
              class="sidebarlogoBlackAndWhite"
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
/* parte Superior Foto, Nombre y titulos */
.sidebarInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  overflow: cover;
}

.siderAvatarBox {
  background: var(--bg-gradient-onyx);
  border-radius: 1rem;
  overflow: cover;
}
.siderAvatarBox img {
  width: 100%;
  overflow: cover;
}

.siderInfoRoles {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.siderInfoRoles .name {
  color: var(--white-2);
  font-size: var(--fs-1);
  font-weight: var(--fw-500);
  letter-spacing: -0.25px;
  margin-bottom: 10px;
}

.rolesContainer {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
.siderInfoRoles .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  width: max-content;
  padding: 1em;
  border-radius: 1em;
}

/* parte intermedia, info de contacto  */
.sidebarContacts {
  display: flex;
  flex-direction: column;
  color: var(--light-gray-70);
}

.sidebarContactItem {
  display: flex;
  gap: 1em;
  height: 4em;
}

.sidebarContactIcon {
  width: 2em;
  height: 2em;
  border-radius: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
}
.sidebarContactLink {
  color: var(--white-1);
}

/* parte final, Link de paguinas donde me encuentras  */
.sidebarSocial {
  display: flex;
  justify-content: center;
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

.sidebarlogoBlackAndWhite {
  filter: grayscale(100%) brightness(0) invert(1);
  /* Blanco */
  width: 18px;
  height: 18px;
  transition: filter 0.3s ease;
}

.sidebarlogoBlackAndWhite:hover {
  filter: grayscale(100%) brightness(0);
  /* Negro al hacer hover */
}
</style>
