import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "Kick Ass", subtitle: "dringend", checked: true},
      { id: 2, title: "Chew Bubblegum", subtitle: "dringend", checked: false},
      { id: 3, title: "Groovey", subtitle: "dringend", checked: false},
      { id: 4, title: "Consider this a divorce", subtitle: "dringend", checked: false}
       ],
       displayAll: true
  },
  getters: {
    getAllTodos: state => state.todos,
    getDoneTodos: state => state.todos.filter(item => !item.checked),
    getDisplayAll: state => state.displayAll
  },
  mutations: {
    setDisplayAll(state, value) {
      state.displayAll = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
