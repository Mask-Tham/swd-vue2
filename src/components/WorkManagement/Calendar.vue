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
          <!-- <vs-button color="success" type="filled" @click="update">
            update
          </vs-button> -->
          <div class="hello" ref="chartdivData3"></div>

          <!-- <apexchart
            width="1000"
            type="line"
            :options="options"
            :series="series"
          ></apexchart> -->
        </vs-popup>
      </template>
      <template slot="thead">
        <vs-th> Date </vs-th>
        <vs-th> Number </vs-th>
      </template>

      <template slot-scope="{ data }">
        <vs-tr
          :state="
            data[indextr].data > 3000
              ? 'success'
              : data[indextr].data < 3000
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
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

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
          name: "Number of Date",
          data: [
            855099.3581666669, 855125.1321666662, 855150.9496666662,
            855176.9015000002, 855256.7583333335, 855365.2817241381,
            855468.6626666667, 855520.3766101699,
          ],
        },
      ],
    };
  },
  mounted() {
    var DataAll = [];
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
    numofDate.forEach((item) => {
      DataAll.push({
        date: item.date,
        value: item.count,
      });
    });

    console.log('DataAll',DataAll)

    let chart = am4core.create(this.$refs.chartdivData3, am4charts.XYChart);

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
  },
  methods: {
    update() {
      // const max = 90;
      // const min = 20;
      // const newData = this.series[0].data.map(() => {
      //   return Math.floor(Math.random() * (max - min + 1)) + min;
      // });
      const newData = [
        855099.3581666669, 855125.1321666662, 855150.9496666662,
        855176.9015000002, 855202.9424999998, 855230.7006666666,
        855256.7583333335, 855283.0563333333, 855312.2853333335,
        855339.0903333336, 855365.2817241381, 855390.7861666669,
        855416.7410000004, 855442.7136666668, 855468.6626666667,
        855494.5619999996, 855520.3766101699, 855546.4176666664,
        855572.4499999995, 855598.4859999998, 855624.4753333337,
        855650.2248333334, 855672.6725000007, 855690.4511666667,
        855708.7698333334, 855727.834576271, 855744.3236666669,
        855758.2266666663, 855770.3641666669, 855778.410166667,
        855783.3515254239, 855788.2095000003, 855792.5668333332,
        855794.2693333331, 855795.6073333335, 855796.9455, 855798.2761666665,
        855799.6159999998, 855800.9410000001, 855802.2666666668,
        855803.5781666666, 855804.8809999999, 855806.1841666668,
        855807.4876666666, 855808.8459999996, 855820.1433333327,
        855845.4151666664, 855871.0386440676,
      ];

      const newcategories = [
        1594227600000, 1594229400000, 1594231200000, 1594233000000,
        1594234800000, 1594236600000, 1594238400000, 1594240200000,
        1594242000000, 1594243800000, 1594245600000, 1594247400000,
        1594249200000, 1594251000000, 1594252800000, 1594254600000,
        1594256400000, 1594258200000, 1594260000000, 1594261800000,
        1594263600000, 1594265400000, 1594267200000, 1594269000000,
        1594270800000, 1594272600000, 1594274400000, 1594276200000,
        1594278000000, 1594279800000, 1594281600000, 1594283400000,
        1594285200000, 1594287000000, 1594288800000, 1594290600000,
        1594292400000, 1594294200000, 1594296000000, 1594297800000,
        1594299600000, 1594301400000, 1594303200000, 1594305000000,
        1594306800000, 1594308600000, 1594310400000, 1594312200000,
      ];

      this.series = [
        {
          data: newData,
        },
      ];

      this.options.xaxis.categories = newcategories;
    },
  },
};
</script>

<style lang="scss" scoped>
.hello {
  width: 100%;
  height: 600px;
}
</style>