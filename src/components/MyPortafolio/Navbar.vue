<template>
  <nav class="navbar" :class="{ open: isMenuOpen }">
    <button
      v-if="!isMenuOpen"
      class="toggleButton"
      type="button"
      :aria-expanded="isMenuOpen"
      aria-controls="menu"
      @click="toggleMenu"
    >
      {{ t('nav.menu') }}
    </button>
    <ul id="menu" class="navbarList">
      <li v-for="(link, index) in navLinks" :key="index">
        <button
          class="navbarLink"
          type="button"
          :class="{ active: activePage === link.name }"
          :aria-current="activePage === link.name ? 'page' : undefined"
          @click="setActivePage(link.name)"
        >
          {{ t(link.key) }}
        </button>
      </li>
      <li>
        <button
          class="langButton"
          type="button"
          @click="toggleLanguage"
          aria-label="Toggle language"
        >
          <span :class="{ activeLang: currentLanguage === 'en' }">EN</span>
          <span class="langDivider">/</span>
          <span :class="{ activeLang: currentLanguage === 'es' }">ES</span>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'

export default {
  name: 'NavbarMyPortafolio',

  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { name: 'AboutMyPortafolio', key: 'nav.about' },
        { name: 'ResumeMyPortafolio', key: 'nav.resume' },
        { name: 'PortfolioMyPortafolio', key: 'nav.portfolio' },
        { name: 'BlogMyPortafolio', key: 'nav.blog' },
        { name: 'ContactMyPortafolio', key: 'nav.contact' },
      ],
      activePage: 'AboutMyPortafolio', // Página activa inicial
    }
  },
  computed: {
    ...mapState(useI18nStore, ['currentLanguage', 't']),
  },
  methods: {
    ...mapActions(useI18nStore, ['toggleLanguage']),
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen // Cambia el estado del menú
    },
    setActivePage(pageName) {
      this.activePage = pageName
      this.$emit('change-page', pageName) // Emitir evento al padre
      this.isMenuOpen = false // Cierra el menú tras seleccionar un enlace
    },
  },
}
</script>

<style>
.navbar {
  position: absolute;
  top: 0;
  right: 2em;
  width: auto;
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 0 0 1em 1em;
  box-shadow: var(--shadow-2);
  z-index: 10;
}

.navbarList {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  gap: 1em;
}

.navbarLink {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-500);
  padding: 1.4rem 0.9rem;
  transition: color var(--transition-1);
}

.navbarLink:hover,
.navbarLink:focus {
  color: var(--light-gray-70);
}

.navbarLink.active {
  color: var(--orange-yellow-crayola);
}

.langButton {
  display: inline-flex;
  align-items: center;
  gap: 0.35em;
  padding: 0.45em 0.85em;
  border: 1px solid var(--jet);
  border-radius: 0.6em;
  background: var(--onyx);
  color: var(--light-gray-70);
  font-size: var(--fs-7);
  font-weight: var(--fw-500);
  cursor: pointer;
  transition:
    border-color var(--transition-1),
    color var(--transition-1);
}

.langButton:hover {
  border-color: var(--orange-yellow-crayola);
}

.langButton .activeLang {
  color: var(--orange-yellow-crayola);
}

.langButton .langDivider {
  color: var(--light-gray-70);
}

.toggleButton {
  display: none;
}

/* Menos de 1000px a 800px: Espacios reducidos */
@media (max-width: 950px) and (min-width: 800px) {
  .navbarList {
    gap: 0.5em;
  }

  .navbarLink {
    padding: 1.8em 0;
  }
}

/* Menos de 500px a 450px: Más compacto */
@media (max-width: 600px) and (min-width: 500px) {
  .navbarList {
    gap: 0.5em;
  }
  .navbarLink {
    padding: 1.8em 0;
  }
}

/* Menos de 450px: Botón desplegable */
@media (max-width: 500px) {
  .navbar {
    top: 0;
    right: 2em;
  }

  .navbarList {
    display: none; /* Oculta la lista inicialmente */
    flex-direction: column;
    gap: 0;
  }

  .navbar.open .navbarList {
    display: flex; /* Muestra la lista al abrir */
  }

  .navbarLink {
    width: 100%;
    text-align: center;
    padding: 1em;
    border-top: 1px solid var(--jet); /* Divide visualmente los enlaces */
  }

  .toggleButton {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    padding: 0.5em 1.8em;
    background: hsla(240, 1%, 17%, 0.75);
    backdrop-filter: blur(10px);
    border: 1px solid var(--jet);
    border-radius: 0 0 1em 1em;
    box-shadow: var(--shadow-2);

    color: var(--orange-yellow-crayola);
    cursor: pointer;
  }
}
</style>
