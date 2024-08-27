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

    const darkModeIcon = computed(() => (isDarkMode.value ? 'pi pi-moon' : 'pi pi-sun'));

    const items = ref([
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
        :style="{ position: 'absolute', right: '10px', top: '10px' }" />
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
</style>
