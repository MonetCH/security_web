
<template>
  <div id="app">
    <NavBar />
    <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
import Cnc from './components/Cnc'
import Cnc_2 from './components/Cnc_2'
import laserProcess from './components/laserProcess'
import ControlPanel from './components/ControlPanel'
import ControlPanel_2 from './components/ControlPanel_2'
import ControlPanel_3 from './components/ControlPanel_3'
import CncControlPanel from './components/CncControlPanel'
import CncControlPanel_2 from './components/CncControlPanel_2'
import CncControlPanel_3 from './components/CncControlPanel_3'
import agv from './components/agv'
import Log from './components/Log'
export default {
  name: 'App',
  components: {
    NavBar,
    Cnc,
    Cnc_2,
    ControlPanel,
    ControlPanel_2,
    ControlPanel_3,
    CncControlPanel,
    CncControlPanel_2,
    CncControlPanel_3,
    laserProcess,
    agv,
    Log
  }
}
</script>

<style> 
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #343a40;
  color: white;
  margin-top: 60px;
}
</style>