import { createApp } from "vue";
import PrimeVue from "primevue/config";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import App from './App.vue'
import Aura from '@primevue/themes/aura';

const app = createApp(App);

app.component('InputText', InputText);
app.component('Button', Button);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.mount('#app');
