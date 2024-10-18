<template>
  <main id="app">
    <SidebarMyPortafolio />
    <div class="main-content">
      <NavbarMyPortafolio />
      <AboutMyPortafolio />
      <ResumeMyPortafolio />
      <PortfolioMyPortafolio />
      <BlogMyPortafolio />
      <ContactMyPortafolio />
    </div>
  </main>
</template>

<style>
/* Estilo general del contenedor principal */
main {
  display: grid; /* Habilitamos el grid */
  grid-template-columns: 1fr; /* Una columna por defecto (para pantallas pequeñas) */
  gap: 2em; /* Espacio entre las columnas */
  min-width: 259px;
}

/* Estilo de la barra lateral */
.sidebar {
  grid-column: 1 / 2; /* Ocupa la primera columna */
}

/* Estilo para el contenido principal */
.main-content {
  grid-column: 1 / 2; /* También ocupa la primera columna por defecto */
}

/* Para pantallas grandes, aplicamos dos columnas */
@media (min-width: 800px) {
  main {
    grid-template-columns: 300px 1fr; /* Dos columnas: sidebar (300px) y contenido principal */
  }

  .sidebar {
    grid-column: 1 / 2; /* Colocamos la barra lateral en la primera columna */
  }

  .main-content {
    grid-column: 2 / 3; /* Colocamos el contenido principal en la segunda columna */
  }
}

/* Ajustes adicionales para pantallas aún más grandes */
@media (min-width: 1200px) {
  main {
    grid-template-columns: 400px 1fr; /* Sidebar más ancho en pantallas grandes */
  }
}
</style>

<script>
import SidebarMyPortafolio from './components/MyPortafolio/Sidebar.vue'
import NavbarMyPortafolio from './components/MyPortafolio/Navbar.vue'
import AboutMyPortafolio from './components/MyPortafolio/About.vue'
import ResumeMyPortafolio from './components/MyPortafolio/Resume.vue'
import PortfolioMyPortafolio from './components/MyPortafolio/Portfolio.vue'
import BlogMyPortafolio from './components/MyPortafolio/Blog.vue'
import ContactMyPortafolio from './components/MyPortafolio/Contact.vue'

export default {
  components: {
    SidebarMyPortafolio,
    NavbarMyPortafolio,
    AboutMyPortafolio,
    ResumeMyPortafolio,
    PortfolioMyPortafolio,
    BlogMyPortafolio,
    ContactMyPortafolio,
  },
}
</script>
