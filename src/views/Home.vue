<template>
  <div class="home">
    <h1>Getting shit done</h1>
    
    <HelloWorld msg="Welcome to Your Vue.js App"/>
      <!-- <TodoList/> -->
  </div>
  
</template>

<script>
// @ is an alias to /src
// import TodoList from '@/components/TodoList.vue'
import { mapGetters } from "vuex";

export default {
  name: 'home',
  components: {
    ...mapGetters({
      displayAll: "getDisplayAll"
    })

  }
}
</script>
