<template>
<div class="todo-list-item" >
   <v-list-item  v-if="!displayAll || (displayAll && !todo.checked)"> 
      
            <v-icon color="green" v-if=todo.checked >mdi-peace</v-icon>
            <v-icon color="red" v-if=!todo.checked >mdi-nuke</v-icon>

        <v-list-item-content > 
            <v-list-item-title> {{todo.title}}</v-list-item-title>
            <v-list-item-subtitle>{{todo.subtitle}}</v-list-item-subtitle>
          </v-list-item-content>
           <v-list-item-action>
                <v-checkbox v-model=todo.checked></v-checkbox> 
                <v-btn :to="{name: 'todos-id', params: {id:todo.id}}">Zeigen</v-btn>
            </v-list-item-action>
      </v-list-item>
</div>
</template>

<script>
export default {
data: () => ({

}),

    props:[
        'todo',
        'displayAll'
    ]

}
</script>

<style>

</style>