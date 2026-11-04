<template>
  <aside>
    <div class="sidebarInfo">
      <figure class="siderAvatarBox">
        <img :src="getPath('/my-avatar.png')" alt="Diego Montiel" />
      </figure>

      <div class="siderInfoRoles">
        <h1 class="name" title="Diego Montiel">
          Diego Alejandro Montiel Flórez
        </h1>
        <ul class="rolesContainer">
          <li
            v-for="(role, index) in t('sidebar.roles')"
            :key="index"
            class="title"
          >
            {{ role }}
          </li>
        </ul>
      </div>
    </div>

    <div class="sidebarMoreInfo">
      <div class="separator"></div>

      <ul class="sidebarContacts">
        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">{{ t('sidebar.email') }}</p>

            <a
              href="mailto:montielflorezdiego@gmail.com"
              class="sidebarContactLink"
              >MontielFlorezDiego@gmail.com</a
            >
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon
              name="phone-portrait-outline"
              aria-hidden="true"
            ></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">{{ t('sidebar.phone') }}</p>

            <a href="tel:+573186377582" class="sidebarContactLink"
              >+57 318 6377582</a
            >
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="calendar-outline" aria-hidden="true"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">{{ t('sidebar.birthday') }}</p>

            <time datetime="1998-08-12" class="sidebarContactLink">{{
              t('sidebar.birthdayDate')
            }}</time>
          </div>
        </li>

        <li class="sidebarContactItem">
          <div class="sidebarContactIcon">
            <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
          </div>

          <div>
            <p class="sidebarContactTitle">{{ t('sidebar.location') }}</p>

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
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a mi perfil de LinkedIn"
          >
            <ion-icon
              name="logo-linkedin"
              class="sidebarlogoBlackAndWhite"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a
            href="https://github.com/OugMontiel"
            class="sidebarSocialLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a mi perfil de GitHub"
          >
            <ion-icon
              name="logo-github"
              class="sidebarlogoBlackAndWhite"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </li>

        <li class="sidebarSocialItem">
          <a
            href="https://www.kaggle.com/ougmontiel"
            class="sidebarSocialLink"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a mi perfil de Kaggle"
          >
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
import { mapState } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

const getPath = (path) => import.meta.env.BASE_URL + path.replace(/^\//, '')

// Inicialización de la funcionalidad del sidebar
export default {
  name: 'SidebarMyPortafolio',
  computed: {
    ...mapState(useI18nStore, ['t']),
  },
  methods: {
    getPath,
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
  overflow: hidden;
}

.siderAvatarBox {
  background: var(--bg-gradient-onyx);
  border-radius: 1rem;
  overflow: hidden;
}
.siderAvatarBox img {
  width: 100%;
  object-fit: cover;
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
  font-size: var(--fs-2);
  font-weight: var(--fw-600);
  letter-spacing: -0.25px;
  line-height: 1.3;
  margin-bottom: 12px;
}

.rolesContainer {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.siderInfoRoles .title {
  color: var(--white-1);
  background: var(--onyx);
  font-size: var(--fs-7);
  font-weight: var(--fw-400);
  width: max-content;
  padding: 0.4rem 0.85rem;
  border-radius: 0.6rem;
}

/* parte intermedia, info de contacto  */
.sidebarContacts {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: var(--light-gray-70);
}

.sidebarContactItem {
  display: flex;
  align-items: center;
  gap: 1rem;
  min-height: 3.5rem;
}

.sidebarContactIcon {
  width: 2.25rem;
  height: 2.25rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
}
.sidebarContactTitle {
  font-size: var(--fs-8);
  text-transform: uppercase;
  margin-bottom: 2px;
}
.sidebarContactLink {
  color: var(--white-1);
  font-size: var(--fs-6);
  word-break: break-word;
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
  transition: color var(--transition-1);
}

.sidebarSocialItem .sidebarSocialLink:hover {
  color: var(--orange-yellow-crayola);
}

.sidebarlogoBlackAndWhite {
  width: 20px;
  height: 20px;
  color: var(--white-1);
  transition: color 0.3s ease, filter 0.3s ease, transform 0.3s ease;
}

img.sidebarlogoBlackAndWhite {
  filter: grayscale(100%) brightness(0) invert(1);
}

.sidebarlogoBlackAndWhite:hover {
  color: var(--orange-yellow-crayola);
  transform: translateY(-2px);
}

img.sidebarlogoBlackAndWhite:hover {
  filter: brightness(0) saturate(100%) invert(86%) sepia(35%) saturate(835%)
    hue-rotate(345deg) brightness(103%) contrast(102%);
}
</style>
