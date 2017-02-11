<template>
    <div @click="deleteQuote()" class="tile is-ancestor">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification is-primary">
            <p class="subtitle">{{quote}}</p>
          </article>
        </div>
      </div>
    </div>
</template>

<script>
  import {notificationBus} from '../main.js'
  export default {
    props:['quote','index'],
    methods:{
      deleteQuote(){
        this.$emit('deleteQuote',this.index)
        notificationBus.sendNotify('is-info','Removido com sucesso');
      }
    }
  }
</script>