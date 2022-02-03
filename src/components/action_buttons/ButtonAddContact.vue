<template>
  <va-button
    @click="toggleModal"
    icon="person_add"
    color="#fff"
    flat
    :rounded="false"
    >Add contact</va-button
  >
  <va-modal v-model="showModal" hide-default-actions overlay-opacity="0.3">
    <template #header>
      <h2>Add contact</h2>
    </template>
    <slot>
      <div>You can add a new contact here.</div>
    </slot>
    <template #footer>
      <AddContactForm :addContact="addContact" :toggleModal="toggleModal" />
    </template>
  </va-modal>
</template>

<script>
import useToggleModal from "../../functions/useToggleModal.js";
import AddContactForm from "../AddContactForm.vue";

export default {
  components: {
    AddContactForm,
  },

  props: {
      addContact: Function,
  },

  setup() {
    const { showModal, toggleModal } = useToggleModal();

    return { showModal, toggleModal };
  },
};
</script>

<style>
</style>