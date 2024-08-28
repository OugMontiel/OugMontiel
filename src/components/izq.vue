<template>
  <aside class="sidebar">
    <!-- Sección de perfil con foto y profesiones -->
    <Card class="profile-card">
      <template #header>
        <img alt="Perfil de Usuario" :src="profileImage" class="profile-header-image" />
      </template>
      <template #title>
        <h2 class="profile-name">{{ name }}</h2>
      </template>
      <template #subtitle>
        <div class="professions">
          <p v-for="profession in professions" :key="profession">{{ profession }}</p>
        </div>
      </template>
      <template #content>
        <!-- Información de contacto -->
        <div class="info_more">
          <Listbox v-model="selectedContact" :options="contacts" optionLabel="title">
            <template #option="slotProps">
              <a :href="slotProps.option.href" class="contact-link">
                <InputIcon :icon="slotProps.option.icon" class="icon-box" />
                <div class="contact-info">
                  <p class="contact-title">{{ slotProps.option.title }}</p>
                  <span>{{ slotProps.option.value }}</span>
                </div>
              </a>
            </template>
          </Listbox>
        </div>
      </template>
    </Card>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      profileImage: "/public/img/Data Vizualizacion-SQL-R Studio-Power BI.jpg",
      name: "Diego Alejandro Montiel Florez",
      professions: ["Data Science", "Backend Developer", "Economist"],
      contacts: [
        { type: 'email', icon: 'pi pi-envelope', title: 'Email', value: 'DiegoAlejandroMontiel@gmail.com', href: 'mailto:DiegoAlejandroMontiel@gmail.com' },
        { type: 'phone', icon: 'pi pi-phone', title: 'Phone', value: '+57 3186377850', href: 'tel:+573186377850' },
        { type: 'linkedin', icon: 'pi pi-linkedin', title: 'LinkedIn', value: 'Diego Alejandro Montiel Florez', href: 'https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science/' },
        { type: 'location', icon: 'pi pi-map-marker', title: 'Location', value: 'Bucaramanga, Colombia', href: '#' },
      ],
      selectedContact: null,
    };
  },
};
</script>

<style scoped>
.sidebar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
}

.profile-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  max-width: 400px; /* Limita el ancho máximo de la tarjeta */
  margin: 0 auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

.profile-header-image {
  width: 100%;
  object-fit: cover;
}

.profile-name {
  padding: 0;
  text-align: center;
  margin: 1em 0;
  font-size: 1.2em; /* Ajuste de tamaño de fuente para adaptabilidad */
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.professions {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1em;
}

.professions p {
  font-weight: bold;
  margin: 0.5em 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.info_more {
  margin: 1em 0;
}

.contact-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.contact-info {
  margin-left: 1em;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.icon-box {
  font-size: 1.2em; /* Ajuste de tamaño de ícono */
  color: #007bff;
}
</style>
