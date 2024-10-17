<template>
  <article class="blog" data-page="blog">
    <header>
      <h2 class="h2 article-title">Blog</h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li class="blog-post-item">
          <a
            href="https://medium.com/@OugMontiel/ceasing-to-be-me-a9c0d6d51f51"
          >
            <figure class="blog-banner-box">
              <img
                src="./assets/images/my-avatar.png"
                alt="Design conferences in 2022"
                loading="lazy"
              />
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">me</p>

                <span class="dot"></span>

                <time datetime="2024-02-14">Fab 14, 2024</time>
              </div>

              <h3 class="h3 blog-item-title">Ceasing to be me</h3>

              <p class="blog-text">
                If you want to know more about my journey. I invite you to read
                this post. Here, I'll share how my passion for data science
                ignited and my ongoing pursuit to become an expert in the field.
                Additionally, I'll discuss my personal and professional growth
                through the learning process. I hope you find it enjoyable and
                inspirational.
              </p>
            </div>
          </a>
        </li>

        <li class="blog-post-item">
          <a
            href="https://medium.com/@OugMontiel/data-science-first-steps-543fdab30cd5"
          >
            <figure class="blog-banner-box">
              <img
                src="./assets/images/blog-2.webp"
                alt="Best fonts every designer"
                loading="lazy"
              />
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Data Science</p>

                <span class="dot"></span>

                <time datetime="2024-03-18">Mar 18, 2024</time>
              </div>

              <h3 class="h3 blog-item-title">
                The initial stages of delving into Data Science
              </h3>

              <p class="blog-text">
                Exploring the Initial Stages of Data Science, The world of Data
                Science is an exciting journey into the realms of data,
                statistics, and human behavior! 🌐 Dive into the foundational
                concepts with me as we uncover its significance across diverse
                domains.
              </p>
            </div>
          </a>
        </li>

        <li class="blog-post-item">
          <a
            href="https://medium.com/@OugMontiel/entendiendo-la-ciencia-de-datos-una-guía-para-novatos-7f3da880fe20"
          >
            <figure class="blog-banner-box">
              <img
                src="./assets/images/blog-3.webp"
                alt="Design digest #80"
                loading="lazy"
              />
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">Data Science</p>

                <span class="dot"></span>

                <time datetime="2022-02-23">Fab 23, 2022</time>
              </div>

              <h3 class="h3 blog-item-title">
                Entendiendo la Ciencia de Datos: Una Guía para Novatos
              </h3>

              <p class="blog-text">
                ¡Descubre cómo la Ciencia de Datos puede transformar tu
                comprensión del mundo y potenciar tu carrera! 🌟 Lee nuestro
                contenido para explorar las claves de esta disciplina
                revolucionaria y aprende a aplicar sus principios en la
                práctica.
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </article>
</template>

<script>
export default {
  name: 'BlogMyPortafolio',
}
</script>
