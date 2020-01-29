<template>
  <v-container>
    <v-layout text-center wrap>

<div class="todo-list">
  <div v-if="displayAll">Alle werden angezeigt</div>
  <div v-if="!displayAll">Offene werden angezeigt</div>
      <v-list >
        <v-list-item v-for="item in getTodos" :key="item.id">
          <todo-list-item :item = "item"/>
        </v-list-item>
      </v-list>
</div>

    <div><v-switch v-model=displayAll></v-switch> Alle Anzeigen </div>
     

    </v-layout>
  </v-container>
</template>

<script>
import TodoListItem from './TodoListItem';

export default {
  name: 'TodoList',

  components: {
    TodoListItem,
  },

  data: () => ({
   displayAll: false,

   todos: [
   { id: 1, title: "Um 17 Uhr gehen", subtitle: "dringend", checked: true},
   { id: 2, title: "Um 9 Uhr gehen", subtitle: "dringend", checked: false},
   { id: 3, title: "Um 99 Uhr gehen", subtitle: "dringend", checked: false}
    ]
  }),

  computed: {
    getTodos() {
      if ( this.displayAll) {
        return this.todos;

      } else {
        return this.todos.filter( item => !item.checked)
      }
    }
  }

};
</script>

<style lang="scss">

</style>
