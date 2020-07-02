<template>
    <div>
        <div class="md-area" v-html="mdData"></div>
    </div>
</template>

<script>
import Vue from "raw-loader!@/assets/md/Vue.md";
import Question from "raw-loader!@/assets/md/Question.md";

const marked = require("marked");

export default {
    data: () => ({
        md: {
            Vue: {
                data: Vue
            },
            Question: {
                data: Question
            }
        },
        data: ""
    }),
    watch: {
        $route () {
            this.load();
        }
    },
    created() {
        this.load();
    },
    methods: {
        load() {
            let file = this.$route.params.name;
            if (!this.md[file]) {
                this.$router.push({ name: "pagenotfound" });
            } else {
                this.data = this.md[file].data;
            }
        },
    },
    computed: {
        mdData() {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                headerIds: false,
                tables: true,
                breaks: true,
                pedantic: false,
                smartLists: true,
                smartypants: false
            });
            return marked(this.data);
        }
    }
};
</script>

<style>
.md-area {
    margin-left: 20px;
    text-align: left;
}
</style>