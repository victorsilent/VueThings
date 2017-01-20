<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers @serverStatusProp="server = $event"></servers>
            <app-server-details :serverProp="server" ></app-server-details>
        </div>
        <hr>
        <app-footer @confirmSend="someData=$event":data="someData"></app-footer>

        {{someData}}

    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
        data: function(){
            return {
                server:'',
                someData:'Default'
            }
        },
        components: {
            appHeader: Header,
            Servers,
            'app-server-details': ServerDetails,
            'app-footer': Footer
        }
    }
</script>

<style>

</style>
