/* eslint-disable */
<template>
  <b-container class="bv-example-row">
    <b-row>
      <b-col>
        <b>緊急停止</b><br>
        <svg height="100" width="100">
          <circle v-if="force_stop" circle cx="50" cy="50" r="40" stroke="yellow" stroke-width="10" fill="#FF2D2D" />
          <circle v-else cx="50" cy="50" r="40" stroke="yellow" stroke-width="10" fill="#600000" />
        </svg>
      </b-col>
      <b-col>
        <img v-if="programEdit" class="panelImg" src="../assets/controlPanel_green/01_programEdit.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/01_programEdit.svg"/>
        <img v-if="memoryExe" class="panelImg" src="../assets/controlPanel_green/02_memoryExe.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/02_memoryExe.svg"/>
        <img v-if="manualEdit" class="panelImg" src="../assets/controlPanel_green/03_manualEdit.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/03_manualEdit.svg"/>
        <img v-if="paperTapExe" class="panelImg" src="../assets/controlPanel_green/04_paperTapExe.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/04_paperTapExe.svg"/><br>
        <img v-if="handwheel" class="panelImg" src="../assets/controlPanel_green/05_handwheel.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/05_handwheel.svg"/>
        <img v-if="inching" class="panelImg" src="../assets/controlPanel_green/06_inching.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/06_inching.svg"/>
        <img v-if="impart" class="panelImg" src="../assets/controlPanel_green/07_impart.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/07_impart.svg"/>
        <img v-if="return2origin" class="panelImg" src="../assets/controlPanel_green/08_return2origin.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/08_return2origin.svg"/>
      </b-col>
      <b-col>
        <img v-if="test" class="panelImg" src="../assets/controlPanel_green/21_test.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/21_test.svg"/>
        <img v-if="singleExe" class="panelImg" src="../assets/controlPanel_green/22_singleExe.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/22_singleExe.svg"/>
        <img v-if="singleSkip" class="panelImg" src="../assets/controlPanel_green/23_singleSkip.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/23_singleSkip.svg"/><br>
        <img v-if="stopChoosing" class="panelImg" src="../assets/controlPanel_green/24_stopChoosing.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/24_stopChoosing.svg"/>
        <img v-if="mechanicalLock" class="panelImg" src="../assets/controlPanel_green/25_mechanicalLock.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/25_mechanicalLock.svg"/>
        <img v-if="reserved" class="panelImg" src="../assets/controlPanel_green/26_reserved.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/26_reserved.svg"/>
      </b-col>
      <b-col align-self="center">
        <label for="spindleLoading">主軸負載:</label>
        <input type="text" class="panelInput" id="spindleLoading" name="spindleLoading" :value="spindleLoading" readonly><br>
        <label for="spindleTurnRate">主軸轉速:</label>
        <input type="text" class="panelInput" id="spindleTurnRate" name="spindleTurnRate" :value="spindleTurnRate" readonly>
      </b-col>
    </b-row>
    <b-row>
      <b-col align-self="center">
        <img v-if="ready" class="panelImg" src="../assets/controlPanel_green/50_ready.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/50_ready.svg"/>
        <img v-if="hands" class="panelImg" src="../assets/controlPanel_green/51_hands.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/51_hands.svg"/>
      </b-col>
      <b-col>
        <img v-if="add4" class="panelImg" src="../assets/controlPanel_green/09_add4.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/09_add4.svg"/>
        <img v-if="addZ" class="panelImg" src="../assets/controlPanel_green/10_addZ.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/10_addZ.svg"/>
        <img v-if="minusY" class="panelImg" src="../assets/controlPanel_green/11_minusY.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/11_minusY.svg"/>
        <img v-if="add5" class="panelImg" src="../assets/controlPanel_green/12_add5.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/12_add5.svg"/><br>
        <img v-if="addX" class="panelImg" src="../assets/controlPanel_green/13_addX.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/13_addX.svg"/>
        <img v-if="fastMove" class="panelImg" src="../assets/controlPanel_green/14_fastMove.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/14_fastMove.svg"/>
        <img v-if="minusX" class="panelImg" src="../assets/controlPanel_green/15_minusX.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/15_minusX.svg"/><br>
      </b-col>
      <b-col>
        <img v-if="blowCrumbs" class="panelImg" src="../assets/controlPanel_green/27_blowCrumbs.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/27_blowCrumbs.svg"/>
        <img v-if="programmingHandwheel" class="panelImg" src="../assets/controlPanel_green/28_programmingHandwheel.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/28_programmingHandwheel.svg"/>
        <img v-if="m54" class="panelImg" src="../assets/controlPanel_green/29_M54-RESRVED.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/29_M54-RESRVED.svg"/><br>
        <img v-if="openDoor" class="panelImg" src="../assets/controlPanel_green/30_openDoor.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/30_openDoor.svg"/>
        <img v-if="programRegen" class="panelImg" src="../assets/controlPanel_green/31_programRegen.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/31_programRegen.svg"/>
        <img v-if="m56" class="panelImg" src="../assets/controlPanel_green/32_M56-RESRVED.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/32_M56-RESRVED.svg"/><br>
      </b-col>
      <b-col align-self="center">
        <label for="spindleNum">主軸刀號:</label>
        <input type="text" class="panelInput" id="spindleNum" name="spindleNum" :value="spindleNum" readonly><br>
        <label for="waitedNum">等待刀號:</label>
        <input type="text" class="panelInput" id="waitedNum" name="waitedNum" :value="waitedNum" readonly>
      </b-col>
    </b-row>
    <b-row>
      <b-col align-self="center">
        <img v-if="safeDoorRelease" class="panelImg" src="../assets/controlPanel_green/52_safeDoorRelease.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/52_safeDoorRelease.svg"/>
        <img v-if="workingLight" class="panelImg" src="../assets/controlPanel_green/53_workingLight.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/53_workingLight.svg"/>
      </b-col>
      <b-col>
        <img v-if="addY" class="panelImg" src="../assets/controlPanel_green/16_addY.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/16_addY.svg"/>
        <img v-if="minusZ" class="panelImg" src="../assets/controlPanel_green/17_minusZ.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/17_minusZ.svg"/>
        <img v-if="minus4" class="panelImg" src="../assets/controlPanel_green/18_minus4.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/18_minus4.svg"/>
        <img v-if="minus5" class="panelImg" src="../assets/controlPanel_green/19_minus5.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/19_minus5.svg"/><br>
        <img v-if="overtravelRelease" class="panelImg" src="../assets/controlPanel_green/20_overtravelRelease.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/20_overtravelRelease.svg"/><br>
        <label style="vertical-align: top;" for="fMoveRatio">快動百分比:</label>
        <input type="text" class="panelInput" id="fMoveRatio" name="fMoveRatio" :value="fastMoveRatio" readonly>
      </b-col>
      <b-col>
        <img v-if="spindleStop" class="panelImg" src="../assets/controlPanel_green/33_spindleStop.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/33_spindleStop.svg"/>
        <img v-if="spindleForword" class="panelImg" src="../assets/controlPanel_green/34_spindleForword.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/34_spindleForword.svg"/>
        <img v-if="spindleReversal" class="panelImg" src="../assets/controlPanel_green/35_spindleReversal.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/35_spindleReversal.svg"/><br>
        <img v-if="spindleFixAngle" class="panelImg" src="../assets/controlPanel_green/36_spindleFixAngle.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/36_spindleFixAngle.svg"/><br>
        <div style="display:inline"> 
          <label for="rotatingSpdRatio">轉速百分比:</label>
          <input type="text" class="panelInput" id="rotatingSpdRatio" name="rotatingSpdRatio" :value="rotatingSpdRatio" readonly></div><br>
        <img v-if="minus" class="panelImg" src="../assets/controlPanel_green/37_minus.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/37_minus.svg"/>
        <img v-if="hundred" class="panelImg" src="../assets/controlPanel_green/38_100_.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/38_100_.svg"/>
        <img v-if="plus" class="panelImg" src="../assets/controlPanel_green/39_plus.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/39_plus.svg"/>
      </b-col>
      <b-col>
        <img v-if="manualChange" class="panelImg" src="../assets/controlPanel_green/55_manualChange.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/55_manualChange.svg"/>
        <img v-if="knifeVertical" class="panelImg" src="../assets/controlPanel_green/56_knifeVertical.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/56_knifeVertical.svg"/><br>
        <img v-if="knifeForward" class="panelImg" src="../assets/controlPanel_green/42_knifeForward.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/42_knifeForward.svg"/>
        <img v-if="knifeBackward" class="panelImg" src="../assets/controlPanel_green/43_knifeBackward.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/43_knifeBackward.svg"/><br>
        <img v-if="autoPowerOff" class="panelImg" src="../assets/controlPanel_green/44_autoPowerOff.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/44_autoPowerOff.svg"/>
        <img v-if="f2" class="panelImg" src="../assets/controlPanel_green/45_F2.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/45_F2.svg"/>
        <img v-if="light" class="panelImg" src="../assets/controlPanel_green/46_light.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/46_light.svg"/><br>
        <img v-if="f4" class="panelImg" src="../assets/controlPanel_green/47_F4.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/47_F4.svg"/>
        <img v-if="f5" class="panelImg" src="../assets/controlPanel_green/48_F5.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/48_F5.svg"/>
        <img v-if="f6" class="panelImg" src="../assets/controlPanel_green/49_F6.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/49_F6.svg"/><br>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-row>
        <b-col align-self="start" class="border-0">
          啟動<br>
          <svg height="100" width="100">
            <circle v-if="green_light" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#28FF28" />
            <circle v-else cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#006000" />
          </svg>
        </b-col>
        <b-col align-self="start" class="border-0">
          停止<br>
          <svg height="100" width="100">
            <circle v-if="red_light" cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#FF0000" />
            <circle v-else cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="#930000" />
          </svg>
        </b-col>
        </b-row>
      </b-col>
      <b-col align-self="center">
        <label for="inputRatio">進給率百分比:</label>
        <div style="display:inline"><input type="text" class="panelInput" id="inputRatio" name="inputRatio" :value="inputRatio" readonly></div>
      </b-col>
      <b-col>
        <img v-if="cuttingFluid" class="panelImg" src="../assets/controlPanel_green/40_cuttingFluid.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/40_cuttingFluid.svg"/>
        <img v-if="cuttingErosion" class="panelImg" src="../assets/controlPanel_green/41_cuttingErosion.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/41_cuttingErosion.svg"/>
        <img v-if="oildrilling" class="panelImg" src="../assets/controlPanel_green/54_oildrilling.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/54_oildrilling.svg"/><br>
        <img v-if="chippingForward" class="panelImg" src="../assets/controlPanel_green/57_chippingForward.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/57_chippingForward.svg"/>
        <img v-if="chippingBackward" class="panelImg" src="../assets/controlPanel_green/58_chippingBackward.svg"/>
        <img v-else class="panelImg" src="../assets/controlPanel_black/58_chippingBackward.svg"/>
      </b-col>
      <b-col align-self="center">
        <label>保護:</label>
        <div style="display:inline"><input type="text" class="panelInput" id="protection" name="protection" :value="protection" readonly></div>
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
    name: "ControlPanel_3",
    data() {
        return {
          force_stop: 0,
          green_light: 0,
          red_light: 0,
          ready: 0,         //a1 
          hands: 0,         //a2
          safeDoorRelease: 0,  //a3
          workingLight: 0,     //a4
          fastMoveRatio: "0",
          inputRatio: "0",
          rotatingSpdRatio: "0",
          programEdit: 0,   //b1
          memoryExe: 0,     //b2
          manualEdit: 0,    //b3
          paperTapExe: 0,   //b4
          handwheel: 0,     //b5
          inching: 0,       //b6
          impart: 0,        //b7
          return2origin: 0, //b8
          spindleNum: "0",
          waitedNum: "0",
          test: 0,          //d1
          singleExe: 0,     //d2
          singleSkip: 0,    //d3
          stopChoosing: 0,  //d4
          mechanicalLock: 0,//d5
          reserved: 0,      //d6
          spindleLoading: 0,
          spindleTurnRate: 0,
          add4: 0,          //c1
          addZ: 0,          //c2
          minusY: 0,        //c3
          add5: 0,          //c4
          addX: 0,          //c5
          fastMove: 0,      //c6
          minusX: 0,        //c7
          addY: 0,          //c8
          minusZ: 0,             // c9
          minus4: 0,             // c10
          minus5: 0,             // c11
          overtravelRelease: 0,  // c12
          blowCrumbs: 0,         // e1
          programmingHandwheel: 0, // e2
          m54: 0,         // e3
          openDoor: 0,            // e4
          programRegen: 0,        // e5
          m56: 0,         // e6
          spindleStop: 0,     //f1
          spindleForword: 0,  //f2
          spindleReversal: 0, //f3
          spindleFixAngle: 0, //f4
          minus: 0,           //f6
          hundred: 0,         //f7
          plus: 0,            //f8
          cuttingFluid: 0,        // g1
          cuttingErosion: 0,      // g2
          oildrilling: 0,         // g3
          chippingForward: 0,      // g4
          chippingBackward: 0,     // g5
          manualChange: 0,        // h1
          knifeVertical: 0,        // h2
          knifeForward: 0,         // h3
          knifeBackward: 0,        // h4
          autoPowerOff: 0,        // i1
          f2: 0,                   // i2
          light: 0,               // i3
          f4: 0,                  // i4
          f5: 0,                  // i5
          f6: 0,                  // i6
          protection: "編輯",
          token_control: ""
        }
    },
     methods: {
        getToken(){
          axios({
            method: 'post',
            // crossdomain: true,
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
            this.token_control = res.data.access_token;
          })
        },
        getOperationStatus() {
            axios({
              method: 'post',
              url: '/getcnc',
              data: {id:'cnc3'},
              headers: {
                'Authorization': 'bearer ' + this.token_control 
              }
            })
            .then(res => {
                this.force_stop = res.data.force_stop;
                this.green_light = res.data.green_light;
                this.red_light = res.data.red_light;
                this.ready = res.data.a1;       // 備妥
                this.hands = res.data.a2;       // 雙手執行
                this.safeDoorRelease = res.data.a3;       // 安全門釋放
                this.workingLight = res.data.a4;       // 工作燈
                this.programEdit = res.data.b1;        // 程式編輯 
                this.memoryExe = res.data.b2;          // 記憶執行
                this.manualEdit = res.data.b3;         // 手動編輯
                this.paperTapExe = res.data.b4;        // 紙帶執行
                this.handwheel = res.data.b5;          // 手輪
                this.inching = res.data.b6;            // 寸動
                this.impart = res.data.b7;             // 傳授
                this.return2origin = res.data.b8;      // 原點復歸
                this.test = res.data.d1;               // 試俥
                this.singleExe = res.data.d2;          // 單節執行
                this.singleSkip = res.data.d3;         // 單節跳略
                this.stopChoosing = res.data.d4;       // 選擇停止
                this.mechanicalLock = res.data.d5;     // 機械鎖定
                this.reserved = res.data.d6;           // 預留
                this.add4 = res.data.c1;              // +4
                this.addZ = res.data.c2;              // +z 
                this.minusY = res.data.c3;             // -y
                this.add5 = res.data.c4;              // +5 
                this.addX = res.data.c5;              // +x
                this.fastMove = res.data.c6;           // 快動
                this.minusX = res.data.c7;             // -x
                this.addY = res.data.c8;             // +y
                this.minusZ = res.data.c9;             // -z
                this.minus4 = res.data.c10;             // -4
                this.minus5 = res.data.c11;             // -5
                this.overtravelRelease = res.data.c12;  // 超程釋放
                this.blowCrumbs = res.data.e1;         // 切削吹屑
                this.programmingHandwheel = res.data.e2; // 程式中手輪
                this.m54 = res.data.e3;         // M54
                this.openDoor = res.data.e4;            // 自動門開
                this.programRegen = res.data.e5;        // 程式再生
                this.m56 = res.data.e6;         // M56
                this.spindleStop = res.data.f1;         // 主軸停止
                this.spindleForword = res.data.f2;      // 主軸正轉
                this.spindleReversal = res.data.f3;     // 主軸反轉
                this.spindleFixAngle = res.data.f4;     // 主軸定角度
                this.minus = res.data.f6;               // -
                this.hundred = res.data.f7;             //100%
                this.plus = res.data.f8;                // +
                this.cuttingFluid = res.data.g1;        // 切削液
                this.cuttingErosion = res.data.g2;      // 切削沖刷
                this.oildrilling = res.data.g3          // 油路鑽孔
                this.chippingForward = res.data.g4      // 捲屑機正轉
                this.chippingBackward = res.data.g5     // 捲屑機反轉
                this.manualChange = res.data.h1         // 手動換刀
                this.knifeVertical = res.data.h2        // 刀杯垂直
                this.knifeForward = res.data.h3         // 刀庫正轉
                this.knifeBackward = res.data.h4       // 刀庫反轉
                this.autoPowerOff = res.data.i1        // 自動斷電
                this.f2 = res.data.i2                  // F2
                this.light = res.data.i3               // 日光燈
                this.f4 = res.data.i4                  // F4
                this.f5 = res.data.i5                  // F5
                this.f6 = res.data.i6                  // F6
                this.spindleLoading = res.data.m1;     // 主軸負載
                this.spindleTurnRate = res.data.m2;    // 主軸轉速
                this.spindleNum = res.data.m3;          // 主軸刀號
                this.waitedNum = res.data.m4;           // 等待刀號
                this.rotatingSpdRatio = res.data.m5;   // 轉速百分比
                this.fastMoveRatio = res.data.m6;   // 轉速百分比
                this.inputRatio = res.data.m7;         // 進給率百分比
                // this.protection = res.data.m8;          // 保護
            })
        },
    },
     mounted() {
      this.getToken();
      this.getOperationStatus()
      this.$store.state.cnc.controlPanelTokenInterval = setInterval (() => {this.getToken()}, 300000);
      this.$store.state.cnc.controlPanelInterval = setInterval (() => {this.getOperationStatus();}, 500);
    }
}
</script>
<style>
.bv-example-row .row>.col:not(.header), .bv-example-row .row>[class^=col-] {
    padding-top: .25rem;
    padding-bottom: .25rem;
    background-color: rgba(97, 97, 97, 0.055);
    border: 1px solid rgba(16, 16, 17, 0.397);
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
  
  .panelImg {
    width: 55px;
    height: 55px;
  }

  .panelImgLight {
    width: 55px;
    height: 40px;
    background: #28FF28;
  }

  .panelImgRedLight {
    width: 55px;
    height: 40px;
    background: #ff5328;
  }

  .panelInput{
    width: 90px;
    background-color: rgba(39, 39, 39, 0.651);
  }
</style>