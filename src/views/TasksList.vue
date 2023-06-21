<template>
  <div class="tasks-list d-flex flex-column justify-content-center">
    <h1 class="mb-4">Список задач</h1>
    <TaskListGroup />
    <TaskForm />
  </div>
</template>

<script>
import TaskListGroup from '../components/TaskListGroup'
import TaskForm from '../components/TaskForm'

export default {
  name: 'TasksList',

  components: { TaskForm, TaskListGroup }
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
