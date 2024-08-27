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
            <ul class="contacts-list" data-v-5f5e8365="">
                <a href="mailto:{{email}}" class="contact-item" data-v-5f5e8365="">
                    <div class="icon-box" data-v-5f5e8365=""><ion-icon name="mail-outline" data-v-5f5e8365="" role="img"
                            class="md hydrated" aria-label="mail outline"></ion-icon></div>
                    <div class="contact-info" data-v-5f5e8365="">
                        <p class="contact-title" data-v-5f5e8365="">Email</p><span class="contact-link"
                            data-v-5f5e8365="">{{ email }}</span>
                    </div>
                </a><a href="tel:{{phone}}" class="contact-item" data-v-5f5e8365="">
                    <div class="icon-box" data-v-5f5e8365=""><ion-icon name="phone-portrait-outline" data-v-5f5e8365=""
                            role="img" class="md hydrated" aria-label="phone portrait outline"></ion-icon></div>
                    <div class="contact-info" data-v-5f5e8365="">
                        <p class="contact-title" data-v-5f5e8365="">Phone</p><span class="contact-link"
                            data-v-5f5e8365="">{{ phone }}</span>
                    </div>
                </a><a href="{{linkedin.value}}" class="contact-item" target="_blank" data-v-5f5e8365="">
                    <div class="icon-box" data-v-5f5e8365=""><ion-icon name="logo-linkedin" data-v-5f5e8365=""
                            role="img" class="md hydrated" aria-label="logo linkedin"></ion-icon></div>
                    <div class="contact-info" data-v-5f5e8365="">
                        <p class="contact-title" data-v-5f5e8365="">Linkedin</p><span class="contact-link"
                            data-v-5f5e8365="">{{ linkedin.label }}</span>
                    </div>
                </a>
                <li class="contact-item" data-v-5f5e8365="">
                    <div class="icon-box" data-v-5f5e8365=""><ion-icon name="location-outline" data-v-5f5e8365=""
                            role="img" class="md hydrated" aria-label="location outline"></ion-icon></div>
                    <div class="contact-info" data-v-5f5e8365="">
                        <p class="contact-title" data-v-5f5e8365=""> Location </p>
                        <address data-v-5f5e8365="">{{ location.city }}, {{ location.contry }}</address>
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
            email: "DiegoAelajendoMontiel@gmail.com",
            phone: "+57 3186377850",
            linkedin: {
                label: "Diego Alejadnro Montiel Florez",
                value: "https://www.linkedin.com/in/diego-alejandro-montiel-florez-data-science/",
            },
            location: {
                city: "Bucaramanga",
                contry: "Colombia"
            }
        };
    },
};
</script>

<style scoped>
.sidebar {
    width: 300px;
    padding: 20px;
    /* background-color: #f4f4f4; */
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

.info_more-btn {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    display: block;
    width: 100%;
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