<template>
  <div class="parentx-static">
    <vs-sidebar
      parent="#sidebarnav"
      default-index="1"
      color="success"
      class="sidebarx"
      spacer
      v-model="active"
      :hidden-background="true"
    >
      <vs-sidebar-item index="1" icon="question_answer" to="/">
        Overview
      </vs-sidebar-item>

      <vs-sidebar-item index="2" icon="description" to="/"> Report </vs-sidebar-item>

      <vs-sidebar-item icon="map" index="3" to="/"> Map </vs-sidebar-item>

      <vs-sidebar-item icon="explore" index="4" to="/">
        Location
      </vs-sidebar-item>

      <vs-sidebar-group title="Device Mamagement" :open="true">
        <vs-sidebar-item icon="signal_cellular_alt" index="5" to="/">
          Sensor
        </vs-sidebar-item>

        <vs-sidebar-item icon="router" index="6" to="/">
          Gateway
        </vs-sidebar-item>

        <vs-sidebar-item icon="photo_camera" index="7" to="/">
          Camera
        </vs-sidebar-item>
      </vs-sidebar-group>

      <!-- <vs-divider /> -->

      <vs-sidebar-group title="Manage Work" :open="true">
        <vs-sidebar-item index="8" icon="work" to="/work-management">
          Work Management
        </vs-sidebar-item>
        <vs-sidebar-item index="9" icon="assignment" to="/">
          Work Status
        </vs-sidebar-item>
      </vs-sidebar-group>
      <!-- <vs-divider /> -->

      <vs-sidebar-group title="Setting" :open="true">
        <vs-sidebar-item icon="new_releases" index="10" to="/">
          Alert
        </vs-sidebar-item>

        <vs-sidebar-item icon="wifi" index="11" to="/">
          Network
        </vs-sidebar-item>

        <vs-sidebar-item icon="explore" index="12" to="/">
          Location Setting
        </vs-sidebar-item>
        <vs-sidebar-item icon="person" index="13" to="/">
          User
        </vs-sidebar-item>
        <vs-sidebar-item icon="person" index="14" to="/">
          Permission Setting
        </vs-sidebar-item>
        <vs-sidebar-item icon="insert_drive_file" index="15" to="/">
          Form
        </vs-sidebar-item>
      </vs-sidebar-group>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: true,
    };
  },
  mounted() {},
};
</script>

<style lang="scss" scoped>
.parentx-static {
  height: calc(100% - 60px);
  top: 60px;
  position: fixed;
  width: 250px;
  background: #fff;
}
.scrollba {
  &::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgb(144, 255, 140);
  }

  &::-webkit-scrollbar-track {
    background: rgb(144, 255, 140);
  }
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
</style>