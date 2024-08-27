<script setup>

</script>

<template>

    <section class="profile">
        <img class="profile-image" 
            src="/public/img/Data Vizualizacion-SQL-R Studio-Power BI.jpg"
            alt="Data Science, Backend Developer, Economist">
        <h2>Diego Alejandro Montiel Florez</h2>
        <div class="professions">
            <p>Data Science</p>
            <p>Backend Developer</p>
            <p>Economist</p>
        </div>
    </section>
    <span></span> 
    <section class="information">
        <span>
            <div> icono </div>
            <div> Dato</div>
        </span>
        <span>
            <div> icono </div>
            <div> Dato</div>
        </span>
    </section>

</template>

<style scoped>
.profile {
    text-align: center;
    border-radius: 10px;
}

.profile-image {
    width: 100%;
    object-fit: cover;
    border-radius: 10px;
    /* Bordes redondeados para la imagen */
    margin-bottom: 1em;
    /* Espacio entre la imagen y el texto */
}

.professions {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 1em;
}

.professions p {
    font-weight: bold;
    /* Hace que los títulos de las profesiones sean más destacados */
}
</style>
