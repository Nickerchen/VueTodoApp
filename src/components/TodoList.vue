<template>
  <v-container>
    <v-layout text-center wrap>

<div class="todo-list">
  <div v-if="displayAll">Alle werden angezeigt</div>
  <div v-if="!displayAll">Offene werden angezeigt</div>
      <v-list >
        <v-list-item v-for="todo in getTodos" :key="todo.id">
          <todo-list-item :todo = "todo"/>
        </v-list-item>
      </v-list>
</div>

    <div><v-switch v-model="displayAll" :label="displayAll ? 'Nur offene Todo anzeigen' : 'Alle Todo Anzeigen'"></v-switch></div>
     

    </v-layout>
  </v-container>
</template>

<script>
import TodoListItem from './TodoListItem';
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: 'TodoList',

  components: {
    
    TodoListItem,
  },

  data: () => ({

  }),

  computed: {
    displayAll: {
    get() {
      return this.$store.state.displayAll;
    },
    set(value) {
      this.$store.commit("setDisplayAll", value);
    }
    },
...mapGetters({
        todos: "getAllTodos",
        doneTodos: "getDoneTodos",
    }),
    getTodos() {
      return this.displayAll ? this.todos : this.doneTodos;
    }
  
  },
  methods: {
    ...mapActions(["toggleDisplayAll"])
  }

};
</script>

<style lang="scss">

</style>
