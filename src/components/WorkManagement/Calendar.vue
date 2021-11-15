<template>
  <div class="calendar">
      <vs-table max-items="20" pagination :data="$store.getters.numofDate">
      <template slot="header">
        <h3>List Table</h3>
      </template>
      <template slot="thead">
        <vs-th> Date </vs-th>
        <vs-th> Number </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr
          :state="
            data[indextr].data > 855000
              ? 'success'
              : data[indextr].data < 85000
              ? 'danger'
              : null
          "
          :key="indextr"
          v-for="(tr, indextr) in data"
        >
          <vs-td :data="data[indextr].date">
            {{ data[indextr].date }}
          </vs-td>

          <vs-td :data="data[indextr].count">
            {{ data[indextr].count }}
          </vs-td>

        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>