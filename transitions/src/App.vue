<template>

    <div id="app">
        <!--
            Tambem é possivel alterar as classes *-enter, *-enter-active..
            Basta passar por tag as novas classes, por exemplo:
            enter-active-class="animated bounce"
            leave-active-class="minhapica lazy"...
        -->
        <!-- <button @click="show = false" type="button" class="btn btn-default">
            Hide
        </button>
        <button @click ="show=true"type="button" class="btn btn-default">
            Show
        </button>
        <transition name="fade">
            <div v-show="show" class="alert alert-success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
        </transition>

        <transition name="slide" type="animations" appear>
            <div v-show="show" class="alert alert-success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
        </transition>
        <transition name="fade" appear mode="out-in">
            <div v-if="show" class="alert alert-success" key="success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
            <div v-else class="alert alert-warning" key="warning">
                warning
            </div>
        </transition>
        <hr>
        <hr> -->
        <input type="text" v-model="query" name="" value="">
        <button @click="showJs = !showJs" type="button" class="btn btn-default">
            Hide
        </button>
        <h3>Query: {{query}}</h3>
        <ul>
            <transition-group name="anim-list" tag="ul">
                <li v-for="item in filterWords" key="item">
                    {{item}}
                </li>
            </transition-group>
        </ul>
        <transition
        @before-enter="beforeEnter"
        @enter="enter"
        @before-leave="beforeLeave"
        @leave="leave"
        enter-active-class="fade-enter-active"
          appear>
            <div v-show="showJs" class="alert alert-success">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </div>
        </transition>

    </div>
</template>

<script>
export default {
    name: 'app',
    data () {
        return {
                msg: 'Welcome to Your Vue.js App',
                show: true,
                showJs: true,
                query: '',
                words: ['maçã','pera','uva','limão','banana']
        }
    },
    computed: {
        filterWords(){
            let vm = this;
            return this.words.filter((a)=>{
                return a.indexOf(vm.query) !== -1;
            });
        }
    },
    methods: {
        beforeEnter: function (el) {
        },
        enter: function (el, done) {
            Velocity(el, {opacity: 1, width: '100%'}, { duration: 700, complete: done })
        },
        beforeLeave: function (el) {
            Velocity(el, {backgroundColor:'#f0f'}, {duration: 600})
        },
        leave: function (el, done) {
            Velocity(el, {opacity: 0, width: '50%'}, {duration: 600, complete: done })
        },
    }

}
</script>

<style>
    .anim-list-enter{
        opacity: 0;
        transform: translateY(-20px);
    }
    .anim-list-enter-active{
        transition: all 0.5s ease-out;
    }
    .anim-list-leave-active{
        opacity: 0;
        transition: all 0.5s ease-out;
    }
    .fade-enter{
        opacity: 0;
    }
    .fade-enter-active{
        transition: all 1s ease-out;
    }
    .fade-leave{

    }
    .fade-leave-active{
        transition: all 1s ease-out;
        opacity: 0;
    }

    .slide-enter{
        opacity: 0;
    }
    .slide-enter-active{
        animation: slide-in 1s ease-out;
        transition: opacity 0.5s;
    }
    .slide-leave{
    }
    .slide-leave-active{
        animation: slide-out 1s ease-out;
        transition: opacity 0.5s;
        opacity: 0;
    }

    @keyframes slide-in{
        from{
            transform: translateY(20px);
        }
        to{
            transform: translateY(0px);
        }
    }
    @keyframes slide-out{
        from{
            transform: translateY(0px);
        }
        to{
            transform: translateY(20px);
        }
    }
</style>
