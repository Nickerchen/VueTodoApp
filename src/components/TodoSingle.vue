<template>
  <v-container>
      ID: {{id}} 

      <v-btn :to="{name: 'todos'}">Zurück</v-btn>

  </v-container>
</template>

<script>
export default {
name: 'TodoSingle',
components: {},

props:[
    'id'
]
}
</script>

<style>

</style>