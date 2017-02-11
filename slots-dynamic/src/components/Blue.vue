<template>
    <div>
      <slot></slot>
      <p>{{comoChegaLa}}</p>
      <button type="button" class="btn btn-default" @click="clickButton()">
        Emmit Event :)
      </button>
    </div>
</template>

<script>
    export default{
        props: {
            comoChegaLa: Number
        },
        methods:{
            clickButton(){
                this.$emit('clickeds','Botão Clicado')
            }
        }
    }
</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
