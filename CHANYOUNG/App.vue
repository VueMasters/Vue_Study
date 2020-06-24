<template>
  <div class="container">
    <nav-header></nav-header>
    <h2 class="text-center">Vue를 이용한 게시판</h2>
    <router-view></router-view>
  </div>
</template>

<script>
import NavHeader from "@/components/NavHeader.vue";

export default {
  name: "App",
  components: {
    NavHeader
  }
};
</script>

<style lang="stylus" scoped></style>
