<template>
    <div id="app">
        <the-header></the-header>
        <the-left-navigator></the-left-navigator>

        <div class="content">
            <!-- <todo></todo> -->
            <router-view></router-view>
        </div>
        <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
        <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    </div>
</template>

<script>
import TheHeader from "@/components/TheHeader.vue";
import TheLeftNavigator from "@/components/TheLeftNavigator";

export default {
    name: "App",
    components: {
        TheHeader,
        TheLeftNavigator
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.content {
    margin-top: 30px;
    margin-left: 230px; /* left-nav-bar size */
}
</style>
