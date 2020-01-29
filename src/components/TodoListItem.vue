<template>
<div class="todo-list-item" >
   <v-list-item  v-if="!displayAll || (displayAll && !todo.checked)"> 
      <v-list-item-content> 
            <v-icon color="green" v-if=item.checked >mdi-peace</v-icon>
            <v-icon color="red" v-if=!item.checked >mdi-nuke</v-icon>
            <v-list-item-title> {{item.title}}</v-list-item-title>
            <v-list-item-subtitle>{{item.subtitle}}</v-list-item-subtitle>
            <v-checkbox v-model=item.checked></v-checkbox> 
          </v-list-item-content>
      </v-list-item>
</div>
</template>

<script>
export default {
data: () => ({

}),

    props:[
        'item',
        'displayAll'
    ]

}
</script>

<style>

</style>