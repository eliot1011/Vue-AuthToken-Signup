<template>
  <div id="login-view">
    <h1>Welcome to our website</h1>
    <form @submit.prevent="submit" class="myForm">
      Username:<MDBInput label="Input User Name" v-model="inputs.username" id="username"/>
      <div style="margin-top: 15px">Password:<MDBInput label="Input Password" v-model="inputs.password" id="password"/></div>
    </form>
    <div style="margin-top:15px">
      <MDBBtn color="primary" @click="login(inputs)" id="login-button">Login</MDBBtn>
      <MDBBtn color="danger" id="register-button">REGISTER</MDBBtn>
    </div>
    <div>
      <!-- <router-link to="/register">create account</router-link> |
      <router-link to="/password_reset">reset password</router-link> -->
    </div>
  </div>
</template>

<script>

import { MDBBtn, MDBInput } from 'mdb-vue-ui-kit';

export default {
  data() {
    return {
      inputs: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    login({ username, password }) {
    },
  },
  components: {
    MDBBtn, MDBInput
  }
};
</script>

<style>
form input {
  display: block
}

#login-view {
  width: 100%;
  height: 100%;
  padding-top: 15%;
  text-align: center;
}

.myForm {
  width: 400px;
  margin-left: 50%;
  margin-top: 50px;
  margin-bottom: 30px;
  transform: translate(-50%, 0);
}

</style>
