<template>
  <div class="layout">
    <section class="sidebar-left">
      <slot name="izq"></slot>
    </section>
    <section class="content">
      <slot name="der"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Layout'
};
</script>

<style scoped>
.layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.sidebar-left {
  width: 30%;
  background-color: #f0f0f0;
  /* Ajusta el color de fondo según el tema */
}

.content {
  width: 70%;
  background-color: #ffffff;
  /* Ajusta el color de fondo según el tema */
}
</style>