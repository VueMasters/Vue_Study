<template>
    <div>
        {{ test1 }}
        {{ test2 }}
    </div>
</template>

<script>
export default {
    props: {
        test1: {
            type: Number,
            required: true,
            validator: (value) => {
                return value % 2 === 0;
            },
        },
        test2: {
            type: [Number, String],
            default: "this-is-default-prop"
            
        }
    },
    watch: {
        '$route'(n, o) {
            console.log(this.$route);
        },
    }
}
</script>

<style scoped>

</style>