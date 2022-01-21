<template>
  <div>
    <b class="bv-example-row">
      <b-row>
        <b-col>
          <b-list-group>
            <b-list-group-item id="title" style="background-color:#343a40;">雷射加工</b-list-group-item>
            <b-list-group-item id="state-title" style="background-color:#343a40;">加工狀態
              <svg id="laser-indicator">
                <circle cx="12" cy="12" r="12" stroke="black" stroke-width="1" fill="red" />
              </svg>
            </b-list-group-item>
            <b-list-group-item style="background-color:#343a40;">
              <b-button variant="light" @click="getNowLaserData()">取得即時資料</b-button>
              <b-button variant="danger" @click="stopNowLaserData()">停止搜尋</b-button>
            </b-list-group-item>
            <b-list-group-item style="background-color:#343a40;">
              <div id="history_title" style="background-color:#343a40;">歷史數據</div>
              <b-row>
                <b-col>
                  <label for="example-datepicker">起始日期</label>
                  <b-form-datepicker id="example-datepicker1" v-model="beginDate" class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col>
                  <label for="example-datepicker2">起始時間</label>
                  <b-form-timepicker v-model="beginTime" locale="en"></b-form-timepicker>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <label for="example-datepicker">結束日期</label>
                  <b-form-datepicker id="example-datepicker3" v-model="endDate" class="mb-2"></b-form-datepicker>
                </b-col>
                <b-col>
                  <label for="example-datepicker4">結束時間</label>
                  <b-form-timepicker v-model="endTime" locale="en"></b-form-timepicker>
                </b-col>
              </b-row>
              <b-button variant="light" @click="getHistoryLaserData()">取得歷史資料</b-button>
              <b-button variant="danger" @click="stopHistoryLaserData()">停止搜尋</b-button>
            </b-list-group-item>
            <b-list-group-item style="background-color:#343a40;">
              <b-row>
                <b-form-checkbox v-model="checked" name="check-button" switch @change="setMode()">手動模式/自動模式</b-form-checkbox>
              </b-row>
              <b-row>
                <b-col class="text-right" align-self="center">
                  <label for="zInput">Z軸位置:</label>
                </b-col>
                <b-col align-self="center">
                  <b-form-input v-model="z" placeholder="輸入Z軸位置" id="zInput" :readonly="checked==true"></b-form-input>
                </b-col>
                <b-col class="text-left" align-self="center">
                  <b-button variant="light" @click="setLaserZIndex()" id="set_laser_z_index_button">確定</b-button>
                </b-col>
              </b-row>
            </b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col cols="4">
          <div class="chart_title"> 量測電壓 </div>
          <line-chart :chart-data="laserCollection" :width="750" :height="750"></line-chart>
        </b-col>
        <b-col cols="4">   
          <div class="chart_title"> Z軸位置 </div>
          <line-chart :chart-data="laserZIndexCollection" :width="750" :height="750"></line-chart>
        </b-col>
      </b-row>
    </b>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import Multiselect from 'vue-multiselect'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  import qs from 'qs'
  Vue.use(VueAxios, axios)
  export var token = '';
  export default {
    name: "ChartPage",
    components: {
      LineChart,
      Multiselect
    },
    data() {
      return {
        laserCollection: {},
        laserZIndexCollection: {},
        beginDate: "",
        beginTime: "",
        endDate: "",
        endTime: "",
        z: "",
        x_list_data: "",
        x_list_z_index: "",
        y_list_data: "",
        y_list_z_index: "",
        checked: true
      }
    },
    methods: {
      drawChart() {
        this.laserCollection = {
          labels: this.x_list_data,
          datasets: [
            {
              label: "電壓單位(V)",
              backgroundColor: "transparent",
              data: this.y_list_data,
              borderColor: "#E1E100",
              borderWidth: 2,
              pointBackgroundColor: "transparent",
              width:900
            }
          ]
        }
        this.laserZIndexCollection = {
          labels: this.x_list_z_index,
          datasets: [
              {
                label: "距離單位(mm)",
                  backgroundColor: "transparent",
                  data: this.y_list_z_index,
                  borderColor: "#E1E100",
                  borderWidth: 2,
                  pointBackgroundColor: "transparent"
              }
          ]
        } 
      }, 
      setLaserZIndex(z) {
        // alert("setLaserZIndex");
        axios({
          method: 'post',
          crossdomain: true,
          url: '/setlaser',
          data: {
            id: 'laser1',
            z: this.z
          },
          headers: {
            'Authorization': 'bearer ' + token 
          }
        })
        .then(res => {
          if(res.data == "failed") { alert("設定網路異常 Error code 500"); }
          else{
            alert("設定成功");
          }
        })
      },
      getNowToBeforeOneMinTime() {
        var nowTime = new Date();
        var beforeOneMinTime = new Date(nowTime);
        beforeOneMinTime.setMinutes(nowTime.getMinutes() - 1);
        nowTime.setHours(nowTime.getHours()+8);
        beforeOneMinTime.setHours(beforeOneMinTime.getHours()+8);
        return [beforeOneMinTime.toISOString(), nowTime.toISOString()];
      },
      getHistoryTime() {
        if(this.beginDate === "" || this.beginTime === "" || this.endDate === "" | this.endTime === "") { alert("請填入日期與時間");return; }
        var begin = new Date(this.beginDate.split("-")[0], this.beginDate.split("-")[1]-1, this.beginDate.split("-")[2], this.beginTime.split(":")[0], this.beginTime.split(":")[1], this.beginTime.split(":")[2]);
        var end = new Date(this.endDate.split("-")[0], this.endDate.split("-")[1]-1, this.endDate.split("-")[2], this.endTime.split(":")[0], this.endTime.split(":")[1], this.endTime.split(":")[2]);
        if(begin > end) { alert("開始時間不得大於結束日期");return; }
        begin.setHours(begin.getHours()+8);
        end.setHours(end.getHours()+8);
        var timeList = [];
        for(var i=0; i<(end-begin)/1000/60; i++) {
          var tail = new Date(begin);
          tail.setMinutes(begin.getMinutes() + 1 );
          timeList.push([begin.toISOString(), tail.toISOString()]);
          begin = tail;
        }
        return timeList;
      },
      isDataNull(data) {
        if(data == "doesn't exist") { return true; }
        else if(data == "") { return true; }
        else {return false;}
      },
      getNowLaserData() {
        console.log("getNowLaserData");
        this.stopHistoryLaserData();
        var result = this.getNowToBeforeOneMinTime();
        var begin = result[0];
        var end = result[1];
        var that = this;
        this.nowProcessId = setTimeout( function () {
          axios({
            method: 'post',
            crossdomain: true,
            url: '/getlaser',
            data: {
              id: 'laser1',
              begin: begin,
              end: end
            },
            headers: {
              'Authorization': 'bearer ' + token 
            }
          })
          .then(res => {
            if(that.isDataNull(res.data)) { alert("目前無資料"); }
            else{
              that.y_list_data = res.data.voltage;
              that.y_list_z_index = res.data.z;
              that.x_list_data = Array.from(Array(that.y_list_data.length).keys());
              that.x_list_z_index = Array.from(Array(that.y_list_z_index.length).keys());
              // console.log(res.data.voltage);
              that.drawChart();
            }
          })
          that.getNowLaserData();                                  
        }, 5000)
      },
      getHistoryLaserData(begin, end) {
        console.log("getHistoryLaserData()");
        this.stopNowLaserData();
        var timeList = this.getHistoryTime();
        var index = 0;
        this.getHistoryDataForloop(index, timeList);
      },
      getHistoryDataForloop(index, timeList) {
        console.log("getHistoryDataForloop");
        // console.log(timeList[index][0]);
        // console.log(timeList[index][1]);
        var that = this;
        this.historyProcessId = setTimeout( function () {
          axios({
            method: 'post',
            crossdomain: true,
            url: '/getlaser',
            data: {
              id: 'laser1',
              begin: timeList[index][0],
              end: timeList[index][1]
            },
            headers: {
              'Authorization': 'bearer ' + token 
            }
          })
          .then(res => {
            if(that.isDataNull(res.data)) { alert("目前無資料"); }
            else {
              that.y_list_data = res.data.voltage;
              that.y_list_z_index = res.data.z;
              that.x_list_data = Array.from(Array(that.y_list_data.length).keys());
              that.drawChart();
            }
          })
          index++;
          if(index < timeList.length){
            that.getHistoryDataForloop(index, timeList);                                  
          }
        }, 5000)
      },
      stopHistoryLaserData () {
        clearTimeout(this.historyProcessId);
      },
      stopNowLaserData() {
        clearTimeout(this.nowProcessId);
      },
      setMode() {
        console.log("setMode");
        var mode_state = 'on';
        if(this.checked){
          mode_state = 'on';
        }else{
          mode_state = 'off';
        }
        axios({
          method: 'post',
          crossdomain: true,
          url: '/setlaser/automode/'+mode_state,
          data: {
            id: 'laser1'
          },
          headers: {
            'Authorization': 'bearer ' + token 
          }
        })
        .then(res => {
          if(res.data == "failed") { alert("設定網路異常"); }
          else{
            console.log("設定成功")
          }
        })
      },
      getToken() {
        axios({
          method: 'post',
          crossdomain: true,
          url: '/token',
          data: qs.stringify({
            grant_type: 'password',
            client_id: 'db-client',
            client_secret:'70e32cd7-5d51-4d7d-977f-7b69de46c4f7',
            username:'web',
            password:'_Web123456'
          }),
          headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
          }
        })
        .then(res => {
          token = res.data.access_token;
          // console.log('getToken = ' + token);
        })
      }
    },
    mounted() {
      this.getToken();
      setInterval(() => {this.getToken()}, 180000);
    }
  };
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title{
  font-size: 30pt;
}
#state-title{
  font-size: 20pt;
}

#history_title {
  font-size: 20pt;
  margin-right: 38px;
}

.leserProcessLineChart{
  left:60%;
}

.state{
  top:18%;
  display: flex;
}

.stateTitle{
  font-size: 40pt;
}

#laser-indicator {
  height: 30px;
  width: 30px;
}

.multiselect{
     -webkit-box-sizing: content-box;
    box-sizing: content-box;
    display: block;
    width: 14%;
    min-height: 40px;
    text-align: left;
    color: #2e3e50c9;
}

.StartTimeSelect{
  display: flex;
  position: absolute;
  top: 25%;
  left: 20%;
  width: 35%;
  height: 0%; 
}
.EndTimeSelect{
  display: flex;
  position: absolute;
  top: 35%;
  left: 20%;
  width: 35%;
  height: 0%; 
}
.z_position{
  position: absolute;
  top: 45%;
  left: 20%;
  font-size: 20pt;
}
#set_laser_z_index_button {
  left:0%;
}
.text-muted{
  color: white !important;
}
.chart_title{
  font-size: 20pt
}

</style>