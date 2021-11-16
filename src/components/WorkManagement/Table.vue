<template>
  <div class="table">
    <vs-table
      max-items="20"
      pagination
      :data="$store.getters.rawData"
      noDataText="-"
    >
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
          <vs-button color="success" type="filled" @click="update">
            update
          </vs-button>
          <apexchart
            width="1200"
            type="area"
            :options="options"
            :series="series"
          ></apexchart>
        </vs-popup>
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
export default {
  data() {
    return {
      popupActivo: false,
      options: {
        chart: {
          id: "vuechart-raw-data",
          // stacked: false,
          // height: 350,
          // zoom: {
          //   type: "x",
          //   enabled: true,
          //   autoScaleYaxis: true,
          // },
          // toolbar: {
          //   autoSelected: "zoom",
          // },
        },
        // dataLabels: {
        //   enabled: false,
        // },
        // markers: {
        //   size: 0,
        // },
        // fill: {
        //   type: "gradient",
        //   gradient: {
        //     shadeIntensity: 1,
        //     inverseColors: false,
        //     opacityFrom: 0.5,
        //     opacityTo: 0,
        //     stops: [0, 90, 100],
        //   },
        // },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
          // categories: this.$store.getters.categorieData,
          type: "datetime",
        },
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91],
          // data: this.$store.getters.data,
        },
      ],
    };
  },
  mounted() {
    this.start();
  },
  updated() {
    // var rawData = this.$store.getters.rawData;
    // var numofDate = this.$store.getters.numofDate;
    // console.log(rawData, numofDate);
    // var dataperDay = [];
    // for (let i = 0, j = 0; i < numofDate.length; i++) {
    //   dataperDay.push(rawData.slice(j, j+numofDate[i].count));
    //   j += numofDate[i].count
    // }
    // console.log(dataperDay);
    // let newData = dataperDay.map((item) => item.data)
    // let newTime = dataperDay.map((item) => item.getTime)
    // this.series = [
    //     {
    //       data: newData,
    //     },
    //   ];
    //   this.options.xaxis.categories = newTime
  },
  methods: {
    start() {
      if (this.$store.getters.rawData.length == 0) {
        setTimeout(this.start, 200);
        return;
      }
      var rawData = this.$store.getters.rawData;
      var numofDate = this.$store.getters.numofDate;
      console.log(rawData, numofDate);

      var dataperDay = [];
      for (let i = 0, j = 0; i < numofDate.length; i++) {
        dataperDay.push(rawData.slice(j, j + numofDate[i].count));
        j += numofDate[i].count;
      }

      console.log(dataperDay);
      let newData = dataperDay[6].map((item) => item.data);
      let newTime = dataperDay[6].map((item) => item.getTime);
      console.log(newTime, newData);

      this.series = [
        {
          data: newData,
        },
      ];

      this.options.xaxis.categories = newTime;
    },
    update() {
      // const max = 90;
      // const min = 20;
      // const newData = this.series[0].data.map(() => {
      //   return Math.floor(Math.random() * (max - min + 1)) + min;
      // });
      // const newData = [20, 20, 20, 20, 49, 60, 70]
      // const newData = this.$store.getters.data
      // In the same way, update the series option
      // this.series = [
      //   {
      //     data: newData,
      //   },
      // ];

      // this.options.xaxis.categories = this.$store.getters.categorieData

      var rawData = this.$store.getters.rawData;
      var numofDate = this.$store.getters.numofDate;

      var dataperDay = [];
      for (let i = 0; i < numofDate.length; i += numofDate[i]) {
        dataperDay.push(rawData.slice(i, numofDate[i]));
      }

      console.log(dataperDay);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>