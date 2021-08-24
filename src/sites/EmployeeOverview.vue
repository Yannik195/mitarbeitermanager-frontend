<template>
  <div>
    <v-text-field
      class="ma-3"
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      solo
    ></v-text-field>

    <v-data-table
      :headers="headers"
      :items="response.data"
      :items-per-page="20"
      :search="search"
      hide-default-footer
      class="elevation-1 ma-3"
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
const router = require("../main.js");

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
        { text: "Gender", sortable: false, value: "gender" },
        { text: "Birthdate", sortable: false, value: "birthdate" },
        { text: "E-Mail", sortable: false, value: "email" },
        { text: "Position", sortable: false, value: "position" },
        { text: "Phone", sortable: false, value: "phone" },
        { text: "Street", sortable: false, value: "street" },
        { text: "Number", sortable: false, value: "number" },
        { text: "Postcode", sortable: false, value: "postcode" },
        { text: "Country", sortable: false, value: "country" },
      ],
      search: "",
    };
  },
  computed: {},
  watch: {},
  methods: {
    getEmployees: function () {
      console.log("getEmployees" + this.$store.state.accessToken);
      const config = {
        headers: { authorization: this.$store.state.accessToken },
      };
      axios
        .get("http://localhost:3000/employees/", config)
        .then((response) => (this.response = response));
    },
    getUserData: function () {
      console.log("overview: " + this.$store.state.accessToken);
      let self = this;
      const config = {
        headers: { authorization: this.$store.state.accessToken },
      };
      axios
        .get("http://localhost:3000/auth/", config)
        .then((response) => {
          console.log(response);
          self.$set(this, "user", response.data.user);
        })
        .catch((errors) => {
          console.log(errors);
          router.push("/");
        });
    },
  },
  mounted() {
    // this.getUserData();
    this.getEmployees();
  },
};
</script>

<style>
.btn {
  float: right;
  position: fixed;
}
</style>