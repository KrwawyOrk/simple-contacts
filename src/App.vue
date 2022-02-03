<template>
  <ContactApp class="container" />
</template>

<script>
import ContactApp from "./components/ContactApp.vue";

export default {
  name: "Contact List - Vue 3",
  components: {
    ContactApp,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
}

.container {
  display: flex;
  flex-direction: column;
  padding: 0 0.3rem;
  margin: 0 auto;
}

@media (min-width: 576px) {
  .container {
    min-width: 80wv;
    max-width: 80wv;
  }
}

@media (min-width: 768px) {
  .container {
    min-width: 70vw;
    max-width: 70vw;
  }
}

@media (min-width: 992px) {
  .container {
    min-width: 60vw;
    max-width: 60vw;
  }
}

@media (min-width: 1200px) {
  .container {
    min-width: 50vw;
    max-width: 50vw;
  }
}

@media (min-width: 1400px) {
  .container {
    min-width: 40vw;
    max-width: 40vw;
  }
}
</style>
