<template>
  <v-app-bar app dark>
    <div class="d-flex align-center">
      <v-btn :ripple="false" @click="moveHome">
        <v-img src="@/assets/logo.png" width="100" />
      </v-btn>
    </div>

    <v-spacer></v-spacer>

    <v-btn :ripple="false" href="https://github.com/leejinzero/Vue_Study" text>
      <span class="mr-2">GitHub</span>
      <v-icon>mdi-git</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    moveHome() {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
.v-btn--contained {
  box-shadow: none;
}

.v-btn:not(.v-btn--text):not(.v-btn--outlined):hover:before,
.theme--dark.v-btn:hover::before {
  opacity: 0;
}
</style>
