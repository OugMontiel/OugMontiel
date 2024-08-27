import { createApp } from "vue";
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import App from './App.vue'
import Aura from '@primevue/themes/aura';
import SpeedDial from 'primevue/speeddial';
import 'primeicons/primeicons.css';                     // Estilos de PrimeIcons

const app = createApp(App);

// Registro de componente
app.component('SpeedDial', SpeedDial);
app.component('InputText', InputText);
app.component('Button', Button);

app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: '.my-app-dark', // Usando clase personalizada
            cssLayer: false
        }
    }
});

app.mount('#app');
