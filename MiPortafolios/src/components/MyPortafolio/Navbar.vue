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
