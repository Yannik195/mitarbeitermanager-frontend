<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>MitarbeiterManager</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn target="_blank" text @click="logout">
        <span class="mr-2">Logout</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  methods: {
    logout: function () {
      this.$router.push("/login");
      localStorage.clear();
    },
  },
};
</script>

<style>
</style>
