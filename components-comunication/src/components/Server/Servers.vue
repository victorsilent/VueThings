<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <li class="list-group-item"
              v-for="(server,index) in servers"
              @click="serverProp(server)"
              >
              Server #{{server.id}} - Server Status: {{server.status}}
              <button @click="serverStatus(server,index)">
                Edit with BUS
              </button>
              </li>

        </ul>
    </div>
</template>

<script>
  import {eventBus} from '../../main.js';
  export default{
    data: function(){
      return {
        servers: [
          {id:1, status:'Normal'},
          {id:2, status:'Critical'},
          {id:3, status:'Unknow'},
          {id:4, status:'Normal'},
        ]
      }
    },
    methods: {
      serverStatus(server,index){
        eventBus.$emit('showServerStatus',server,index)
      },
      serverProp(server){
        this.$emit('serverStatusProp',server)
      }
    }
  }
</script>

<style>

</style>
