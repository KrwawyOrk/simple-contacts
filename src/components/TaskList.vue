 <template>
  <div>
    <div class="va-table-responsive">
      <table class="va-table va-table--hoverable">
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="task in tasks" :key="task.id">
            <td>{{ task.title }}</td>
            <td class="description">
              <p class="mr-2">
                {{ task.description }}
              </p>
              <va-button
                @click="handleRemoveTask(task.id)"
                icon="done"
                size="small"
                color="info"
                :rounded="false"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <va-button @click="toggleModal" icon="done" :rounded="false" class="mt-2">
      Ok
    </va-button>
  </div>
</template>

<script>
export default {
  props: {
    tasks: Array,
    removeTask: Function,
    toggleModal: Function,
  },

  setup(props) {
    const handleRemoveTask = (id) => {
      const { tasks, removeTask, toggleModal } = props;
      removeTask(id, tasks);

      if(tasks.length === 0) {
          toggleModal();
      }
    };

    return { handleRemoveTask };
  },
};
</script>

<style>
.description {
  display: flex;
  justify-content: space-between;
}
</style>