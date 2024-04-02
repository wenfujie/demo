<script setup lang="ts">
import { sort } from "remote_app/utils";
import HelloWorld from 'remote_app/HelloWorld'
import App from 'remote_app/App'

console.log("%c sort", "color:#0f0;", sort(1, 2));
</script>

<template>
  <div>
    <HelloWorld msg="Vite + Vue" />
    <App />
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
