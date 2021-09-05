<template>
  <v-app>
    <DesktopNav v-if="windowWidth >= 600"></DesktopNav>
    <MobileNav v-else></MobileNav>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import DesktopNav from "./components/DesktopNav.vue";
import MobileNav from "./components/MobileNav.vue";

export default {
  name: "App",

  components: {
    DesktopNav,
    MobileNav,
  },

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
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap");

html {
  font-family: "Nunito", sans-serif;
  font-weight: 400;
}
</style>
