import { ref } from "vue";

const useContacts = () => {
  const contactList = ref([]);

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

  const editContact = ({ id, name, email }) => {
    const contact = contactList.value.find((contact) => contact.id === id);

    contact.name = name;
    contact.email = email;
  };

  return {
    contactList,
    addContact,
    addTask,
    removeContact,
    editContact,
  };
};

export default useContacts;