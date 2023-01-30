import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        component: () => import("../views/Main.vue"),
    },
    {
        path: "/create",
        component: () => import("../views/Create.vue"),
    },
    {
        path: "/popular",
        component: () => import("../views/Popular.vue"),
    },
    {
        path: "/places",
        component: () => import("../views/Places.vue"),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
