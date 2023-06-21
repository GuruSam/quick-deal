<template>
  <div class="tasks-list d-flex flex-column justify-content-center">
    <h1 class="mb-4">Список задач</h1>

    <b-list-group v-if="tasks.length" class="mb-5">
      <b-list-group-item v-for="task in tasks" :key="task.id" :variant="task.color" class="text-left d-flex justify-content-between" button @click="onTaskClick(task.id)">
        {{ task.text }}
        <b-icon-x class="task-remove-icon" variant="danger" @click="onRemoveClick(task.id)"></b-icon-x>
      </b-list-group-item>
    </b-list-group>

    <p v-else class="text-muted mb-5">Задачи не найдены.</p>

    <TaskForm :task="task" @submit="onSubmit" />
  </div>
</template>

<script>
import TaskForm from '../components/TaskForm'
import { mapActions } from 'vuex'

export default {
  name: 'TasksList',

  components: { TaskForm },

  data () {
    return {
      task: {
        text: null,
        color: null
      },

      colorOptions: ['primary', 'success', 'danger', 'warning', 'info']
    }
  },

  computed: {
    tasks () {
      return this.$store.state.tasks
    }
  },

  created () {
    if (!this.tasks.length) {
      const tasks = JSON.parse(localStorage.getItem('tasks')) ?? []
      this.setTasks(tasks)
    }
  },

  methods: {
    ...mapActions([
      'setTasks',
      'removeTask'
    ]),

    onTaskClick (id) {
      const task = this.tasks.find(task => task.id === id)

      if (task) {
        this.task = { ...task }
      }
    },

    onRemoveClick (id) {
      this.removeTask(id)
    },

    onSubmit () {
      // Reset task to defaults
      this.task = {
        text: null,
        color: null
      }
    }
  }
}
</script>

<style>
.tasks-list,
.task-form {
  width: 100%;
}

.tasks-list {
  padding: 15px;
}

.task-remove-icon {
  font-size: 1.3em;
}

@media (min-width: 900px) {
  .tasks-list {
    width: 500px;
  }
}
</style>
