<template>
  <div>
    <b-list-group v-if="tasks.length" class="mb-5">
      <b-list-group-item v-for="task in tasks" :key="task.id" :variant="task.color" class="text-left d-flex justify-content-between" button @click="onTaskClick(task.id)">
        {{ task.text }}
        <b-icon-x class="task-remove-icon" variant="danger" @click="onRemoveClick(task.id)"></b-icon-x>
      </b-list-group-item>
    </b-list-group>

    <p v-else class="text-muted mb-5">Задачи не найдены.</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TaskListGroup',

  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },

  methods: {
    ...mapActions([
      'setCurrentTask',
      'removeTask'
    ]),

    onTaskClick (id) {
      const task = this.tasks.find(task => task.id === id)
      this.setCurrentTask({ ...task })
    },

    onRemoveClick (id) {
      this.removeTask(id)
    },
  }
}
</script>
