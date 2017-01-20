<template>
        <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                    <input type="text" v-model="myData" @keydown.enter="confirm()">
                </footer>
            </div>
        </div>
</template>

<script>
export default{
  props: ['data'],
  data: function(){
    return {
      myData: this.data
    }
  },
  methods: {
    confirm(){
      this.$emit('confirmSend',this.myData)
      console.log(this.myData)
    }
  }
}
</script>

<style>

</style>
