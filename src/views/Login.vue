<template>
    <div>
        <nav>
        <div class="nav-wrapper blue darken-1">
            <a href="#" class="brand-logo center">Login</a>
        </div>
        </nav>

        <div class="container">
    
            <form @submit.prevent="save" class="col s12">
                
                <div class="row">
                    
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="email" type="email" class="validate">
                            <label for="email">Email</label>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="input-field col s6">
                            <input id="password" type="password" class="validate">
                            <label for="password">Password</label>
                        </div>
                    </div>
            
                    
                </div>
                
            </form>

        </div>

    
    </div>

</template>

<script>

import User from '../service/users'


export default {
  name: 'Login',
 

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

}

</script>

<style>


</style>
