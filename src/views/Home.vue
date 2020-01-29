<template>
  <div class="home">
    Hallo
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <TodoList/>
  </div>
  
</template>

<script>
// @ is an alias to /src
import TodoList from '@/components/TodoList.vue'

export default {
  name: 'home',
  components: {
    TodoList
  }
}
</script>
