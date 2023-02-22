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
    {
        path: "/route/:id",
        component: () => import("../views/Route.vue"),
    },
    {
        // сопоставляется со всем
        path: "*",
        beforeEnter(to) {
            window.location = `/`;
        },
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        } else {
            return { x: 0, y: 0 };
        }
    },
});

router.afterEach((to, from) => {
    ym(92561302, "hit", to.fullPath, {
        referer: from.fullPath,
    });
});

export default router;
