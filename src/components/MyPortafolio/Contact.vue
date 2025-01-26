<template>
  <article class="contact" data-page="contact">
    <header>
      <h2 class="h2 articleTitle">Contact</h2>
    </header>

    <section class="socials-contact">
      <div class="socials-column">
        <h3 class="h3">Follow Me</h3>
        <div class="socials-icons">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.link"
            target="_blank"
            rel="noreferrer"
          >
            <img :src="social.icon" :alt="social.name" width="32" height="32" />
          </a>
        </div>
      </div>
      <div class="contact-column">
        <h3 class="h3">Let's Talk</h3>
        <div class="contact-icons">
          <a
            v-for="contact in contacts"
            :key="contact.name"
            :href="contact.link"
            target="_blank"
            rel="noreferrer"
          >
            <img
              :src="contact.icon"
              :alt="contact.name"
              width="32"
              height="32"
            />
          </a>
        </div>
      </div>
    </section>

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
      socials: [
        {
          name: 'Discord',
          icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/discord.svg',
          link: 'https://discord.com/users/Oug#6073',
        },
        {
          name: 'GitHub',
          icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/github.svg',
          link: 'https://www.github.com/OugMontiel',
        },
        {
          name: 'LinkedIn',
          icon: 'https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/socials/linkedin.svg',
          link: 'https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science/',
        },
        {
          name: 'Kaggle',
          icon: 'https://www.kaggle.com/static/images/favicon.ico',
          link: 'https://www.kaggle.com/ougmontiel',
        },
      ],
      contacts: [
        {
          name: 'Email',
          icon: 'https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico',
          link: 'mailto:montielflorezdiego@gmail.com',
        },
        {
          name: 'Telegram',
          icon: 'https://web.telegram.org/a/favicon-32x32.png',
          link: 'https://t.me/OugMontiel',
        },
        {
          name: 'WhatsApp',
          icon: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/WhatsApp_icon.png',
          link: 'https://wa.me/573186377582',
        },
      ],
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

/*  Social  */

.socials-contact {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.socials-column,
.contact-column {
  flex: 1;
  margin: 0 10px;
}

.socials-icons,
.contact-icons {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
}

.socials-icons a,
.contact-icons a {
  transition: transform 0.3s;
}

.socials-icons a:hover,
.contact-icons a:hover {
  transform: scale(1.1);
}
</style>
