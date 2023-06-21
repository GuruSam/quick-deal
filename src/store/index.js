import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: JSON.parse(localStorage.getItem('tasks')) ?? [],
  currentTask: {
    text: null,
    color: null
  }
}

const mutations = {
  setTasks: (state, payload) => {
    state.tasks = payload
  },

  addTask: state => {
    const newTask = { ...state.currentTask }
    newTask.id = state.tasks.length + 1
    state.tasks.push(newTask)
    state.currentTask = { text: null, color: null }
  },

  setCurrentTask: (state, payload) => {
    state.currentTask = payload
  },

  removeTask: (state, id) => {
    state.tasks = state.tasks.filter(task => task.id !== id)
  },

  updateTask: (state) => {
    state.tasks = state.tasks.map(task => task.id == state.currentTask.id ? state.currentTask : task)
    state.currentTask = { text: null, color: null }
  }
}

const actions = {
  setTasks: (ctx, payload) => ctx.commit('setTasks', payload),
  addTask: (ctx, payload) => ctx.commit('addTask', payload),
  updateTask: (ctx, payload) => ctx.commit('updateTask', payload),
  removeTask: (ctx, payload) => ctx.commit('removeTask', payload),
  setCurrentTask: (ctx, payload) => ctx.commit('setCurrentTask', payload)
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

store.subscribe((mutation, state) => {
  localStorage.setItem('tasks', JSON.stringify(state.tasks))
})

export default store
