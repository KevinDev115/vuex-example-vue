<template>
  <div>
    <NavBar />
    <router-view></router-view>
  </div>
</template>
    
<script>

import NavBar from "../components/layouts/NavBar";

export default {
  components: {
    NavBar
  }
}
</script>

<style scoped>
</style>