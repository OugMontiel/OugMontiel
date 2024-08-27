<script>
import izq from './components/izq.vue'
import der from './components/der.vue'
import { ref } from 'vue';

export default {
  setup() {
    const isDarkMode = ref(false);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    return {
      isDarkMode,
      toggleDarkMode
    };
  }
}
</script>

<template>

  <div :class="{ 'my-app-dark': isDarkMode }">
    <Button label="Toggle Dark Mode" @click="toggleDarkMode" />
    <!-- Aquí puedes agregar más componentes o contenido -->

    <main>
      <section class="sidebar-left">
        <izq></izq>
      </section>
      <section class="content">
        <der></der>
      </section>
    </main>
  </div>
</template>

<style>
.my-app-dark {
  background-color: #121212;
  /* Fondo oscuro para el modo oscuro */
  color: #ffffff;
  /* Texto claro para el modo oscuro */
}
</style>