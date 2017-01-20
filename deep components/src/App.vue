<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent = 'appProfile'">Profile</button>
              <button @click="selectedComponent = 'appContact'">Contact</button>
              <button @click="selectedComponent = 'appBlog'">Blog</button>
              <hr>
              <!-- KEEP-ALIVE SEE DOCS :P -->
              <component :is="selectedComponent"></component>
            </div>
        </div>

    </div>
</template>

<script>
    import Profile from './components/Profile.vue';
    import Contact from './components/Contact.vue';
    import Blog from './components/Blog.vue';
    export default {
        data: function(){
          return {
            selectedComponent: 'appProfile',
          }
        },
        components: {
          appProfile: Profile,
          appContact: Contact,
          appBlog: Blog,
        }
    }
</script>

<style>
</style>
