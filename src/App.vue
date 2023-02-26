<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import Login from './components/Login.vue'
import {MDBBtn } from 'mdb-vue-ui-kit';
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
