import Vue from 'vue'
import App from './App.vue'

export const notificationBus = new Vue({
  methods: {
    sendNotify(type, message){
      this.$emit('sendNotify',type, message);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
