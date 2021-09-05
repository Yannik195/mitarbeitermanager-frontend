<template>
  <nav class="desktopnav">
    <span class="logo">MitarbeiterManager</span>
    <ul class="links">
      <li><a href="#">home</a></li>
      <li><a href="#">news</a></li>
      <li><a href="#">logout</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "DesktopNav",
  data() {
    return {};
  },
  logout: function () {
    this.$router.push("/login");
    localStorage.clear();
  },
};
</script>

<style>
.desktopnav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}

.desktopnav .logo {
  font-size: 1.5rem;
}

.desktopnav .links {
}

.desktopnav ul {
  display: flex;
  list-style-type: none;
}

.desktopnav li a {
  text-decoration: none;
  margin: 0.25rem 1rem;
}

.desktopnav li a:hover {
  text-decoration: underline;
}
</style>