<template>
  <div :class="{ 'layout': true, 'dark-mode-layout': isDarkMode }">
    <section :class="{ 'sidebar-left': true, 'dark-mode-sidebar': isDarkMode }">
      <slot name="izq"></slot>
    </section>
    <section :class="{ 'content': true, 'dark-mode-content': isDarkMode }">
      <slot name="der"></slot>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    isDarkMode: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: var(--font-main);
}

.sidebar-left {
  width: 30%;
  background-color: var(--sidebar-bg-color);
  /* Color de fondo para la barra lateral */
  padding: 1rem;
}

.content {
  width: 70%;
  background-color: var(--content-bg-color);
  /* Color de fondo para el contenido */
  color: var(--text-color);
  /* Color del texto */
  padding: 1rem;
}

/* Estilos para el modo oscuro */
.dark-mode-layout {
  background-color: var(--dark-bg-color);
  /* Fondo oscuro para el layout */
}

.dark-mode-sidebar {
  background-color: var(--dark-sidebar-bg-color);
  /* Fondo oscuro para la barra lateral */
}

.dark-mode-content {
  background-color: var(--dark-content-bg-color);
  /* Fondo oscuro para el contenido */
  color: var(--dark-text-color);
  /* Color del texto en modo oscuro */
}
</style>
