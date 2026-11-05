<!-- Alert.vue -->
<template>
  <div class="alert" role="alert" aria-live="assertive">
    <p>{{ message }}</p>
    <button type="button" @click="$emit('close')">Close</button>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  emits: ['close'],
}
</script>

<style>
.alert {
  background-color: var(--bittersweet-shimmer);
  color: var(--white-2);
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: var(--shadow-3);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.alert button {
  background: none;
  border: none;
  color: var(--white-2);
  font-size: var(--fs-6);
  cursor: pointer;
}
</style>
