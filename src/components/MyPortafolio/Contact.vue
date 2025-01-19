<template>
  <article class="contact" data-page="contact">
    <header>
      <h2 class="h2 articleTitle">Contact</h2>
    </header>

    <section class="contact-form">
      <h3 class="h3 form-title">Contact Form</h3>

      <form @submit.prevent="submitForm" class="form">
        <div class="input-wrapper">
          <input
            type="text"
            v-model="form.fullname"
            class="form-input"
            placeholder="Full name"
            required
          />
          <input
            type="email"
            v-model="form.email"
            class="form-input"
            placeholder="Email address"
            required
          />
        </div>

        <textarea
          v-model="form.message"
          class="form-input"
          placeholder="Your Message"
          required
        ></textarea>

        <!-- Mostrar alerta si el formulario no está disponible -->
        <Alert
          v-if="showAlert"
          :message="alertMessage"
          @close="showAlert = false"
        />

        <button class="form-btn" type="submit">
          <ion-icon name="paper-plane"></ion-icon>
          <span>Send Message</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script>
import Alert from '../Utils/Alert.vue'

export default {
  name: 'ContactMyPortafolio',
  components: {
    Alert,
  },
  data() {
    return {
      form: {
        fullname: '',
        email: '',
        message: '',
      },
      showAlert: false,
      alertMessage:
        'La funcionalidad de envío no está disponible de momento. Por favor, envíe un correo electrónico a MontielFlorezDiego@gmail.com.',
    }
  },
  methods: {
    submitForm() {
      // Mostrar alerta en lugar de enviar el formulario
      this.showAlert = true
    },
  },
}
</script>

<style>
/* Estilos del formulario y otros elementos */
.contact-form {
  margin-bottom: 10px;
}

.form-title {
  margin-bottom: 20px;
}

.input-wrapper {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  margin-bottom: 25px;
}

.form-input {
  color: var(--white-2);
  font-size: var(--fs-6);
  font-weight: var(--fw-400);
  padding: 13px 20px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  outline: none;
}

.form-input::placeholder {
  font-weight: var(--fw-500);
}

.form-input:focus {
  border-color: var(--orange-yellow-crayola);
}

textarea.form-input {
  min-height: 100px;
  height: 120px;
  max-height: 200px;
  resize: vertical;
  margin-bottom: 25px;
}

textarea.form-input::-webkit-resizer {
  display: none;
}

.form-btn {
  position: relative;
  width: 100%;
  background: var(--border-gradient-onyx);
  color: var(--orange-yellow-crayola);
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding: 13px 20px;
  border-radius: 14px;
  font-size: var(--fs-6);
  text-transform: capitalize;
  box-shadow: var(--shadow-3);
  z-index: 1;
  transition: var(--transition-1);
}

.form-btn::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: var(--bg-gradient-jet);
  border-radius: inherit;
  z-index: -1;
  transition: var(--transition-1);
}

.form-btn ion-icon {
  font-size: 16px;
}

.form-btn:hover {
  background: var(--bg-gradient-yellow-1);
}

.form-btn:hover::before {
  background: var(--bg-gradient-yellow-2);
}
</style>
