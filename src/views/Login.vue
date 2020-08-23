<template>

<div class="conteiner">

<!-- login form -->
  <div class="row login">
    <div class="col s4 offset-s4">
      <div class="card">
        
        <div class="card-action red white-text">
          <h3>Login Form</h3>
        </div>

        <div class="card-content">
          <div class="form-field">
            <label for="username">Username</label>
            <input type="text" id="username" />
          </div>
          <br />

          <div class="form-field">
            <label for="password">Password</label>
            <input type="password" id="password" />
          </div>
          <br />

          <div class="form-field center-align">
            <button class="btn-large red">Login</button>
          </div>
          <br />
        </div>
      </div>
    </div>
  </div>
</div>

</template>

<script>
import User from "../service/users";

export default {
  name: "Login",

  data() {
    return {
      user: {
        name: "",
        email: "",
        senha: "",
      },
      cont: 0,
    };
  },

  methods: {
    save() {
      User.saveUser(this.user).then((response) => {
        alert(response);
      });
    },

    contador: function () {
      console.log(this.cont++);
    },
  },
};
</script>

<style>

body{
  background-image: url("../img/background.png") ;
  background-size: cover;
}

.login{
  margin-top: 10%;
}

.login .card{
  background: rgba(0, 0, 0, .6);
}

.login label{
  font-size: 16px;
  color: #ccc;
}

</style>
