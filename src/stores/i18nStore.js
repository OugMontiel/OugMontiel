import { defineStore } from 'pinia'

export const useI18nStore = defineStore('i18n', {
  state: () => ({
    currentLanguage: localStorage.getItem('lang') || 'en',
    dictionaryEn: {
      about: 'About',
      resume: 'Resume',
      portfolio: 'Portfolio',
      blog: 'Blog',
      contact: 'Contact',
      menu: 'Menu',
    },
    dictionaryEs: {
      about: 'Sobre mí',
      resume: 'Currículum',
      portfolio: 'Portafolio',
      blog: 'Blog',
      contact: 'Contacto',
      menu: 'Menú',
    },
  }),

  getters: {
    t: state => {
      const activeDictionary =
        state.currentLanguage === 'es' ? state.dictionaryEs : state.dictionaryEn
      return key => activeDictionary[key] || key
    },
  },

  actions: {
    toggleLanguage() {
      this.currentLanguage = this.currentLanguage === 'en' ? 'es' : 'en'
      localStorage.setItem('lang', this.currentLanguage)
    },
  },
})
