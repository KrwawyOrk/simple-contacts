import { ref } from "vue";

const useToggleModal = () => {
  const showModal = ref(false);

  const toggleModal = () => {
    showModal.value = !showModal.value;
  };

  return {
    showModal,
    toggleModal,
  };
};

export default useToggleModal;
