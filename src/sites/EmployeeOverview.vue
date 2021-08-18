<template>
  <div>
    <h1>This is the Overview</h1>

    <router-link to="/add">
      <v-btn elevation="2" fab>
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "EmployeeOverview",
};
</script>

<style>
</style>