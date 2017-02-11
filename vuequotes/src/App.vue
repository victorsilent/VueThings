<template>
    <div class="container">
        <hr>
        <appBar :quotesNum="quotes.length"></appBar>
        <appAddQuote :quotes="quotes" @addNewQuote="addNewQuote($event)"></appAddQuote>
        <hr>
        <appNotification ></appNotification>
        <hr>
        <appQuote @deleteQuote="deleteQuote($event)" v-for="(quote,index) in quotes" :index="index" :quote="quote"></appQuote>

    </div>
</template>

<script>

    import Bar from './components/Bar.vue';
    import Quote from './components/Quote.vue';
    import AddQuote from './components/AddQuote.vue';
    import Notification from './components/Notification.vue';
    export default {
        data: function(){
            return {
                quotes: []
            }
        },
        components: {
            appBar: Bar,
            appQuote: Quote,
            appAddQuote: AddQuote,
            appNotification: Notification,
        },
        methods: {
            addNewQuote(quote){
                this.quotes.unshift(quote);
            },
            deleteQuote(index){
                this.quotes.splice(index,1)
            }
        }
    }
</script>

<style>
</style>
