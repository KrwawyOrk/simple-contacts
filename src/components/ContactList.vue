<template>
  <div>
    <va-alert v-if="contactList.length === 0" color="info" class="mb-4">
      <template #icon>
        <va-icon name="info" />
      </template>
      Your contact list is empty. Press the add contact button.
    </va-alert>

    <va-list v-else>
      <va-list-label> Contacts </va-list-label>
      <transition-group name="list" tag="p">
        <ContactCard
          v-for="contact in contactList"
          :key="contact.id"
          :contact="contact"
          :removeContact="removeContact"
          :editContact="editContact"
          :addTask="addTask"
        />
      </transition-group>
    </va-list>
  </div>
</template>

<script>
import ContactCard from "./ContactCard.vue";

export default {
  props: {
    contactList: Array,
    removeContact: Function,
    editContact: Function,
    addTask: Function,
  },

  components: {
    ContactCard,
  },

  setup() {
 
    return {};
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