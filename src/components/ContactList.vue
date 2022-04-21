<template>
  <div>
    <div
      v-show="isContactsListLoading === true"
      style="display: flex; justify-content: center; align-items: center; margin-top: 3rem"
    >
      <div>
        <va-progress-circle indeterminate />
      </div>
    </div>

    <va-alert
      v-if="getContactsNumber === 0 && isContactsListLoading === false"
      color="info"
      class="mb-4"
    >
      <template #icon>
        <va-icon name="info" />
      </template>
      Your contact list is empty. Press the add contact button.
    </va-alert>

    <va-list v-if="getContactsNumber">
      <va-list-label> Contacts </va-list-label>
      <transition-group name="list" tag="p">
        <ContactCard
          v-for="contact in contactList"
          :key="contact.id"
          :contact="contact"
          :removeContact="removeContact"
          :removeTask="removeTask"
          :editContact="editContact"
          :addTask="addTask"
        />
      </transition-group>
    </va-list>
  </div>
</template>

<script>
import ContactCard from "./ContactCard.vue";
import useContacts from "../functions/useContacts.js";

export default {
  props: {
    contactList: Array,
    removeContact: Function,
    removeTask: Function,
    editContact: Function,
    addTask: Function,
  },

  components: {
    ContactCard,
  },

  setup() {
    const { getContactsNumber, isContactsListLoading } = useContacts();
    return { getContactsNumber, isContactsListLoading };
  },
};
</script>

<style>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 1s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>