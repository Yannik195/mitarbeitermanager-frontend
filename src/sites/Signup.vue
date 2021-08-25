<template>
  <div class="containerr">
    <v-form class="form pa-4 ma-4">
      <h1 class="mb-7 mt-2" v-if="!alert">Sign up!</h1>
      <v-alert class="mb-10" type="error" elevation="3" :value="alert">{{
        errorMessage
      }}</v-alert>

      <v-text-field
        v-model="email"
        outlined
        label="Email"
        append-icon="mdi-email"
        :rules="emailRules"
      >
      </v-text-field>

      <!-- password text field -->
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

      <!-- create account button -->
      <v-btn class="mt-3" color="primary" @click="signup">Create Account</v-btn>

      <!-- redirect to login instead -->
      <v-btn
        class="mt-4"
        text
        small
        color="primary"
        @click="$router.push('login')"
        >Login</v-btn
      >
    </v-form>
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
      alert: false,
      errorMessage: "Error",
    };
  },
  methods: {
    signup: function () {
      // data to be sent to backend server
      const data = { email: this.email, password: this.password };

      // perform api call to create new user
      axios
        .post("http://localhost:3000/auth/signup", data)
        .then((result) => {
          // create variable for token and uid
          const accessToken = result.data.accessToken;
          const uid = result.data.uid;

          // save token and uid to local storage
          localStorage.setItem("access-token", accessToken);
          localStorage.setItem("uid", uid);

          // push to overview
          this.$router.push("/overview");
        })
        .catch((err) => {
          // todo if user already exists show ui message
          console.log(err);
          this.errorMessage = err.response.data;
          this.alert = true;
        });
    },
  },
};
</script>

<style scoped>
.containerr {
  background: url(https://app-cdn.clickup.com/login-bg.fcb221668da96b8a1817.svg)
    bottom/cover no-repeat;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.form {
  box-shadow: 0 25px 75px rgb(16 30 54 / 25%);
  border-radius: 6px;
  display: grid;
  text-align: center;
  justify-content: center;
  background: #ffff;
}
</style>