<template>
  <nav class="navbar" :class="{ open: isMenuOpen }">
    <button class="toggleButton" @click="toggleMenu">Menu</button>
    <ul class="navbarList">
      <li v-for="(link, index) in navLinks" :key="index">
        <button
          class="navbarLink"
          :class="{ active: activePage === link.name }"
          @click="setActivePage(link.name)"
        >
          {{ link.label }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMyPortafolio',

  data() {
    return {
      isMenuOpen: false,
      navLinks: [
        { name: 'AboutMyPortafolio', label: 'About' },
        { name: 'ResumeMyPortafolio', label: 'Resume' },
        { name: 'PortfolioMyPortafolio', label: 'Portfolio' },
        { name: 'BlogMyPortafolio', label: 'Blog' },
        { name: 'ContactMyPortafolio', label: 'Contact' },
      ],
      activePage: 'AboutMyPortafolio', // Página activa inicial
    }
  },
  methods: {
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
  font-size: var(--fs-7);
  padding: 1.8em 1em;
  transition: color var(--transition-1);
}

.navbarLink:hover,
.navbarLink:focus {
  color: var(--light-gray-70);
}

.navbarLink.active {
  color: var(--orange-yellow-crayola);
}
.toggleButton {
  display: none;
}

/* Menos de 1000px a 800px: Espacios reducidos */
@media (max-width: 1000px) and (min-width: 800px) {
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
    right: 2em;
    padding: 0.5em 1em;
    width: auto;
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
