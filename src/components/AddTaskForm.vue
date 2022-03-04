<template>
  <div>
    <va-form
      style="width: 300px"
      tag="form"
      @submit.prevent="handleSubmitTask"
      class="add-contact-form"
    >
      <va-input
        v-model="title"
        label="Title"
        placeholder="task title"
        required
      />
      <va-input
        v-model="description"
        label="Description"
        placeholder="task description"
        required
        class="mt-4"
      />
      <div class="buttons mt-4">
        <va-button type="submit" icon="add_task" :rounded="false">
          Add
        </va-button>
        <va-button @click="toggleModal" icon="done" :rounded="false">
          Cancel
        </va-button>
      </div>
    </va-form>
  </div>
</template>

<script>
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    addTask: Function,
    contactID: String,
    toggleModal: Function,
  },

  setup(props) {
    const title = ref("");
    const description = ref("");

    const handleSubmitTask = () => {
      if (title.value === "" || description.value === "") {
        alert("You must fill in the form!");
        return;
      }

      const newTask = {
        id: uuidv4(),
        title: title.value,
        description: description.value,
      };

      props.addTask(props.contactID, newTask);

      title.value = "";
      description.value = "";

      props.toggleModal();
    };

    return { title, description, handleSubmitTask };
  },
};
</script>

<style>
.buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>