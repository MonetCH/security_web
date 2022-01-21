/* eslint-disable */
<template>
  <b-container class="bv-example-row">
      <!-- 左四格 -->
    <b-row>
        <b-col>相對座標<br>
          <b-row>  
            <b-col> x </b-col>
            <b-col> y </b-col>
            <b-col> z </b-col>
          </b-row>
          <b-row>  
            <b-col > {{ relative_x }} </b-col>
            <b-col > {{ relative_y }} </b-col>
            <b-col > {{ relative_z }} </b-col>
          </b-row>
        </b-col>
        <b-col>絕對座標<br>
          <b-row>  
            <b-col> x </b-col>
            <b-col> y </b-col>
            <b-col> z </b-col>
          </b-row>
          <b-row>  
            <b-col > {{ absolute_x }} </b-col>
            <b-col > {{ absolute_y }} </b-col>
            <b-col > {{ absolute_z }} </b-col>
          </b-row>
        </b-col>
        <b-col>
            <div style="display:inline">F: {{ other_f }} MM/MIN</div><br>
            <div style="display:inline">加工部品數: {{ other_process_num }} </div><br>
            <div style="display:inline">運轉時間: {{ time }} </div><br>
            <div style="display:inline">循環時間: {{ cycle_time }} </div>
        </b-col>
    </b-row>
    <b-row>
        <b-col>機械座標<br>
          <b-row>  
            <b-col> x </b-col>
            <b-col> y </b-col>
            <b-col> z </b-col>
          </b-row>
          <b-row>  
            <b-col > {{ machine_x }} </b-col>
            <b-col > {{ machine_y }} </b-col>
            <b-col > {{ machine_z }} </b-col>
          </b-row>
        </b-col>
        <b-col>殘移動量<br>
          <b-row>  
            <b-col> x </b-col>
            <b-col> y </b-col>
            <b-col> z </b-col>
          </b-row>
          <b-row>  
            <b-col > {{ momentum_x }} </b-col>
            <b-col > {{ momentum_y }} </b-col>
            <b-col > {{ momentum_z }} </b-col>
          </b-row>
        </b-col>
        <b-col>機器狀態<br>
            <svg height="100" width="100">
              <circle v-if="machine_status" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#28FF28" />
              <circle v-else cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#006000" />
            </svg>
        </b-col>
        </b-row>
    </b-container>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import qs from 'qs'
Vue.use(VueAxios, axios)

export default {
    name: "Cnc_3",
    data() {
        return {
          relative_x: "Loading",
          relative_y: "Loading",
          relative_z: "Loading",

          absolute_x: "Loading",
          absolute_y: "Loading",
          absolute_z: "Loading",

          machine_x: "Loading",
          machine_y: "Loading",
          machine_z: "Loading",

          momentum_x: "Loading",
          momentum_y: "Loading",
          momentum_z: "Loading",

          other_f: 0,
          other_process_num: 0,
          other_running_time: 0,
          other_cycle_time: 0,
          machine_status: 0,
          token_cnc: "",
          time: "",
          cycle_time: 0,

          green_light: 0
        }
    },
     methods: {
       truncateNum(str) {
         return Number.parseFloat(str).toFixed(3).padStart(3, "0");
       },
       getToken(){
          axios({
            method: 'post',
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
            this.token_cnc = res.data.access_token;
          })
        },
       getCnc() {
            axios({
              method: 'post',
              url: '/getcnc',
              data: {id:'cnc3'},
              headers: {
                'Authorization': 'bearer ' + this.token_cnc 
              }
            })
            .then(res => {
                this.relative_x = this.truncateNum(res.data.relative_coordinate.x);
                this.relative_y = this.truncateNum(res.data.relative_coordinate.y);
                this.relative_z = this.truncateNum(res.data.relative_coordinate.z);

                this.absolute_x = this.truncateNum(res.data.absolute_coordinate.x);
                this.absolute_y = this.truncateNum(res.data.absolute_coordinate.y);
                this.absolute_z = this.truncateNum(res.data.absolute_coordinate.z);

                this.machine_x = this.truncateNum(res.data.machine_coordinate.x);
                this.machine_y = this.truncateNum(res.data.machine_coordinate.y);
                this.machine_z = this.truncateNum(res.data.machine_coordinate.z);

                this.machine_x = this.truncateNum(res.data.machine_coordinate.x);
                this.machine_y = this.truncateNum(res.data.machine_coordinate.y);
                this.machine_z = this.truncateNum(res.data.machine_coordinate.z);

                this.momentum_x = this.truncateNum(res.data.momentum.x);
                this.momentum_y = this.truncateNum(res.data.momentum.y);
                this.momentum_z = this.truncateNum(res.data.momentum.z);

                this.other_f = this.truncateNum(res.data.other.f)
                this.other_process_num = this.truncateNum(res.data.other.process_num)
                this.other_running_time = this.truncateNum(res.data.other.running_time)
                this.other_cycle_time = this.truncateNum(res.data.other.cycle_time)
                this.time = this.secondsToHoures(this.other_running_time)
                this.cycle_time = this.secondsToHoures(this.other_cycle_time)
                this.green_light = res.data.green_light;
                this.machine_status = res.data.f5;
            })
        },
        secondsToHoures(d) {
          d = Number(d);
          var h = Math.floor(d / 3600);
          var m = Math.floor(d % 3600 / 60);
          var s = Math.floor(d % 3600 % 60);

          var hDisplay = h > 0 ? h + (h == 1 ? " 時, " : " 時, ") : " 0時";
          var mDisplay = m > 0 ? m + (m == 1 ? " 分, " : " 分, ") : " 0分";
          var sDisplay = s > 0 ? s + (s == 1 ? " 秒" : " 秒") : " 0秒";
          return hDisplay + mDisplay + sDisplay; 
        }
    },
     mounted() {
      this.getToken();
      this.getCnc();
      this.$store.state.cnc.cncTokenInterval = setInterval(() => {this.getToken()}, 300000);
      this.$store.state.cnc.cncInterval = setInterval(() => {this.getCnc();}, 500);
    }
}
</script>
<style>
.bv-example-row .row>.col:not(.header), .bv-example-row .row>[class^=col-] {
    padding-top: .25rem;
    padding-bottom: .25rem;
    font-size: 16pt;
    background-color: rgba(97, 97, 97, 0.055);
    border: 1px solid rgba(16, 16, 17, 0.397);
}
.bv-example-row2 .row>.col:not(.header), .bv-example-row .row>[class^=col-] {
    padding-top: .25rem;
    padding-bottom: .25rem;
    background-color: rgba(32, 179, 179, 0.15);
}

  .green-light {
      /* stroke:"black"; */
      stroke-width:"3";
      fill:"#006000"
  }

  .red-light {
      /* stroke:"black"; */
      stroke-width:"3";
      fill:"#930000"
  }
</style>