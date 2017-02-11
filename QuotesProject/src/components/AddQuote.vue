<template>
  <div>
    <label class="label">Message</label>
    <p class="control">
      <textarea v-model="newQuote" class="textarea" placeholder="Textarea"></textarea>
    </p>
    <p class="control">
      <button class="button is-primary" @click="addNewQuote()">Add Quote</button>
    </p>
  </div>
</template>

<script>
    import {notificationBus} from '../main.js'
    export default {
      props: ['quotes'],
      data: function(){
          return {
            newQuote: ''
          }
      },
      methods: {
        addNewQuote(){
          if(this.newQuote !== ""){
            if(this.quotes.length<10){
              this.$emit('addNewQuote',this.newQuote);
              this.newQuote = ''
              notificationBus.sendNotify('is-success','Adicionada com sucesso');
              return true
            }
            notificationBus.sendNotify('is-danger','Ja existem 10 quotes, delete uma para inserir uma nova!');
            return false
          }
          notificationBus.sendNotify('is-danger','Campo em branco chupingole!');
          return false
        },
      }
  }
  
</script>