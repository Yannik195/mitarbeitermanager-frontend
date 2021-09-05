<template>
  <nav class="mobilenavwrapper">
    <div class="mobilenav">
      <span>MitarbeiterManager</span>
      <i
        class="fas fa-bars"
        @click="showfullscreenmenu = !showfullscreenmenu"
      ></i>
    </div>
    <div class="fullscreennav" v-if="showfullscreenmenu">
      <i
        class="fas fa-times close"
        @click="showfullscreenmenu = !showfullscreenmenu"
      ></i>
      <ul class="links">
        <li><a href="#">home</a></li>
        <li><a href="#">news</a></li>
        <li><a href="#">logout</a></li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "MobileNav",
  data() {
    return {
      showfullscreenmenu: false,
    };
  },
};
</script>

<style>
.mobilenavwrapper {
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
}
.mobilenav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
}

.mobilenav span {
  font-size: 1.5rem;
}

.fullscreennav {
  background-color: #fff;
  height: 100vh;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.fullscreennav ul {
  list-style-type: none;
  text-align: center;
}

.fullscreennav a {
  text-decoration: none;
}

.close {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2rem;
}

.mobilenav i,
.fullscreennav i {
  font-size: 1.5rem;
}
</style>