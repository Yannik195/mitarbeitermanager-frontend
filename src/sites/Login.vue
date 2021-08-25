<template>
  <div class="containerr">
    <v-form class="form pa-4 ma-4">
      <h1 class="mb-7 mt-2" v-if="!alert">Welcome back!</h1>
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

      <v-btn class="mt-3" color="primary" @click="login" block>Login</v-btn>
      <v-btn
        class="mt-4"
        text
        small
        color="primary"
        @click="$router.push('signup')"
        >Create account</v-btn
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
          console.log(err.response.status);
          this.errorMessage = err.response.data;
          this.alert = true;
        });
    },
    hide_alert: function () {
      // `event` is the native DOM event
      // window.setInterval(() => {
      //   this.alert = false;
      //   console.log("hide alert after 3 seconds");
      // }, 5000);
    },
  },
  mounted() {
    // if (alert) {
    //   this.hide_alert();
    // }
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

h1 {
}
</style>