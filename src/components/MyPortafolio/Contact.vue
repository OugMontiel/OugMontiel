<template>
  <article class="contact" data-page="contact">
    <header>
      <h2 class="h2 articleTitle">{{ t('contact.title') }}</h2>
    </header>

    <section class="socials-contact">
      <div class="socials-column">
        <h3 class="h3">{{ t('contact.followMe') }}</h3>
        <ul class="socials-icons">
          <li v-for="social in t('contact.socials')" :key="social.name">
            <a
              :href="social.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="social.name"
            >
              <img
                :src="social.icon"
                :alt="social.name"
                width="32"
                height="32"
              />
            </a>
          </li>
        </ul>
      </div>
      <div class="contact-column">
        <h3 class="h3">{{ t('contact.letsTalk') }}</h3>
        <ul class="contact-icons">
          <li v-for="contact in t('contact.contacts')" :key="contact.name">
            <a
              :href="contact.link"
              target="_blank"
              rel="noopener noreferrer"
              :aria-label="contact.name"
            >
              <img
                :src="contact.icon"
                :alt="contact.name"
                width="32"
                height="32"
              />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <section class="contact-form">
      <h3 class="h3 form-title">{{ t('contact.formTitle') }}</h3>

      <form @submit.prevent="submitForm" class="form">
        <div class="input-wrapper">
          <div>
            <label for="contact-fullname" class="sr-only">
              {{ t('contact.fullnamePlaceholder') }}
            </label>
            <input
              id="contact-fullname"
              type="text"
              name="fullname"
              autocomplete="name"
              v-model="form.fullname"
              class="form-input"
              :placeholder="t('contact.fullnamePlaceholder')"
              :aria-label="t('contact.fullnamePlaceholder')"
              required
            />
          </div>
          <div>
            <label for="contact-email" class="sr-only">
              {{ t('contact.emailPlaceholder') }}
            </label>
            <input
              id="contact-email"
              type="email"
              name="email"
              autocomplete="email"
              v-model="form.email"
              class="form-input"
              :placeholder="t('contact.emailPlaceholder')"
              :aria-label="t('contact.emailPlaceholder')"
              required
            />
          </div>
        </div>

        <div>
          <label for="contact-message" class="sr-only">
            {{ t('contact.messagePlaceholder') }}
          </label>
          <textarea
            id="contact-message"
            name="message"
            v-model="form.message"
            class="form-input"
            :placeholder="t('contact.messagePlaceholder')"
            :aria-label="t('contact.messagePlaceholder')"
            required
          ></textarea>
        </div>

        <!-- Mostrar alerta si el formulario no está disponible -->
        <Alert
          v-if="showAlert"
          :message="t('contact.alertMessage')"
          @close="showAlert = false"
        />

        <button class="form-btn" type="submit">
          <ion-icon name="paper-plane" aria-hidden="true"></ion-icon>
          <span>{{ t('contact.sendBtn') }}</span>
        </button>
      </form>
    </section>
  </article>
</template>

<script>
import { mapState } from 'pinia'
import { useI18nStore } from '../../stores/i18nStore'
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
    }
  },
  computed: {
    ...mapState(useI18nStore, ['t']),
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

@media (min-width: 768px) {
  .input-wrapper {
    grid-template-columns: 1fr 1fr;
  }
}

.form-input {
  color: var(--white-2);
  font-size: var(--fs-5);
  font-weight: var(--fw-400);
  padding: 13px 20px;
  border: 1px solid var(--jet);
  border-radius: 14px;
  outline: none;
}

.form-input::placeholder {
  color: var(--light-gray-70);
  font-weight: var(--fw-400);
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
