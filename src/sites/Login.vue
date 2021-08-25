<template>
  <div class="container">
    <v-card class="card py-8 px-4 ma-4">
      <v-form>
        <v-text-field
          v-model="email"
          outlined
          label="Email"
          append-icon="mdi-email"
          :rules="emailRules"
        >
        </v-text-field>

        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          outlined
        ></v-text-field>

        <v-btn class="mr-2" color="primary" @click="login">Login</v-btn>
        <v-btn text color="primary" @click="$router.push('signup')"
          >Create account</v-btn
        >
      </v-form>
    </v-card>
    <div class="bg"></div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      show1: false,
      show2: true,
      show3: false,
      show4: false,
      password: "",
      email: "",
      rules: {
        required: (value) => !!value || "Password is required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
    };
  },
  methods: {
    login: function () {
      // data to be sent to backend server
      const data = { email: this.email, password: this.password };

      // perform rest api call
      axios
        .post("http://localhost:3000/auth/login", data)
        .then((result) => {
          // create variables for token and uid
          const accessToken = result.data.accessToken;
          const uid = result.data.uid;

          // Save token in vuex
          this.$store.commit("updateAccessToken", { accessToken });

          // redirect to overview
          this.$router.push("/overview");

          // Save token and uid in local storage
          localStorage.setItem("access-token", accessToken);
          localStorage.setItem("uid", uid);
        })
        // log error: wrong email / password
        // todo show ui what went wrong
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>