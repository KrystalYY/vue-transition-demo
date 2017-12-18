<template>
  <div class="nav">
    <router-link tag="span" to="/" exact>Show & Hide</router-link>
    <router-link tag="span" to="/demo2" exact>Component Change</router-link>
    <router-link tag="span" to="/demo3" exact>List Transition</router-link>
  </div>
</template>

<script>
export default {
  name: 'nav-bar',
  data() {
    return {
    };
  },
};
</script>

<style scoped>
.nav {
  margin: 60px 0;
}

span {
  text-decoration: none;
  padding: 10px;
  cursor: pointer;

  transition: all 0.3s;
}

span:hover,
.router-link-active {
  color: #48B884;
}
</style>
