<template>
  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <button class="navbar-link active" data-nav-link>About</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Resume</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Portfolio</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Blog</button>
      </li>
      <li class="navbar-item">
        <button class="navbar-link" data-nav-link>Contact</button>
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
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: hsla(240, 1%, 17%, 0.75);
  backdrop-filter: blur(10px);
  border: 1px solid var(--jet);
  border-radius: 12px 12px 0 0;
  box-shadow: var(--shadow-2);
  z-index: 5;
}

.navbar-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
}

.navbar-link {
  color: var(--light-gray);
  font-size: var(--fs-8);
  padding: 20px 7px;
  transition: color var(--transition-1);
}

.navbar-link:hover,
.navbar-link:focus {
  color: var(--light-gray-70);
}

.navbar-link.active {
  color: var(--orange-yellow-crayola);
}
</style>
