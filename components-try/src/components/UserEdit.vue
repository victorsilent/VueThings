<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>{{userAge}}</p>
        <button @click="editAge">Edit age</button>
        <button @click="resetAFn">Reset Age From Parent</button>
    </div>
</template>

<script>
  import {eventBus} from '../main';

  export default {
    props: ['userAge','resetAFn'],
    methods: {
      editAge(){
        this.userAge = 30;
        // this.$emit('ageWasUpdated',this.userAge);
        // eventBus.$emit('ageWasEdited',this.userAge); (sending event)
        eventBus.changeAge(this.userAge); //calling a method that send a event
      }
    }
  }
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
