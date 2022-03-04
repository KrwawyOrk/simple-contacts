<template>
  <div>
    <va-form style="width: 300px" tag="form" @submit.prevent="handleEdit">
      <div>
        <va-input v-model="name" label="Username" />
        <va-input v-model="email" class="mt-4" label="Email" />
        <div class="edit-contact-form-buttons mt-4">
          <va-button
            @click="toggleModal"
            icon="done"
            color="info"
            class="mx-2"
            :rounded="false"
          >
            Cancel
          </va-button>
          <va-button
            type="submit"
            icon="edit"
            color="danger"
            class="mx-2"
            :rounded="false"
          >
            Edit
          </va-button>
        </div>
      </div>
    </va-form>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";

export default {
  props: {
    contact: Object,
    editContact: Function,
    toggleModal: Function,
  },

  setup(props) {
    const id = ref("");
    const name = ref("");
    const email = ref("");

    onMounted(() => {
      id.value = props.contact.id;
      name.value = props.contact.name;
      email.value = props.contact.email;
    });

    const handleEdit = () => {
      props.editContact({
        id: id.value,
        name: name.value,
        email: email.value,
      });

      props.toggleModal();
    };

    return { name, email, handleEdit };
  },
};
</script>

<style>
.edit-contact-form-buttons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
</style>