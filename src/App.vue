<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
  Todo Demo Vue App
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-content>
      <TodoSearch/>
      <TodoList/>
      <TodoForm/>
    </v-content>
  </v-app>
</template>

<script>
import TodoList from './components/TodoList';

export default {
  name: 'App',

  components: {
    TodoList,
  },

  data: () => ({
    
  }),
};
</script>
