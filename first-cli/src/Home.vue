<template>
  <div>
    <sserver v-for="serve in 5"></sserver>
  </div>
</template>
<script>
  import ServerStatus from './ServerStatus.vue'
  export default {
    components: {
      'sserver': ServerStatus
    }
  }
</script>