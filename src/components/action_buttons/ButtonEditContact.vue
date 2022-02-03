<template>
  <va-button
    @click="toggleModal"
    icon="edit"
    color="info"
    size="small"
    :rounded="false"
  />

  <va-modal v-model="showModal" hide-default-actions overlay-opacity="0.3">
    <template #header>
      <h2>Edit contact</h2>
    </template>
    <slot>
      <div>You can edit the user card here.</div>
    </slot>
    <template #footer>
      <EditContactForm :editContact="editContact" :contact="contact" :toggleModal="toggleModal" />
    </template>
  </va-modal>
</template>

<script>
import useToggleModal from "../../functions/useToggleModal.js";
import EditContactForm from "../../components/EditContactForm.vue";

export default {
  props: {
    editContact: Function,
    contact: Object,
  },

  components: {
    EditContactForm,
  },

  setup() {
    const { showModal, toggleModal } = useToggleModal();

    return { showModal, toggleModal };
  },
};
</script>

<style>
</style>