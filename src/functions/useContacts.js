import { ref } from "vue";

const useContacts = () => {
  const contactList = ref([]);

  const addContact = ({ id, name, email }) => {
    contactList.value.push({ id, name, email });
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
    const itemIndex = contactList.value.findIndex(
      (contact) => contact.id === id
    );

    if (itemIndex < 0) {
      return;
    }

    contactList.value.splice(itemIndex, 1, { id, name, email });
  };

  return {
    contactList,
    addContact,
    removeContact,
    editContact,
  };
};

export default useContacts;
