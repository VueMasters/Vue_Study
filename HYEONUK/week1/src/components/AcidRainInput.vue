<template>
    <input type="text" v-model="word" @keyup.enter="input(word)" />
</template>

<script>
export default {
    name: "AcidRainInput",
    data: () => ({
        word: ""
    }),
    methods: {
        input(word) {
            this.word = "";
            this.$emit("input-event", word);
        }
    }
};
</script>

<style scoped>
</style>