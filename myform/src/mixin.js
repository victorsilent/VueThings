export const myMixin = {
  computed: {
    teste(){
      if(this.userData.name){
        return this.userData.name + "(" + this.userData.name.length + ")";
      }
    }
  }
  
}