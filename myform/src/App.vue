<template>
<div class="container">
    
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <hr>
            <label for="" class="label">Name</label>
            <p class="control">
                <input v-model="userData.name" name="name" type="text" class="input">
            </p>

            <label for="" class="label">Email</label>
            <p class="control">
                <input :class="{'is-danger': errorsForm}" v-model="userData.email" name="email" type="text" class="input">
                <label v-if="errorsForm" for="">Error</label>
            </p>

            <label for="" class="label">Re-Email</label>
            <p class="control">
                <input v-model="reEmail" name="re-email" type="text" class="input">
            </p>

            <p class="control">
                <label class="radio">
                    <input value="Masculino" v-model="userData.sexo" type="radio" name="sexo">
                    Masculino
                </label>
                <label class="radio">
                    <input value="Feminino" v-model="userData.sexo" type="radio" name="sexo">
                    Feminino
                </label>
            </p>
            <p class="control">
                <button @click="validaForm" class="button is-primary is-pulled-right">Enviar</button>
            </p>
        </div>
    </div>
    <div class="columns">
        <div class="column is-4 is-offset-4">
            <p>
                global {{userData.name | globalSize}}
            </p>
            <p>
                local {{userData.name | localReverse}}
            </p>
            <p>
                Comp {{compLocalReverse}}
            </p>
            <p>Comp Size {{compLocalSize}}</p>
            <p>Mixin {{teste}}</p>
        </div>
    </div>
</div>
</template>

<script>
import {myMixin} from './mixin'
export default {
    data () {
        return {
            userData:{
                name:'',
                email:'',
                sexo:'',
            },
            reEmail:'',
            errorsForm:false, 
        }
    },
    mixins: [myMixin],
    methods:{
        validaForm(){
            if(this.userData.email === this.reEmail){
                return this.errorsForm = false
            }
            return this.errorsForm = true
        }
    },
    filters:{
        localReverse(value){
            return value.split('').reverse().join('')
        }
    },
    computed:{
        compLocalReverse(){
            return this.userData.name.split('').reverse().join('');
        },
        compLocalSize(){
            if(this.userData.name){
                return this.userData.name + "(" + this.userData.name.length + ")";
            }
        }

    }
}
</script>

<style>

</style>
