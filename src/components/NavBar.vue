<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark" fixed="top">
      <b-navbar-brand href="/">NTUT-smodist</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item v-if="checkPermission(['admin', 'laser', 'web'])" href="/laser">Laser</b-nav-item>
          <b-nav-item v-if="checkPermission(['admin', 'agv', 'web'])" href="/agv">Agv</b-nav-item>
          <b-form-select id="cnc_select" type="dark" variant="dark" v-if="checkPermission(['admin', 'cnc', 'web'])" v-model="selected" @change="goToCnc()">
            <b-form-select-option :value="null" selected disabled hidden>CNC</b-form-select-option>
            <b-form-select-option value="CNC 1" >CNC 1</b-form-select-option>
            <b-form-select-option value="CNC 2" >CNC 2</b-form-select-option>
            <b-form-select-option value="CNC 3" >CNC 3</b-form-select-option>
          </b-form-select>
          <b-nav-item v-if="checkPermission(['admin'])" href="/log">Log</b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" right>
            <b-navbar-brand> {{ username }} </b-navbar-brand>
            <b-nav-item @click="logout" href="#">Sign Out</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import cncGetters from 'vuex'
import checkPermission from '@/utils/permission'
import store from '../store'

export default {
    name: "NavBar",
     data() {
      return {
        selected: null,
        username: store.getters.name
      }
    },
    methods: {
      checkPermission,
      async logout() {
        this.$router.push('/').catch(()=>{});
        await this.$store.dispatch('user/keycloakLogout')
      },
      goToCnc() {
        if(this.selected=="CNC 1"){
          clearTimeout(this.$store.state.cnc.cncInterval);
          clearTimeout(this.$store.state.cnc.cncTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelInterval);
          this.$router.push('/cnccontrolpanel').catch(()=>{});
        }
        else if (this.selected=="CNC 2") {
          clearTimeout(this.$store.state.cnc.cncInterval);
          clearTimeout(this.$store.state.cnc.cncTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelInterval);
          this.$router.push('/cnccontrolpanel_2').catch(()=>{});
        }
        else if (this.selected=="CNC 3") {
          clearTimeout(this.$store.state.cnc.cncInterval);
          clearTimeout(this.$store.state.cnc.cncTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelTokenInterval);
          clearTimeout(this.$store.state.cnc.controlPanelInterval);
          this.$router.push('/cnccontrolpanel_3').catch(()=>{});
        }
      }
    }
};
</script>

<style>
#cnc_select{
    color: rgba(255, 255, 255, 0.521);
    background-color: #343a40;
    border: 0px;
}
.custom-select {
    display: inline-block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 1.75rem 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    vertical-align: middle;
    border: 0px ;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
}
</style>