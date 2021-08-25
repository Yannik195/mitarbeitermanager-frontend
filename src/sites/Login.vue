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
  width: 100vw;
  height: 100vh;
  background-color: #ee5522;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 200 200'%3E%3Cdefs%3E%3ClinearGradient id='a' gradientUnits='userSpaceOnUse' x1='100' y1='33' x2='100' y2='-3'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' gradientUnits='userSpaceOnUse' x1='100' y1='135' x2='100' y2='97'%3E%3Cstop offset='0' stop-color='%23000' stop-opacity='0'/%3E%3Cstop offset='1' stop-color='%23000' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23d23d09' fill-opacity='0.6'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect y='100' width='100' height='100'/%3E%3C/g%3E%3Cg fill-opacity='0.5'%3E%3Cpolygon fill='url(%23a)' points='100 30 0 0 200 0'/%3E%3Cpolygon fill='url(%23b)' points='100 100 0 130 0 100 200 100 200 130'/%3E%3C/g%3E%3C/svg%3E");
}
</style>