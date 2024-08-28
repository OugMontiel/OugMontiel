<template>
  <aside class="sidebar">
    <!-- Sección de perfil con foto y profesiones -->
    <section class="profile">
      <img class="profile-image" :src="profileImage" alt="Data Science, Backend Developer, Economist" />
      <h2 class="name">{{ name }}</h2>
      <div class="professions">
        <p v-for="profession in professions" :key="profession">{{ profession }}</p>
      </div>
    </section>

    <div class="separator"></div>

    <!-- Información de contacto -->
    <div class="info_more">
      <ul class="contacts-list">
        <a href="mailto:{{email}}" class="contact-item">
          <div class="icon-box"><ion-icon name="mail-outline" role="img" aria-label="mail outline"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">Email</p><span class="contact-link">{{ email }}</span>
          </div>
        </a>
        <a href="tel:{{phone}}" class="contact-item">
          <div class="icon-box"><ion-icon name="phone-portrait-outline" role="img"
              aria-label="phone portrait outline"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">Phone</p><span class="contact-link">{{ phone }}</span>
          </div>
        </a>
        <a :href="linkedin.value" class="contact-item" target="_blank">
          <div class="icon-box"><ion-icon name="logo-linkedin" role="img" aria-label="logo linkedin"></ion-icon></div>
          <div class="contact-info">
            <p class="contact-title">Linkedin</p><span class="contact-link">{{ linkedin.label }}</span>
          </div>
        </a>
        <li class="contact-item">
          <div class="icon-box"><ion-icon name="location-outline" role="img" aria-label="location outline"></ion-icon>
          </div>
          <div class="contact-info">
            <p class="contact-title">Location</p>
            <address>{{ location.city }}, {{ location.country }}</address>
          </div>
        </li>
      </ul>
    </div>

    <div class="separator"></div>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "/public/img/Data Vizualizacion-SQL-R Studio-Power BI.jpg",
      name: "Diego Alejandro Montiel Florez",
      professions: ["Data Science", "Backend Developer", "Economist"],
      email: "DiegoAlejandroMontiel@gmail.com",
      phone: "+57 3186377850",
      linkedin: {
        label: "Diego Alejandro Montiel Florez",
        value: "https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science/",
      },
      location: {
        city: "Bucaramanga",
        country: "Colombia" // Corregido de 'contry' a 'country'
      }
    };
  },
};
</script>

<style scoped>
.sidebar {
  width: 300px;
  padding: 20px;
  border-radius: 8px;
}

.profile {
  text-align: center;
  border-radius: 10px;
}

.profile-image {
  width: 100%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1em;
}

.professions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.professions p {
  font-weight: bold;
}

.contacts-list {
  list-style: none;
  padding: 0;
}

.contact-item {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

.contact-item ion-icon {
  margin-right: 10px;
}
</style>