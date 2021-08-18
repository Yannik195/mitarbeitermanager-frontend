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
        { text: "Birthdate", sortable: false, value: "birthdate" },
        { text: "E-Mail", sortable: false, value: "email" },
        { text: "Gender", sortable: false, value: "gender" },
        { text: "Street", sortable: false, value: "street" },
        { text: "Number", sortable: false, value: "number" },
        { text: "Postcode", sortable: false, value: "postcode" },
        { text: "Country", sortable: false, value: "country" },
        { text: "Phone", sortable: false, value: "phone" },
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