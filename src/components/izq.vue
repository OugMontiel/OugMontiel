<script setup>

</script>

<template>
    <main>
        <section class="profile">
            <img class="profile-image" src="/public/img/Data Vizualizacion-SQL-R Studio-Power BI.jpg" alt="Data Science, Backend Developer, Economist">
            <h2>Diego Alejandro</h2>
            <h2>Montiel Florez</h2>
            <div class="professions">
                <p>Data Science</p>
                <p>Backend Developer</p>
                <p>Economist</p>
            </div>
        </section> 
    </main>
</template>

<style scoped>
main {
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh; /* Asegura que el contenido ocupe toda la altura de la ventana */
}

.profile {
    text-align: center;
    padding: 2em;
    border-radius: 10px;
}

.profile-image {
    width: 100%;
    object-fit: cover;
    border-radius: 10px; /* Bordes redondeados para la imagen */
    margin-bottom: 1em; /* Espacio entre la imagen y el texto */
}

.professions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
}

.professions p {
    font-weight: bold; /* Hace que los títulos de las profesiones sean más destacados */
}
</style>
