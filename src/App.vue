<script setup>
import izq from './components/izq.vue'
import der from './components/der.vue'
</script>

<template>
  <main>
    <section class="sidebar-left">
      <izq></izq>
    </section>
    <section class="content">
      <der></der>
    </section>
  </main>
</template>

<style scoped>
/* Reseteo de estilos básicos */
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

/* Diseño del contenedor principal */
main {
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2em;
  padding: 1em;
}

/* Estilos para las secciones */
.sidebar-left,
.content {
  background-color: var(--vt-c-black-font);
  border-radius: 0.5em;
  border: 1px solid var(--vt-c-indigo);
  padding: 1em;
}

/* Estilos para imágenes */
img {
  width: 100%;
  height: auto; /* Mantener la relación de aspecto */
  object-fit: cover; /* Mejor ajuste para diferentes tamaños */
}

/* Estilos para listas */
li {
  list-style: none;
  margin-bottom: 0.5em; /* Espaciado entre elementos de lista */
}

/* Estilos para enlaces */
a {
  text-decoration: none;
  color: inherit; /* Heredar el color del texto para mantener la consistencia */
}

/* Responsive Design */
@media (min-width: 1024px) {
  main {
    padding: 2em;
    grid-template-columns: 1fr 3fr; /* Ajustar el diseño en pantallas grandes */
  }

  .sidebar-left {
    padding: 1.5em;
  }

  .content {
    padding: 1.5em;
  }
}
</style>

