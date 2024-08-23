<script setup>
import izq from './components/izq.vue'
import der from './components/der.vue'
</script>

<template>
  <main>
    <div>
      <izq></izq>
    </div>
    <div>
      <der></der>
    </div>
  </main>
</template>

<style scoped>
* {
  padding: 0;
  margin: 0;
  border: 0;
  box-sizing: border-box;
}

main {
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2em
}

div {
  background-color: var(--vt-c-black-font);
  border-radius: 1em;
  border: .05px solid var(--vt-c-indigo);
}

img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

/* @media (min-width: 1024px) {
} */
</style>
