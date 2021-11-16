<template>
  <div class="work-management">
    <div class="header">
      <vs-icon icon="list_alt"></vs-icon>
      <h4>Assignment of Open Work Order</h4>
    </div>
    <div class="tab-list">
      <vs-tabs color="success">
        <vs-tab label="List" icon="list">
          <div class="con-tab-ejemplo">
            <Table />
          </div>
        </vs-tab>
        <vs-tab label="Calendar" icon="event_note">
          <div class="con-tab-ejemplo">
            <Calendar />
          </div>
        </vs-tab>
        <vs-tab label="Service">
          <vs-tabs color="dark">
            <vs-tab label="login">
              <div class="con-tab-ejemplo">Service</div>
            </vs-tab>
          </vs-tabs>
        </vs-tab>
        <vs-tab disabled label="Disabled">
          <div class="con-tab-ejemplo">Disabled</div>
        </vs-tab>
        <vs-tab label="Lorem ipsum dolor sit amet">
          <div class="con-tab-ejemplo">Lorem ipsum dolor sit amet</div>
          <apexchart
            width="100%"
            type="line"
            :options="options"
            :series="series"
          ></apexchart>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Table from "@/components/WorkManagement/Table.vue";
import Calendar from "@/components/WorkManagement/Calendar.vue";

export default {
  data() {
    return {
      categorie:[ new Date("2020-07-08T08:22:20.348Z").getTime(),
            new Date("2020-07-08T09:22:20.348Z").getTime(),
            new Date("2020-07-08T10:22:20.348Z").getTime(),
            new Date("2020-07-08T11:22:20.348Z").getTime(),
            new Date("2020-07-08T12:22:20.348Z").getTime(),
            new Date("2020-07-08T13:22:20.348Z").getTime(),
            new Date("2020-07-08T14:22:20.348Z").getTime(),
            new Date("2020-07-08T15:22:20.348Z").getTime(),],
      data1:[30, 40, 45, 50, 49, 60, 70, 91],
      options: {
        chart: {
          id: "vuechart-example",
        },
        xaxis: {
          categories: [],
          type: "datetime",

        },
      },
      series: [
        {
          name: "series-1",
          data: [],
        },
      ],
    };
  },
  components: {
    Table,
    Calendar,
  },
  mounted() {
    const LinkData = "https://swdapi.ddns.net:8090/data/ttntest";
    $.getJSON(LinkData).done((json) => {
      console.log("data", json, typeof json, json.length);
      this.$store.commit("rawData", json);

      var numDate = [];
      var date = "";
      for (let index = 0; index < json.length; index++) {
        // console.log(json[index].timestamp.split('T'))
        const dateArray = json[index].timestamp.split("T");

        if (!numDate.includes(dateArray[0])) {
          numDate.push(dateArray[0]);
          date = dateArray[0];
        }

        json[index]['getTime'] = new Date(json[index].timestamp.split('Z')[0]).getTime()
      }
      console.log("data", json, typeof json, json.length);
      json.sort((a,b) => (a.getTime > b.getTime) ? 1 : ((b.getTime > a.getTime) ? -1 : 0))

      // let data = json.map((item) => item.data)
      // let data2 = json.map((item) => item.data2)
      // let dateTime = json.map((item) => item.getTime)
      // console.log(data, data2, dateTime);

      // console.log(this.series,this.$store.getters.data);


      // this.$store.commit('categorieData',dateTime)
      // this.$store.commit('data',data)

      // this.options.xaxis.categories = dateTime
      // this.series.data = data


      // console.log(this.series,this.$store.getters.data);


      console.log(numDate, date);

      var numofdate = [];
      for (let index = 0; index < numDate.length; index++) {
        let sum = json.reduce(
          (total, x) =>
            x.timestamp.split("T")[0] === numDate[index] ? total + 1 : total,
          0
        );
        numofdate.push({ date: numDate[index], count: sum });
      }
      console.log(numofdate);
      console.log(json[3707]);

      this.$store.commit("numofDate", numofdate);
    });
  },
  updated() {
    console.log("update data", this.$store.getters.rawData);
  },
};
</script>

<style lang="scss" scoped>
.work-management {
  width: 100%;
  background: #fff;
  .header {
    display: flex;
    text-align: center;
    align-items: center;
    background: #46c93a;
    padding: 5px;
    color: #fff;
    h4 {
      margin-left: 5px;
    }
  }
  .tab-list {
    padding: 10px;
    .buttontab {
      background: #46c93a;
    }
  }
}
</style>