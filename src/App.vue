<template>
  <nav>
    <router-link to="/">Home</router-link> |
  </nav>
  <home-view></home-view>
  <router-view/>
</template>
<script>
import HomeView from "@/views/HomeView";
export default {
  components: {HomeView}
}

</script>
