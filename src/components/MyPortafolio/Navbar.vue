<template>
  <nav class="navbar">
    <ul class="navbarList">
      <li class="navbarItem">
        <button class="navbarLink active" data-nav-link>About</button>
      </li>
      <li class="navbarItem">
        <button class="navbarLink" data-nav-link>Resume</button>
      </li>
      <li class="navbarItem">
        <button class="navbarLink" data-nav-link>Portfolio</button>
      </li>
      <li class="navbarItem">
        <button class="navbarLink" data-nav-link>Blog</button>
      </li>
      <li class="navbarItem">
        <button class="navbarLink" data-nav-link>Contact</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'NavbarMyPortafolio',

  mounted() {
    // Inicializa la navegación de la página cuando el componente esté montado
    this.initPageNavigation()
  },

  methods: {
    initPageNavigation() {
      const navigationLinks = document.querySelectorAll('[data-nav-link]')
      const pages = document.querySelectorAll('[data-page]')

      navigationLinks.forEach((link, index) => {
        link.addEventListener('click', () => {
          pages.forEach((page, idx) => {
            if (link.innerHTML.toLowerCase() === page.dataset.page) {
              page.classList.add('active')
              navigationLinks[idx].classList.add('active')
              window.scrollTo(0, 0)
            } else {
              page.classList.remove('active')
              navigationLinks[idx].classList.remove('active')
            }
          })
        })
      })
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
  gap: 1em
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
