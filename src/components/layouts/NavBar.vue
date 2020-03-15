<template>
  <nav class="nav-vue navbar navbar-expand-lg navbar-light bg-light">
    <a
      class="navbar-brand"
      href="#"
    >Vue Vuex Example</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div
      class="collapse navbar-collapse"
      id="navbarSupportedContent"
    >
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/"
            exact
          >
            Home
          </router-link>
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            to="/usuarios"
            exact
          >
            Usuarios
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.nav-vue {
  background: #42b883 !important;
  color: #fff !important;
  -webkit-box-shadow: 3px -2px 15px -4px #000000;
  box-shadow: 3px -2px 15px -4px #000000;
}

.nav-vue .nav-link {
  color: rgb(221, 221, 221) !important;
}

.nav-vue .nav-link.active {
  color: #fff !important;
}
</style>