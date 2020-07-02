<template>
    <header>
        <div class="header">
            <span class="title">{{title}}</span>
        </div>
        <div class="spacer"></div>
    </header>
</template>

<script>
export default {
    watch: {
        $route () {
            const name = this.$route.name;
            
            if (name === "markdown") {
                this.title = this.$route.params.name;
            } else {
                this.title = this.$route.params.title;
            }
        }
    },
    created() {
            const name = this.$route.name;
            
            if (name === "markdown") {
                this.title = this.$route.params.name;
            } else {
                this.title = this.$route.params.title;
            }
    },
    data: () => ({
        title: "",
    }),
};
</script>

<style scoped>
.title {
    color: white;
    font-family: 'Consolas', 'Malgun Gothic', Courier, monospace;
    font-size: 45px;
    
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
}
.header {
    position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
    left: 0; /* top left corner should start at leftmost spot */
    top: 0; /* top left corner should start at topmost spot */
    width: 100%; /* take up the full browser width */
    z-index: 200; /* high z index so other content scrolls underneath */
    height: 100px; /* define height for content */

    background-color: black;

    text-align: center;

    box-shadow: 3px 3px 7px gray;
}

.spacer {
    width: 100%; /* take up the full browser width */
    height: 100px; /* define height for content */
}
</style>