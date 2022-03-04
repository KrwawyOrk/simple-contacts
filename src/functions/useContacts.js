import { ref } from "vue";

const useContacts = () => {
  const contactList = ref([]);

  const addContact = ({ id, name, email }) => {
    contactList.value.push({ id, name, email, tasks: [] });

    console.log(contactList.value);
  };

  const addTask = (contactID, { id, title, description }) => {
    const contact = contactList.value.find(
      (contact) => contact.id === contactID
    );

    //contact.tasks = [...contact.tasks, { id, title, description }];
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

// [
//   { id: "123123123", name: "Damian", email: "Damian@gmail.com" },
//   {
//     id: "232232312",
//     name: "Ernest",
//     email: "Ernest@gmail.com",
//     tasks: {
//       id: "jkdu2j82j",
//       title: "Oddaj ksiazke",
//       description: "pozyczyl ksiazke i nie oddal!",
//     },
//   },
//   { id: "1232522z4", name: "Kamila", email: "Kamila@gmail.com" },
// ];
