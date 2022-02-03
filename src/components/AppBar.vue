<template>
  <div style="position: relative">
    <va-app-bar>
      <ButtonAddContact :addContact="addContact" />
      <va-spacer />
    </va-app-bar>
  </div>
</template>


<script>
import ButtonAddContact from "./action_buttons/ButtonAddContact.vue";

export default {
  components: {
    ButtonAddContact,
  },

  props: {
    addContact: Function,
  },
};
</script>

<style>
</style>