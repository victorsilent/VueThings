<template>
  <div>
    <div @click="switched(true)" class="btn" :class="{active: value}">
      on
    </div>
     <div @click="switched(false)" class="btn" :class="{active: !value}">
      off
    </div>
  </div>
</template>

<script>
  export default{
    props: ['value'],
    methods:{
      switched(isOn){
        this.$emit('input',isOn);
      }
    }
  }
</script>
<style scoped>
  .btn{
    padding: 10px;
    background-color: #333;
    transition: background 0.2s ease-in;
    color: #fff;
  }
  .active{
    background-color: #0f0;
  }
</style>