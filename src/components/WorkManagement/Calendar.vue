<template>
  <div class="calendar">
    <vs-table max-items="20" pagination :data="$store.getters.numofDate">
      <template slot="header">
        <h3>List Table</h3>
        <vs-button color="success" type="filled" @click="popupActivo = true">
          Chart
        </vs-button>
        <vs-popup
          fullscreen
          class="holamundo"
          title="Chart"
          :active.sync="popupActivo"
        >
          <vs-button color="success" type="filled"> update </vs-button>
          <apexchart
            width="1000"
            type="line"
            :options="options"
            :series="series"
          ></apexchart>
        </vs-popup>
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
  data() {
    return {
      popupActivo: false,
      options: {
        chart: {
          id: "vuechart-numofdate",
        },
        stroke: {
          curve: "smooth",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          type: "datetime",
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
        },
      ],
    };
  },
  mounted() {
    console.log("Calendar", this.$store.getters.numofDate);
    const numofDate = this.$store.getters.numofDate;
    let num = numofDate.map((item) => item.count);
    let date = numofDate.map((item) => new Date(item.date).getTime());

    this.options = {
      xaxis: {
        categories: date,
      },
    };

    this.series = [
      {
        data: num,
      },
    ];
  },
};
</script>

<style>
</style>