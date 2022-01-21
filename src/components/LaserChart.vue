<template>
  <div class="small">
    <line-chart :chart-data="datacollection"></line-chart>
    <button class="getDataButton" @click="getData()">取得即時資料</button>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'
  import Vue from 'vue'
  import axios from 'axios'
  import VueAxios from 'vue-axios'
  Vue.use(VueAxios, axios)
  var x_list=  []
  var y_list=  []
  export default {
    components: {
      LineChart,
    },
    data () {
      return {
        datacollection: {}
      }
    },
    mounted () {
      // this.getData()
    },
    methods: {
      drawChart () {
        this.datacollection = {
            labels: x_list,
            datasets: [
                {
                    label: '20210318',
                    backgroundColor: "transparent",
                    data: y_list,
                    borderColor: "#E1E100",
                    borderWidth: 2,
                    pointBackgroundColor: "transparent"
                }
            ]
        }
      },
      getData () {
        var url = "http://127.0.0.1:5000/api/get/laserProcessData"
        return new Promise((resolve, reject) => {
            axios.get(url).then((response) => {
                x_list = response.data.x,
                y_list = response.data.y,
                this.drawChart()
            });
        });
      }
    },
  }
</script>

<style>
  .small {
    /* position: absolute; */
    /* top:0%; */
    /* left:100%; */
    /* width: 100%; */
    /* display: inline; */
    /* background-color: #3C3C3C; */
    /* max-width: 700px; */
    /* margin:  150px auto; */
  }
  .getDataButton{
      /* position: relative; */
      /* top:5%; */
      /* width: 20%; */
  }
</style>