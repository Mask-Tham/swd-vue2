<template>
  <div class="table">
    <vs-table max-items="20" pagination :data="$store.getters.rawData" noDataText="-">
      <template slot="header">
        <h3>List Table</h3>
      </template>
      <template slot="thead">
        <vs-th> ID </vs-th>
        <vs-th> Data </vs-th>
        <vs-th> Date </vs-th>
        <vs-th> Data2 </vs-th>
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
          noDataText="-"
        >
          <vs-td :data="data[indextr].id">
            {{ data[indextr].id }}
          </vs-td>

          <vs-td :data="data[indextr].data">
            {{ data[indextr].data }}
          </vs-td>

          <vs-td :data="data[indextr].timestamp">
            {{ data[indextr].timestamp }}
          </vs-td>

          <vs-td :data="data[indextr].data2">
            {{ data[indextr].data2 }}
          </vs-td>
        </vs-tr>
      </template>
    </vs-table>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>