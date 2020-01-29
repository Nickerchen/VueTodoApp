<template>
  <div>
      <h2> Single Todo  </h2>
      <TodoSingle :id="id"/>
  </div>
</template>

<script>
import TodoSingle from "@/components/TodoSingle";
export default {
    components: {
    TodoSingle
},
computed: {
  id() {
    return this.$route.params.id;
  },
}
}
</script>

<style>

</style>