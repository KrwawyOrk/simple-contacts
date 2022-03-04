<template>
  <div>
    <AppBar :addContact="addContact" />
    <ContactList
      :contactList="contactList"
      :removeContact="removeContact"
      :editContact="editContact"
      :addTask="addTask"
    />
  </div>
</template>

<script>
import AppBar from "./AppBar.vue";
import ContactList from "./ContactList.vue";

import useContacts from "../functions/useContacts.js";

export default {
  components: {
    AppBar,
    ContactList,
  },

  setup() {
    const { contactList, addContact, addTask, removeContact, editContact } =
      useContacts();

    return { contactList, addContact, addTask, removeContact, editContact };
  },
};
</script>

<style>
</style>