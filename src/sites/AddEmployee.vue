<template>
  <v-form v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <!-- Gender -->
          <v-select
            v-model="gender"
            :items="genderlist"
            :error-messages="errors"
            label="Gender"
            data-vv-name="select"
            required
          ></v-select>
        </v-col>

        <v-col>
          <!-- Birthday -->
          <v-menu
            ref="menu"
            v-model="menu"
            :close-on-content-click="false"
            transition="scale-transition"
            offset-y
            min-width="auto"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="birthdate"
                label="Birthdate"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
              ></v-text-field>
            </template>
            <v-date-picker
              v-model="birthdate"
              :active-picker.sync="activePicker"
              :max="
                new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                  .toISOString()
                  .substr(0, 10)
              "
              min="1950-01-01"
              @change="save"
            ></v-date-picker>
          </v-menu>
        </v-col>
      </v-row>

      <!-- //Salary -->
      <v-autocomplete
        v-model="salary"
        label="Salary"
        prefix="€"
        :items="[
          '10.000',
          '20.000',
          '30.000',
          '40.000',
          '50.000',
          '60.000',
          '70.000',
        ]"
      >
      </v-autocomplete>

      <!-- Position -->
      <v-autocomplete
        v-model="position"
        :items="['Accountant', 'CEO', 'Web Developer']"
        label="Position"
      ></v-autocomplete>

      <v-row>
        <v-col>
          <!-- Submit -->
          <router-link to="/overview">
            <v-btn
              class="ma-2"
              @click="postEmployee"
              color="primary"
              style="float: right"
            >
              Add Employee
            </v-btn>
          </router-link>
          <!-- Cancel -->
          <router-link to="/overview">
            <v-btn class="ma-2" color="grey" style="float: right">
              Cancel
            </v-btn>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => v.length <= 10 || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+/.test(v) || "E-mail must be valid",
    ],
    genderlist: ["Male", "Female", "Diverse"],
    gender: null,
    activePicker: null,
    birthdate: null,
    menu: false,
    employeesince: null,
  }),
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  methods: {
    save(date) {
      this.$refs.menu.save(date);
    },
    postEmployee: function () {
      axios
        .post("http://localhost:3000/employees/", {
          firstname: this.firstname,
          lastname: this.lastname,
          email: this.email,
          gender: this.gender,
          birthdate: this.birthdate,
          salary: this.salary,
          position: this.position,
          street: "Augustenstraße",
          number: 37,
          postcode: 70178,
          country: "Germany",
          phone: 2453453513,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>