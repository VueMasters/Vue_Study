import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/components/Todo";
import MarkdownReader from "@/components/MarkdownReader";
import Computed from "@/components/Computed";
import NotFound from "@/components/NotFound";
 
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        redirect: "/Vue.md",
    },
    {
        path: "/todo",
        name: "todo",
        component: Todo,
    },
    {
        path: "/computed",
        name: "computed",
        component: Computed,
    },
    {
        path: "/:name.md",
        name: "markdown",
        component: MarkdownReader,
        beforeEnter: (to, from, next) => {
            console.log(to);
            console.log(from);
            next();
        },
        beforeRouteEnter (to, from, next) {
            console.log(to);
            console.log(from);
            next();
        }
    },
    {
        path: "/404",
        name: "pagenotfound",
        component: NotFound,
    },
    {
        path: "/*",
        redirect: "/404",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
