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
        <div>

        <vs-button class="btn-chart" color="success" type="filled" @click="popupActivo = true">
          Chart Data
        </vs-button>
        <vs-popup
          fullscreen
          class="holamundo"
          title="Chart"
          :active.sync="popupActivo"
        >
          <div class="hello" ref="chartdivData1"></div>
        </vs-popup>
        <vs-button class="btn-chart" color="success" type="filled" @click="popupActivo2 = true">
          Chart Data2
        </vs-button>
        <vs-popup
          fullscreen
          class="holamundo"
          title="Chart"
          :active.sync="popupActivo2"
        >
          <div class="hello" ref="chartdivData2"></div>
        </vs-popup>
        </div>
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

          <vs-td :data="data[indextr].timestampshow">
            {{ data[indextr].timestampshow }}
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
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default {
  data() {
    return {
      popupActivo: false,
      popupActivo2: false,
    };
  },
  mounted() {
    this.start();
  },
  updated() {},
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

      // for (let index = 0; index < dataperDay.length; index++) {
      //   const element = dataperDay[index];
      //   let startTime =
      //     new Date(element[0].timestamp.split("T")[0]).getTime() - 25_200_000;
      //   let endTime =
      //     new Date(element[0].timestamp.split("T")[0]).getTime() -
      //     25_200_000 +
      //     1_800_000;
      //   console.log("startTime", startTime);
      //   console.log("startTime", new Date(startTime - 25_200_000));
      //   console.log(element[0].data);

      //   numofDate[index]["data"] = [];
      //   // in time +1_800_000 = 30 min
      //   for (let j = 0; j < 48; j++) {
      //     var sum = 0;
      //     var count = 0;
      //     element.forEach((item) => {
      //       if (item.getTime > startTime && item.getTime <= endTime) {
      //         sum += item.data;
      //         count++;
      //       }
      //     });

      //     numofDate[index]["data"].push({
      //       date: new Date(startTime - 25_200_000),
      //       value: sum != 0 ? sum / count : null,
      //     //   date: new Date(2018, 0, i),
      //     // name: "name" + i,
      //     // value: visits,
      //     });
      //     startTime += 1_800_000;
      //     endTime += 1_800_000;
      //   }
      //   console.log(sum / count);
      // }
      // console.log(numofDate);

      // let newData = numofDate[1]["data"].map((item) => item.value);
      // let newTime = numofDate[1]["data"].map((item) => item.date);
      // console.log(newTime, newData);

      // this.series = [
      //   {
      //     data: newData,
      //   },
      // ];

      // this.options.xaxis.categories = newTime;

      var DataAll = [];
      var Data2All = [];

      for (let index = 0; index < dataperDay.length; index++) {
        const element = dataperDay[index];
        let startTime =
          new Date(element[0].timestamp.split("T")[0]).getTime() - 25_200_000;
        let endTime =
          new Date(element[0].timestamp.split("T")[0]).getTime() -
          25_200_000 +
          3_600_000;
        console.log("startTime", startTime);
        console.log("startTime", new Date(startTime - 25_200_000));
        console.log(element[0].data);

        numofDate[index]["data"] = [];
        // in time +1_800_000 = 30 min
        for (let j = 0; j < 24; j++) {
          var sum = 0;
          var count = 0;
          var sum2 = 0;
          var count2 = 0;
          element.forEach((item) => {
            if (item.getTime > startTime && item.getTime <= endTime) {
              sum += item.data;
              count++;
              sum2 += item.data2;
              count2++;
            }
          });

          DataAll.push({
            date: new Date(startTime),
            value: sum != 0 ? sum / count : null,
          });
          Data2All.push({
            date: new Date(startTime),
            value: sum != 0 ? sum2 / count2 : null,
          });
          startTime += 3_600_000;
          endTime += 3_600_000;
        }
        console.log(sum / count);
      }

      // Chart Data
      let chart = am4core.create(this.$refs.chartdivData1, am4charts.XYChart);

      chart.paddingRight = 20;

      chart.data = DataAll;

      let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;

      let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.minWidth = 35;

      let series = chart.series.push(new am4charts.LineSeries());
      series.dataFields.dateX = "date";
      series.dataFields.valueY = "value";

      series.tooltipText = "{valueY.value}";
      chart.cursor = new am4charts.XYCursor();

      let scrollbarX = new am4charts.XYChartScrollbar();
      scrollbarX.series.push(series);
      chart.scrollbarX = scrollbarX;

      this.chart = chart;

      //chart Data 2
      let chart2 = am4core.create(this.$refs.chartdivData2, am4charts.XYChart);

      chart2.paddingRight = 20;

      chart2.data = Data2All;

      let dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
      dateAxis2.renderer.grid.template.location = 0;

      let valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
      valueAxis2.tooltip.disabled = true;
      valueAxis2.renderer.minWidth = 35;

      let series2 = chart2.series.push(new am4charts.LineSeries());
      series2.dataFields.dateX = "date";
      series2.dataFields.valueY = "value";

      series2.tooltipText = "{valueY.value}";
      chart2.cursor = new am4charts.XYCursor();

      let scrollbarX2 = new am4charts.XYChartScrollbar();
      scrollbarX2.series.push(series);
      chart2.scrollbarX = scrollbarX2;

      this.chart2 = chart2;
    },
  },
  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
    if (this.chart2) {
      this.chart2.dispose();
    }
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
};
</script>

<style lang="scss" scoped>
.hello {
  width: 100%;
  height: 600px;
}
.btn-chart{
  margin: 0 0 0 5px;
}
</style>