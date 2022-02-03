<template>
  <div v-if="showModal" class="modal">
    <div class="modal-content">
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <button @click="handleRemoveContact">OK</button>
      <button @click="toggleModal">Cancel</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    showModal: Boolean,
    toggleModal: Function,
    handleRemoveContact: Function,
  }
};
</script>

<style>
.modal {
  display: flex;
  flex-direction: column;
  align-content: space-around;
  z-index: 10;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: auto;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.7);
}

.modal-content {
  background-color: white;
  margin: 5rem auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 2px, 2px;
}
</style>