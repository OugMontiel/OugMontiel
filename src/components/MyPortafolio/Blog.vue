<template>
  <article class="blog" data-page="blog">
    <header>
      <h2 class="h2 articleTitle">Blog</h2>
    </header>

    <section class="blog-posts">
      <ul class="blog-posts-list">
        <li
          class="blog-post-item"
          v-for="(post, index) in blogPosts"
          :key="index"
        >
          <a :href="post.link">
            <figure class="blog-banner-box">
              <img :src="post.imgSrc" :alt="post.alt" loading="lazy" />
            </figure>

            <div class="blog-content">
              <div class="blog-meta">
                <p class="blog-category">{{ post.category }}</p>
                <span class="dot"></span>
                <time :datetime="post.date">{{ post.formattedDate }}</time>
              </div>

              <h3 class="h3 blog-item-title">{{ post.title }}</h3>

              <p class="blog-text">{{ post.description }}</p>
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
  data() {
    return {
      blogPosts: [
        {
          title: 'Ceasing to be me',
          category: 'me',
          date: '2024-02-14',
          formattedDate: 'Feb 14, 2024',
          imgSrc: '../../public/my-avatar.png',
          alt: 'Design conferences in 2022',
          link: 'https://medium.com/@OugMontiel/ceasing-to-be-me-a9c0d6d51f51',
          description:
            "If you want to know more about my journey. I invite you to read this post. Here, Ill share how my passion for data science ignited and my ongoing pursuit to become an expert in the field. Additionally, I'll discuss my personal and professional growth through the learning process. I hope you find it enjoyable and inspirational.",
        },
        {
          title: 'The initial stages of delving into Data Science',
          category: 'Data Science',
          date: '2024-03-18',
          formattedDate: 'Mar 18, 2024',
          imgSrc: '../../public/imgBlog/blog-2.webp',
          alt: 'Best fonts every designer',
          link: 'https://medium.com/@OugMontiel/data-science-first-steps-543fdab30cd5',
          description:
            'Exploring the Initial Stages of Data Science, The world of Data Science is an exciting journey into the realms of data, statistics, and human behavior! 🌐 Dive into the foundational concepts with me as we uncover its significance across diverse domains.',
        },
        {
          title: 'Entendiendo la Ciencia de Datos: Una Guía para Novatos',
          category: 'Data Science',
          date: '2022-02-23',
          formattedDate: 'Feb 23, 2022',
          imgSrc: '../../public/imgBlog/blog-3.webp',
          alt: 'Design digest #80',
          link: 'https://medium.com/@OugMontiel/entendiendo-la-ciencia-de-datos-una-guía-para-novatos-7f3da880fe20',
          description:
            '¡Descubre cómo la Ciencia de Datos puede transformar tu comprensión del mundo y potenciar tu carrera! 🌟 Lee nuestro contenido para explorar las claves de esta disciplina revolucionaria y aprende a aplicar sus principios en la práctica.',
        },
        // Agrega más publicaciones aquí
      ],
    }
  },
}
</script>

<style>
.blog-posts {
  margin-bottom: 10px;
}

.blog-posts-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40%, 1fr));
  gap: 20px;
}

.blog-post-item > a {
  position: relative;
  background: var(--border-gradient-onyx);
  height: 100%;
  box-shadow: var(--shadow-4);
  border-radius: 16px;
  z-index: 1;
}

.blog-post-item > a::before {
  content: '';
  position: absolute;
  inset: 1px;
  border-radius: inherit;
  background: var(--eerie-black-1);
  z-index: -1;
}

.blog-banner-box {
  width: 100%;
  height: 200px;
  border-radius: 12px;
  overflow: hidden;
}

.blog-banner-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: var(--transition-1);
}

.blog-post-item > a:hover .blog-banner-box img {
  transform: scale(1.1);
}

.blog-content {
  padding: 15px;
}

.blog-meta {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;
  margin-bottom: 10px;
}

.blog-meta :is(.blog-category, time) {
  color: var(--light-gray-70);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
}

.blog-meta .dot {
  background: var(--light-gray-70);
  width: 4px;
  height: 4px;
  border-radius: 4px;
}

.blog-item-title {
  margin-bottom: 10px;
  line-height: 1.3;
  transition: var(--transition-1);
}

.blog-post-item > a:hover .blog-item-title {
  color: var(--orange-yellow-crayola);
}

.blog-text {
  color: var(--light-gray);
  font-size: var(--fs-6);
  font-weight: var(--fw-300);
  line-height: 1.6;
}
</style>
