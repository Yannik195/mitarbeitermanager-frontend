<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <h2>MitarbeiterManager</h2>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <Form />
    </v-main>
  </v-app>
</template>

<script>
import Form from "./components/Form";

export default {
  name: "App",

  components: {
    Form,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
</style>
