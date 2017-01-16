new Vue({
  el: '#exercise',
  data: {
    classes: {
      'highlight': true,
      'shrink': false
    }
  },
  methods: {
    startEffect: function(event) {
      let vm = this;
      setTimeout(function(){
        vm.classes.highlight = !vm.classes.highlight
        vm.classes.shrink = !vm.classes.shrink
      }, 1000)
    },
    startProgress: function (argument) {
    
    }
  },
 
});
