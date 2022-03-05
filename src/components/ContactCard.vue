<template>
  <va-list-item>
    <va-list-item-section avatar>
      <va-avatar>
        <va-icon name="person" />
      </va-avatar>
    </va-list-item-section>

    <va-list-item-section>
      <va-list-item-label>
        {{ contact.name }}
      </va-list-item-label>

      <va-list-item-label caption>
        {{ contact.email }}
      </va-list-item-label>
    </va-list-item-section>

    <va-list-item-section icon>
      <va-button-group :rounded="false">
        <ButtonShowTaskList :tasks="contact.tasks" :removeTask="removeTask" />
        <ButtonAddTask :addTask="addTask" :contactID="contact.id" />
        <ButtonEditContact :editContact="editContact" :contact="contact" />
        <ButtonRemoveContact
          :removeContact="removeContact"
          :contactID="contact.id"
        />
      </va-button-group>
    </va-list-item-section>
  </va-list-item>
</template>

<script>
import ButtonEditContact from "./action_buttons/ButtonEditContact.vue";
import ButtonRemoveContact from "./action_buttons/ButtonRemoveContact.vue";
import ButtonAddTask from "./action_buttons/ButtonAddTask.vue";
import ButtonShowTaskList from "./action_buttons/ButtonShowTaskList.vue";

export default {
  props: {
    contact: Object,
    removeContact: Function,
    removeTask: Function,
    editContact: Function,
    addTask: Function,
  },

  components: {
    ButtonEditContact,
    ButtonRemoveContact,
    ButtonAddTask,
    ButtonShowTaskList,
  },

  setup() {
    return {};
  },
};
</script>

<style>
.contact-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.5rem 0.5rem;
  margin: 0.3rem 0;
}

.right-side {
  display: flex;
  align-items: center;
}
</style>