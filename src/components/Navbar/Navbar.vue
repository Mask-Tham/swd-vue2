<template>
  <div id="navbar">
    <vs-navbar color="#404040" text-color="rgba(255,255,255,.6)" class="navbar">
      <div slot="title">
        <vs-navbar-title text-color="#ffffff"> SENTENANCE </vs-navbar-title>
      </div>
      <div class="item">
        <vs-input icon="search" placeholder="Search" v-model="search" color="#000"/>
        <Navitem :i_con="'list'" />
        <Navitem :i_con="'dashboard'" />
        <Navitem :i_con="'map'" />
      </div>
      <vs-spacer></vs-spacer>
      <div class="item">
        <Navitem :i_con="'notifications'" />
        <Navitem :i_con="'mode_comment'" />

        <vs-navbar-item index="2">
          <a href="#">Hi, admin</a>
        </vs-navbar-item>
        <vs-avatar />
      </div>
    </vs-navbar>
  </div>
</template>

<script>
import Navitem from "./Navitem.vue";
export default {
  components: {
    Navitem,
  },
  data() {
    return {
      search: "",
    };
  },
  mounted() {
      
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  position: fixed;
  // width: 100%;
  // height: max-content;
  // background: #c1c1c1;
  color: #fff;
  padding: 10px;
  justify-content: unset;
}
.vs-spacer {
  width: 50%;
  height: 100%;
}
.vs-navbar--header {
  display: flex;
}
.item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.vs-con-items {
  justify-content: space-between;
  width: 100%;

}
</style>