<template>
  <div>
    <va-form
      style="width: 300px"
      tag="form"
      @submit.prevent="handleSubmitContact"
      class="add-contact-form"
    >
      <va-input
        v-model="name"
        label="Contact name"
        type="text"
        autocomplete="tel"  
        placeholder="contact name"
        required
      />
      <va-input
        v-model="email"
        label="Email"
        type="text"
        autocomplete="tel"  
        placeholder="contact email"
        required
        class="mt-4"
      />
      <div class="buttons mt-4">
        <va-button type="submit" icon="person_add" :rounded="false">
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
    addContact: Function,
    toggleModal: Function,
  },

  setup(props) {
    const name = ref("");
    const email = ref("");

    const handleSubmitContact = () => {
      if (name.value === "" || email.value === "") {
        alert("You must fill in the form!");
        return;
      }

      const newContact = {
        id: uuidv4(),
        name: name.value,
        email: email.value,
      };

      props.addContact(newContact);

      name.value = "";
      email.value = "";

      props.toggleModal();
    };

    return { name, email, handleSubmitContact };
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