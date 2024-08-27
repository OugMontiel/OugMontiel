<script>
import { ref } from 'vue';
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
    const items = ref([
      {
        label: 'Toggle Dark Mode',
        icon: 'pi pi-sun', // O usa pi pi-moon para icono de modo oscuro
        command: () => {
          isDarkMode.value = !isDarkMode.value;
        }
      },
      // Agrega otros botones aquí
    ]);

    const toggleDarkMode = () => {
      isDarkMode.value = !isDarkMode.value;
    };

    return {
      isDarkMode,
      toggleDarkMode,
      items
    };
  }
}

</script>

<template>
  <div :class="{ 'my-app-dark': isDarkMode }">
    <div class="button-container">
      <SpeedDial :model="items" :radius="120" type="quarter-circle" direction="down-left"
        :style="{ position: 'absolute', left: '10px', top: '10px' }" />
    </div>

    <main>
      <Layout>
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
  background-color: #121212;
  color: #ffffff;
}

.button-container {
  position: absolute;
  left: 10px;
  top: 10px;
}
</style>