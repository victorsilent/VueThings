<template>
    <div class="columns">
        <div class="column">
            <h1 class="title">{{formatedTime}}</h1>
            <button class="button is-warning" @click="pause()">pause</button>
            <button class="button is-primary" @click="start()">start</button>
            <button class="button is-danger"  @click="reset()">reset</button>
        </div>
    </div>
</template>


<script>
    export default {
        props: ['startTime'],
        data(){
            return {
                timeActual: this.startTime,
                clock: '',
                formatedTime: '',
                state: 'DEFAULT',
            }
        },
        methods:{
            start(){
                if(this.state === 'DEFAULT' || this.state === 'PAUSED' ){
                    this.state = 'RUNNING';
                    let vm = this;
                    this.clock = setInterval(() =>{
                        vm.timeActual = vm.timeActual - 1
                    },1000)
                }
            },
            pause(){
                clearInterval(this.clock);
                this.state = 'PAUSED';

            },
            reset(){
                clearInterval(this.clock);
                this.state = 'DEFAULT';
                this.timeActual = this.startTime
            },
        },
        watch:{
            timeActual(){
                if(this.timeActual > 0){
                    let minutes = Math.floor(this.timeActual % 3600 / 60);
                    let seconds = Math.floor(this.timeActual % 3600 % 60);
                    let timeFormated = (minutes < 10 ? "0" : "") + minutes + ":"
                                        + (seconds < 10 ? "0" : "") + seconds;
                    this.formatedTime = timeFormated;
                    return;
                }
                alert('ACABOU!');
                this.reset();
                return;
            }
        }
    }
</script>


<style>
    .title{
        font-size: 3em;
    }
</style>
