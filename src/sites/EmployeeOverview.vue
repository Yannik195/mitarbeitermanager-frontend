<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="response.data"
      :items-per-page="20"
    >
    </v-data-table>

    <router-link to="/add">
      <v-btn class="btn" elevation="2" fab>
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
      response: null,

      // Table Headers
      headers: [
        {
          text: "Firstname",
          align: "start",
          sortable: false,
          value: "firstname",
        },
        { text: "Lastname", sortable: false, value: "lastname" },
        { text: "Age", sortable: false, value: "age" },
        { text: "E-Mail", sortable: false, value: "email" },
      ],
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
.btn {
  float: right;
  position: fixed;
}
</style>