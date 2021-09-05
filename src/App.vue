<template>
  <v-app>
    {{ windowWidth }}
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    windowWidth: window.innerWidth,
  }),
  methods: {
    logout: function () {
      this.$router.push("/login");
      localStorage.clear();
    },
    onResize() {
      this.windowWidth = window.innerWidth;
    },
  },
  watch: {},

  mounted() {
    this.$nextTick(() => {
      window.addEventListener("resize", this.onResize);
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.onResize);
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap");
</style>
