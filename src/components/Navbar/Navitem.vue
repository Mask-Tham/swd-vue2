<template>
  <!-- <vs-navbar-item index="0"> -->
        <vs-button
          color-text="rgb(255, 255, 255)"
          color="rgba(255, 255, 255, 0.3)"
          type="flat"
          :icon="i_con"
        ></vs-button>
      <!-- </vs-navbar-item> -->
</template>

<script>
export default {
    props:{
        i_con: String
    },
    data() {
        return {
            
        }
    },
    mounted() {
        // console.log("i_con",this.i_con)
    },
}
</script>

<style>

</style>