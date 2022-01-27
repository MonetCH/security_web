<template>
  <b-container class="bv-example-row" >
    <b-table striped bordered hover fixed class="log_table" :fields="fields"  :items="items">
      <template>
        <b-tr>
          <b-th colspan="2"><span class="sr-only">Name and ID</span></b-th>
          <b-th variant="secondary">Type 1</b-th>
          <b-th variant="primary" colspan="3">Type 2</b-th>
          <b-th variant="danger">Type 3</b-th>
        </b-tr>
      </template>
    </b-table>
    <!-- <b-row class="bg-primary table-bordered"> 
        <b-col> Timestamp </b-col>
        <b-col> Device </b-col>
        <b-col> Username </b-col>
        <b-col> Event </b-col>
    </b-row>
    <b-row>
        <b-col >  13:10:50  </b-col>
        <b-col > Cnc </b-col>
        <b-col > Nick </b-col>
        <b-col > 進到CNC1 </b-col>
    </b-row>
    <b-row>
        <b-col >  13:14:50  </b-col>
        <b-col > Cnc </b-col>
        <b-col > Nick </b-col>
        <b-col > 進到CNC2 </b-col>
    </b-row>
    <b-row>
        <b-col >  13:19:50  </b-col>
        <b-col > Cnc </b-col>
        <b-col > Nick </b-col>
        <b-col > 進到CNC3 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:13:51  </b-col>
        <b-col > Laser </b-col>
        <b-col > Gary </b-col>
        <b-col > 按下取得即時資料 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:14:37  </b-col>
        <b-col > Laser </b-col>
        <b-col > Gary </b-col>
        <b-col > 按下停止搜尋 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:15:40  </b-col>
        <b-col > Laser </b-col>
        <b-col > Gary </b-col>
        <b-col > 按下取得歷史資料 時間範圍:2022.01.26 11:25:40 - 2022.01.26 12:25:40 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:30:40  </b-col>
        <b-col > Laser </b-col>
        <b-col > Gary </b-col>
        <b-col > 改為手動模式 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:30:50  </b-col>
        <b-col > Laser </b-col>
        <b-col > Gary </b-col>
        <b-col > 輸入Z軸位置:10 按下確認 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:31:10  </b-col>
        <b-col > Cnc </b-col>
        <b-col > Claire </b-col>
        <b-col > 進入CNC2 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:35:50  </b-col>
        <b-col > Agv </b-col>
        <b-col > Claire </b-col>
        <b-col > 選擇 進料 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:40:50  </b-col>
        <b-col > Agv </b-col>
        <b-col > Claire </b-col>
        <b-col > 選擇 出料 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:41:50  </b-col>
        <b-col > Agv </b-col>
        <b-col > Claire </b-col>
        <b-col > 選擇 進料 </b-col>
    </b-row>
    <b-row>
        <b-col >  15:46:50  </b-col>
        <b-col > Agv </b-col>
        <b-col > Claire </b-col>
        <b-col > 選擇 出料 </b-col>
    </b-row> -->
  </b-container>
</template>

<script>
import axios from 'axios';
export default {
    mounted() {
        // axios.get("https://www.testjsonapi.com/users/").then((res)=>
        // {
        //     this.items = res.data;
        // })
    },
    data() {
        return {
            fields: [
                {
                    key: 'Timestamp'
                },
                {
                    key: 'Device'
                },
                {
                    key: 'Username'
                },
                {
                    key: 'Event',
                    label: 'EVENT',
                    tdClass: 'text-left',
                },
            ],
            items: [
                { Timestamp: '2021-01-26 13:10:50', Device: 'Cnc', Username: 'Nick', Event: '進到CNC1' },
                { Timestamp: '2021-01-26 13:14:50', Device: 'Cnc', Username: 'Nick', Event: '進到CNC2' },
                { Timestamp: '2021-01-26 13:19:50', Device: 'Cnc', Username: 'Nick', Event: '進到CNC3' },
                { Timestamp: '2021-01-26 15:13:51', Device: 'Laser', Username: 'Gary', Event: '按下取得即時資料' },
                { Timestamp: '2021-01-26 15:14:37', Device: 'Laser', Username: 'Gary', Event: '按下停止搜尋' },
                { Timestamp: '2021-01-26 15:15:40', Device: 'Laser', Username: 'Gary', Event: '按下取得歷史資料 時間範圍:2022.01.26 11:25:40 - 2022.01.26 12:25:40' },
                { Timestamp: '2021-01-26 15:30:40', Device: 'Laser', Username: 'Gary', Event: '改為手動模式' },
                { Timestamp: '2021-01-26 15:30:50', Device: 'Laser', Username: 'Gary', Event: '輸入Z軸位置:10 按下確認' },
                { Timestamp: '2021-01-26 15:31:10', Device: 'Cnc', Username: 'Claire', Event: '進入CNC2' },
                { Timestamp: '2021-01-26 15:35:50', Device: 'Agv', Username: 'Claire', Event: '選擇 進料' },
                { Timestamp: '2021-01-26 15:40:50', Device: 'Agv', Username: 'Claire', Event: '選擇 出料' },
                { Timestamp: '2021-01-26 15:41:50', Device: 'Agv', Username: 'Claire', Event: '選擇 進料' },
                { Timestamp: '2021-01-26 15:46:50', Device: 'Agv', Username: 'Claire', Event: '選擇 出料' },
            ]
        }
    }
}

</script>
<style>
.log_table {
    color:azure !important;
}

.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color:darkgrey
}
</style>