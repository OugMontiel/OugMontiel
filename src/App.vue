<template>
  <div class="appLayout">
    <div class="sidebar">
      <SidebarMyPortafolio />
    </div>
    <main class="mainContent">
      <NavbarMyPortafolio @change-page="setActiveComponent" />
      <component :is="activeComponent" />
    </main>
  </div>
</template>

<style>
/* Estilo general del contenedor principal */
.appLayout {
  display: grid; /* Habilitamos el grid */
  grid-template-columns: 1fr; /* Una columna por defecto (para pantallas pequeñas) */
  gap: 2rem; /* Espacio entre las columnas */
  width: 100%;
  max-width: 100%;
  margin: 2rem auto;
  padding: 0 2rem;
}

/* Estilo de la barra lateral */
.sidebar {
  grid-column: 1 / 2; /* Ocupa la primera columna */
}

/* Estilo para el contenido principal */
.mainContent {
  grid-column: 1 / 2; /* También ocupa la primera columna por defecto */
  position: relative;
  width: 100%;
  max-width: 100%;
  min-width: 0;
  margin: 0;
  padding: 0;
  animation: fade 0.5s ease backwards;
}

@media (max-width: 600px) {
  .appLayout {
    margin: 1rem auto;
    padding: 0 1rem;
    gap: 1.25rem;
  }
}

/* Para pantallas grandes, aplicamos dos columnas */
@media (min-width: 800px) {
  .appLayout {
    grid-template-columns: 320px 1fr; /* Dos columnas: sidebar y contenido principal fluido */
  }

  .sidebar {
    grid-column: 1 / 2; /* Colocamos la barra lateral en la primera columna */
  }

  .mainContent {
    grid-column: 2 / 3; /* Colocamos el contenido principal en la segunda columna */
  }
}

/* Ajustes adicionales para pantallas aún más grandes */
@media (min-width: 1200px) {
  .appLayout {
    grid-template-columns: 380px 1fr; /* Sidebar cómodo y panel derecho 100% fluido */
    padding: 0 2.5rem;
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
  data() {
    return {
      activeComponent: 'AboutMyPortafolio', // Componente inicial
    }
  },
  methods: {
    setActiveComponent(componentName) {
      this.activeComponent = componentName
    },
  },
}
</script>
