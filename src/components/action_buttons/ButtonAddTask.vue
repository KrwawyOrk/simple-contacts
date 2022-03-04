<template>
  <va-button
    @click="toggleModal"
    icon="add_task"
    color="info"
    size="small"
    :rounded="false"
  />
  <va-modal v-model="showModal" hide-default-actions overlay-opacity="0.3">
    <template #header>
      <h2>Add task</h2>
    </template>
    <slot>
      <div>You can add a new task here.</div>
    </slot>
    <template #footer>
      <AddTaskForm :addTask="addTask" :contactID="contactID" :toggleModal="toggleModal" />
    </template>
  </va-modal>
</template>

<script>
import useToggleModal from "../../functions/useToggleModal.js";
import AddTaskForm from "../AddTaskForm.vue";

export default {
  components: {
    AddTaskForm,
  },

  props: {
    addTask: Function,
    contactID: String,
  },

  setup() {
    const { showModal, toggleModal } = useToggleModal();

    return { showModal, toggleModal };
  },
};
</script>

<style>
</style>