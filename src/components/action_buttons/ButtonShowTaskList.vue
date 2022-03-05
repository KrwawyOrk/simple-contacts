<template>
  <va-button
    @click="toggleModal"
    icon="mail"
    :rounded="false"
    :disabled="tasks.length !== 0 ? false : true"
    >{{ tasks.length }}</va-button
  >
  <va-modal v-model="showModal" hide-default-actions :overlay="false">
    <template #header>
      <h2>Contact tasks</h2>
    </template>
    <slot>
      <div>You can see current tasks here.</div>
    </slot>
    <template #footer>
      <TaskList :tasks="tasks" :removeTask="removeTask" :toggleModal="toggleModal" />
    </template>
  </va-modal>
</template>

<script>
import useToggleModal from "../../functions/useToggleModal.js";

import TaskList from "../TaskList.vue";

export default {
  props: {
    tasks: Array,
    removeTask: Function,
  },

  components: {
    TaskList,
  },

  setup() {
    const { showModal, toggleModal } = useToggleModal();

    return { showModal, toggleModal };
  },
};
</script>

<style>
</style>