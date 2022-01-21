<template>
    <div>
        <Cnc />
        <ControlPanel />
    </div>
</template>

<script>
    import Cnc from './Cnc.vue'
    import ControlPanel from './ControlPanel.vue'

    export default {
        name: "CncControlPanel",
        components: {
            Cnc,
            ControlPanel
        },
        methods: {}
    };
</script>
<style>
body {
    background-color: rgba(68, 68, 68, 0.952);
    color: white;
}
</style>