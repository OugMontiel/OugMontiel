<template>
  <nav class="navbar">
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
    setActivePage(pageName) {
      this.activePage = pageName;
      this.$emit('change-page', pageName); // Emitir evento al padre
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
</style>
