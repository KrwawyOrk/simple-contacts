<template>
  <va-button
    @click="toggleModal"
    icon="delete"
    color="danger"
    size="small"
    :rounded="false"
  />

  <va-modal v-model="showModal" hide-default-actions overlay-opacity="0.3">
    <template #header>
      <h2>Remove contact</h2>
    </template>
    <slot>
      <div>Do you want to permanently remove a contact from the list?</div>
    </slot>
    <template #footer>
      <va-button @click="toggleModal" icon="done" class="mx-2" :rounded="false">
        Cancel
      </va-button>
      <va-button
        @click="handleRemoveContact"
        icon="delete"
        color="danger"
        class="mx-2"
        :rounded="false"
      >
        Delete
      </va-button>
    </template>
  </va-modal>
</template>

<script>
import useToggleModal from "../../functions/useToggleModal.js";

export default {
  props: {
    removeContact: Function,
    contactID: String,
  },

  setup(props) {
    const { showModal, toggleModal } = useToggleModal();

    const handleRemoveContact = () => {
      const { removeContact, contactID } = props;
      removeContact(contactID);
    };

    return { handleRemoveContact, toggleModal, showModal };
  },
};
</script>

<style>
</style>