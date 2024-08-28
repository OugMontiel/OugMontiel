<script>
import { ref, computed } from 'vue';
import Layout from './components/Layout.vue';
import izq from './components/izq.vue';
import der from './components/der.vue';

export default {
  components: {
    Layout,
    izq,
    der
  },
  setup() {
    const isDarkMode = ref(false);

    // Computed para el ícono basado en el modo
    const darkModeIcon = computed(() => (isDarkMode.value ? 'pi pi-sun' : 'pi pi-moon'));

    // Computed para los ítems del SpeedDial
    const items = computed(() => [
      {
        label: 'Toggle Dark Mode',
        icon: darkModeIcon.value,
        command: () => {
          isDarkMode.value = !isDarkMode.value;
        }
      },
      {
        label: 'Home',
        icon: 'pi pi-home',
        command: () => {
          console.log('Navigating to Home');
        }
      },
      {
        label: 'Settings',
        icon: 'pi pi-cog',
        command: () => {
          console.log('Opening Settings');
        }
      },
      {
        label: 'Profile',
        icon: 'pi pi-user',
        command: () => {
          console.log('Opening Profile');
        }
      }
    ]);

    return {
      isDarkMode,
      items
    };
  }
}
</script>


<template>
  <div :class="{ 'my-app-dark': isDarkMode }">
    <div class="button-container">
      <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left"
        :style="{ position: 'absolute', right: '1rem', top: '1rem' }" />
    </div>

    <main>
      <Layout :isDarkMode="isDarkMode">
        <template #izq>
          <izq />
        </template>
        <template #der>
          <der />
        </template>
      </Layout>
    </main>
  </div>
</template>

<style>
.my-app-dark {
  background-color: var(--dark-bg-color);
  /* Fondo oscuro para el layout principal */
  color: var(--dark-text-color); /* Color de texto en modo oscuro */
}
</style>
