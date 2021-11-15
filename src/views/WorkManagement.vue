<template>
  <div class="work-management">
    <div class="header">
      <vs-icon icon="list_alt"></vs-icon>
      <h4>Assignment of Open Work Order</h4>
    </div>
    <div class="tab-list">
      <vs-tabs color="success">
        <vs-tab label="List">
          <div class="con-tab-ejemplo">
            <Table />
          </div>
        </vs-tab>
        <vs-tab label="Service">
          <vs-tabs color="dark">
            <vs-tab label="login">
              <div class="con-tab-ejemplo">Service</div>
            </vs-tab>
          </vs-tabs>
        </vs-tab>
        <vs-tab label="Calendar">
          <div class="con-tab-ejemplo">
            <Calendar/>
          </div>
        </vs-tab>
        <vs-tab disabled label="Disabled">
          <div class="con-tab-ejemplo">Disabled</div>
        </vs-tab>
        <vs-tab label="Lorem ipsum dolor sit amet">
          <div class="con-tab-ejemplo">Lorem ipsum dolor sit amet</div>
        </vs-tab>
      </vs-tabs>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import Table from "@/components/WorkManagement/Table.vue";
import Calendar from '@/components/WorkManagement/Calendar.vue';
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          website: "hildegard.org",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          website: "anastasia.net",
        },
        {
          id: 3,
          name: "Clementine Bauch",
          username: "Samantha",
          email: "Nathan@yesenia.net",
          website: "ramiro.info",
        },
        {
          id: 4,
          name: "Patricia Lebsack",
          username: "Karianne",
          email: "Julianne.OConner@kory.org",
          website: "kale.biz",
        },
        {
          id: 5,
          name: "Chelsey Dietrich",
          username: "Kamren",
          email: "Lucio_Hettinger@annie.ca",
          website: "demarco.info",
        },
        {
          id: 6,
          name: "Mrs. Dennis Schulist",
          username: "Leopoldo_Corkery",
          email: "Karley_Dach@jasper.info",
          website: "ola.org",
        },
        {
          id: 7,
          name: "Kurtis Weissnat",
          username: "Elwyn.Skiles",
          email: "Telly.Hoeger@billy.biz",
          website: "elvis.io",
        },
        {
          id: 8,
          name: "Nicholas Runolfsdottir V",
          username: "Maxime_Nienow",
          email: "Sherwood@rosamond.me",
          website: "jacynthe.com",
        },
        {
          id: 9,
          name: "Glenna Reichert",
          username: "Delphine",
          email: "Chaim_McDermott@dana.io",
          website: "conrad.com",
        },
        {
          id: 10,
          name: "Clementina DuBuque",
          username: "Moriah.Stanton",
          email: "Rey.Padberg@karina.biz",
          website: "ambrose.net",
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
      // console.log(json.slice(0, 10));

      // var i,
      //   j,
      //   temporary,
      //   chunk = 100;
      // var newData = [];
      // for (i = 0, j = json.length; i < j; i += chunk) {
      //   temporary = json.slice(i, i + chunk);
      //   // do whatever
      //   newData.push(temporary);
      // }
      // console.log(temporary);
      // console.log(newData);
      // this.$store.commit("rawData", newData);

      // console.log("100 unit", this.$store.getters.rawData[0]);

      // for (i = 0; i < j.length; i += 1) {
      //   // do whatever

      // }
      var numDate = []
      var date = ''
      for (let index = 0; index < json.length; index++) {
        // console.log(json[index].timestamp.split('T'))
        const dateArray = json[index].timestamp.split('T')

        if (!numDate.includes(dateArray[0])) {
          numDate.push(dateArray[0])
          date = dateArray[0]
        }
        
      }
      console.log(numDate,date)

      var numofdate = []
      for (let index = 0; index < numDate.length; index++) {
        let sum = json.reduce((total,x) => (x.timestamp.split('T')[0]===numDate[index] ? total+1 : total), 0)
        numofdate.push({date: numDate[index], count: sum})
        
      }
      console.log(numofdate)
      console.log(json[3707])


      this.$store.commit('numofDate',numofdate)

    });
  },
  updated() {
    console.log("data", this.$store.getters.rawData);
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
  }
}
</style>