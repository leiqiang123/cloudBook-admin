<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
}
.clearfix::after{
  content: '';
  display: block;
  clear: both;
  width: 0;
  height: 0;
}
</style>
