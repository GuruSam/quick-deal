<template>
  <b-form class="task-form text-left" @submit.prevent="onSubmit">
    <b-form-group
      :label="formLabel"
      invalid-feedback="Заполните поле"
    >
      <b-form-input
        class="mb-3"
        id="task-text"
        v-model="task.text"
        type="text"
        placeholder="Опишите задачу"
        required
      ></b-form-input>
    </b-form-group>

    <div class="mb-3">
      <b-button 
        v-for="color in colorOptions" 
        :key="color" 
        class="mr-2" 
        :variant="task.color === color ? color : 'outline-' + color" 
        size="sm" 
        @click="onColorClick(color)"
      >
        {{ color }}
      </b-button>
    </div>

    <b-button type="submit">{{ isEdit ? 'Сохранить' : 'Создать' }}</b-button>
  </b-form>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TaskForm',

  data () {
    return {
      colorOptions: ['primary', 'success', 'danger', 'warning', 'info']
    }
  },

  computed: {
    task () {
      return this.$store.state.currentTask
    },

    isEdit () {
      return this.task.id !== undefined
    },

    formLabel () {
      return this.isEdit ? 'Редактировать задачу' : 'Добавить задачу'
    }
  },

  methods: {
    ...mapActions([
      'addTask',
      'updateTask'
    ]),

    onSubmit () {
      if (this.isEdit) {
        this.updateTask()
      } else {
        this.addTask()
      }
    },

    onColorClick (color) {
      this.task.color = color
    }
  }
}
</script>
