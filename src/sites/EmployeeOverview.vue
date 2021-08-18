<template>
  <div>
    <h1>This is the Overview</h1>
    {{ response.data }}

    <router-link to="/add">
      <v-btn elevation="2" fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "EmployeeOverview",
  data() {
    return {
      name: "Yannik",
      lastname: "Simon",
      response: null,
    };
  },
  computed: {},
  watch: {},
  mounted() {
    axios
      .get("http://localhost:3000/employees/")
      .then((response) => (this.response = response));
  },
};
</script>

<style>
</style>