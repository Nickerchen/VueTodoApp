<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
    <v-btn to="/">Start</v-btn>
    <v-btn to="/todos">Todos</v-btn>
       Todo Demo Vue App
    </v-app-bar>

    <v-content>

      
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    
  }),
};
</script>
