<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {
}
</script>

<style scoped>
button {
  text-decoration: none;
  padding: 0.25rem 0.75rem;
  font: inherit;
  background-color: #31a741;
  border: 1px solid #31a741;
  color: white;
  cursor: pointer;
  border-radius: 5px;
  margin-right: 0.5rem;
  display: inline-block;
}

button:hover,
button:active {
  background-color: #000;
  border-color: #000;
}
</style>