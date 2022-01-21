<template>
    <div id="iframeClass">
        <iframe id="myFrame" :src='src' :style="frameStyle" ref="iframe" ></iframe>
    </div>
</template>

<script>
    export default {
        name:'vueFrame',
        components:{},
        data(){
            return{
                frameStyle:{
                    width:"100%",
                    height:"100%"
                },
                src:"https://vpn.ntut-smodist.tw",
                
            }
        },
        mounted:{
            // Your mounted scripts
        },
        methods:{
            // Your methods scripts
        }
    };
</script>

<style> 
#iframeClass {
    width: 100%;
    height: 100%;
}
</style>