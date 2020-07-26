import Vue from "vue";
import VueRouter from "vue-router";
import Todo from "@/components/Todo";
import MarkdownReader from "@/components/MarkdownReader";
import Computed from "@/components/Computed";
import AcidRain from "@/components/AcidRain";
import NotFound from "@/components/NotFound";
import ErrorTest from "@/components/ErrorTest";
import PropTest from "@/components/PropTest";
import ErrorPage from "@/components/Error";
import StopVsPrevent from "@/components/StopVsPrevent";

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
        path: "/acidrain",
        name: "acidrain",
        component: AcidRain,
    },
    {
        path: "/stopvsprevent",
        name: "stop-vs-prevent",
        component: StopVsPrevent,
    },
    {
        path: "/:name.md",
        name: "markdown",
        component: MarkdownReader,
    },
    {
        path: "/prop-test/:test1",
        name: "PropTest",
        props: ({params}) => ({test1: Number.parseInt(params.test1, 10)}),
        component: PropTest,
    },
    {
        path: "/error-test",
        name: "ErrorTest",
        component: ErrorTest,
    },
    {
        path: "/error",
        name: "Error",
        component: ErrorPage,
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
