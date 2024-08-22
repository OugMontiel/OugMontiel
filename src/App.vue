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
main{
  display: grid;
  grid-template-columns: 2fr 7fr;
  gap: 2em
}
div{
  background-color: aqua;
}
/* @media (min-width: 1024px) {
} */
</style>
