<template>
    <div>
      <div @click="deleteNotification(index)" v-for="(not, index) in notifications" class="notification" :class="not.type">
        {{not.message}}
        <button  class="delete" @click="deleteNotification(index)"></button>
        
      </div>
    </div>
</template>

<script>
  import {notificationBus} from '../main.js'
  export default {
        data: function(){
            return {
              notifications: [],
              isShow: false,
            }
        },
        methods: {
          deleteNotification(index){
            this.notifications.splice(index,1)
          }
        },
        created(){
          notificationBus.$on('sendNotify',(type, message) => {
            this.isShow= true
            this.notifications.unshift({type, message})
          });
        }
    }
</script>