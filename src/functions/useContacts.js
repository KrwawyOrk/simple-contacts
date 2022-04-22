import { reactive, ref, onMounted, watch, computed } from "vue";


const contactList = ref([]);

const state = reactive({
  loadingContactsList: false,
});

const useContacts = () => {
  onMounted(() => {
    state.loadingContactsList = true;
    const data = JSON.parse(localStorage.getItem("vue_simplecontacts"));

    if (data) {
      setTimeout(() => {
        contactList.value = data;
        state.loadingContactsList = false;
      }, 2000);
    }
  });

  watch(
    () => [...contactList.value],
    () => {
      localStorage.setItem(
        "vue_simplecontacts",
        JSON.stringify(contactList.value)
      );
    },
    { deep: true }
  );

  const getContactsNumber = computed(() => contactList.value.length);
  const isContactsListLoading = computed(() => state.loadingContactsList);

  const addContact = ({ id, name, email }) => {
    contactList.value.push({ id, name, email, tasks: [] });
  };

  const addTask = (contactID, { id, title, description }) => {
    const contact = contactList.value.find(
      (contact) => contact.id === contactID
    );

    contact.tasks.push({ id, title, description });
  };

  const removeContact = (id) => {
    const itemIndex = contactList.value.findIndex(
      (contact) => contact.id === id
    );

    if (itemIndex < 0) {
      return;
    }

    contactList.value.splice(itemIndex, 1);
  };

  const removeTask = (id, tasks) => {
    const itemIndex = tasks.findIndex((task) => task.id === id);
    if (itemIndex < 0) {
      return;
    }

    tasks.splice(itemIndex, 1);
  };

  const editContact = ({ id, name, email }) => {
    const contact = contactList.value.find((contact) => contact.id === id);

    contact.name = name;
    contact.email = email;
  };

  return {
    contactList,
    state,
    isContactsListLoading,
    getContactsNumber,
    addContact,
    addTask,
    removeContact,
    removeTask,
    editContact,
  };
};

export default useContacts;
