<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!</p>
        <p>{{name}}</p>
        <button @click="changeName">Change Name</button>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail :myName="name" :userAge="age" :resetFn="resetName" @nameWasReset="name = $event"></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit :userAge="age" :resetAFn="resetAge" @ageWasUpdated="age = $event"></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';

    export default {
        data: function(){
            return{
                name: 'Max',
                age: 27
            }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        },
        methods: {
            changeName() {
                this.name = "Ana"
            },
            resetName(){
                this.name = 'Maxx'
            },
            resetAge(){
                this.age = 39
            }
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
