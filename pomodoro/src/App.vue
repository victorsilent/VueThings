<template>
    <div id="app">
        <section class="hero is-fullheight is-info">
            <div class="hero-body">
                <div class="container has-text-centered">
                    <app-watch :startTime="startTime"></app-watch>
                    <!-- <app-menu-start></app-menu-start> -->
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Watch from './components/Watch.vue'
export default {
    data () {
        return {
            startTime: 25,
        }
    },
    components:{
        'app-watch': Watch,
    }
}

</script>

<style>

</style>
