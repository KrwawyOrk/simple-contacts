<template>
  <div style="position: relative">
    <va-app-bar>
      <ButtonAddContact :addContact="addContact" />
      <va-button
    icon="task"
    color="#fff"
    flat
    :rounded="false"
    >Contacts number {{ getContactsNumber }}</va-button
  >
      <va-spacer />
    </va-app-bar>
  </div>
</template>


<script>
import ButtonAddContact from "./action_buttons/ButtonAddContact.vue";
import useContacts from "../functions/useContacts.js";

export default {
  components: {
    ButtonAddContact,
  },

  props: {
    addContact: Function,
  },

  setup() {
    const { getContactsNumber } = useContacts();

    return { getContactsNumber };
  },
};
</script>

<style>
</style>