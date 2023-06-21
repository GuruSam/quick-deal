import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tasks: []
}

const mutations = {
  setTasks: (state, payload) => {
    state.tasks = payload
  },

  addTask: (state, payload) => {
    const newTask = { ...payload }
    newTask.id = state.tasks.length + 1

    state.tasks.push(newTask)
  },

  removeTask: (state, id) => {
    state.tasks = state.tasks.filter(task => task.id !== id)
  },

  updateTask: (state, payload) => {
    state.tasks = state.tasks.map(task => task.id == payload.id ? payload : task)
  }
}

const actions = {
  setTasks: (ctx, payload) => ctx.commit('setTasks', payload),
  addTask: (ctx, payload) => ctx.commit('addTask', payload),
  updateTask: (ctx, payload) => ctx.commit('updateTask', payload),
  removeTask: (ctx, payload) => ctx.commit('removeTask', payload)
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
