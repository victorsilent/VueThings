<template>
    <div class="col-xs-12 col-sm-6">
        <h2>With eventBus</h2>
        <p>{{server}} - {{index}}</p>
        <h2>With Props</h2>
        <p>{{serverProp}} - {{indexP}}</p>
        <button @click="normalizeServer()">Normalize</button>
    </div>

</template>

<script>
  import {eventBus} from '../../main.js';
  export default{
    props:['serverProp','indexP'],
    data: function(){
      return {
        server:'',
        index: '',
      }
    },
    methods:{
      normalizeServer(){
        this.server.status = 'Normal';
      }
      
    },
    created(){
      eventBus.$on('showServerStatus',(server,index ) => {
        this.server = server
        this.index = index 
      });
    }
  }
</script>

<style>

</style>
