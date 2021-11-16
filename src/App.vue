<template>
  <div id="app">
    <Navbar />
    <Sidebar />
    <div id="content" class="content">
      <router-view />
    </div>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
import Navbar from "@/components/Navbar/Navbar.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
  mounted() {
    
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.vs-con-items {
  justify-content: space-between;
  width: 100%;
}

.content {
  position: relative;
  top: 60px;
  margin: 0px 0px 0px 250px;
  padding: 10px;
  // width: 100%;
  height: calc(100vh - 60px);
  background: #d1d1d1;
}
</style>
