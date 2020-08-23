<template>

    <router-view></router-view>
  
</template>

<script>

import User from './service/users'


export default {
  name: 'App',
 

  data(){
    return {
      user: {
        name: '',
        email: '',
        senha: ''
      },
      cont: 0

    }
  },

  methods:{

    save(){

      User.saveUser(this.user).then(response => {
        alert(response);
      })
    
    },

    contador: function(){
      console.log(this.cont++)
    },

   
  }

  

  // mounted(){

  //   User.listUser().then(response => {
  //     console.log(response)
  //   })

  // }

}

</script>

<style>


</style>
