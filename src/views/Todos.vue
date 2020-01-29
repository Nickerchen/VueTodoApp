<template>
  <div>
      <h1>Alle Aufgaben </h1>
            <TodoSearch/>
            <TodoList/>
            <TodoForm/> 

          </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
components: {
    TodoList 
    } 
}
</script>

<style>

</style>