<template>
    <div v-if="data != null">
        <div class="background hidden"></div>
        <v-dialog v-model="dialog" max-width="740px" :fullscreen="is_fullscreen">
            <v-card class="card">
                <v-card-title>
                    <span class="place-title">{{ data.name }}</span>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                        <v-icon>mdi-heart</v-icon>
                    </v-btn>
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </v-card-title>

                <div class="main">
                    <v-img :src="API_URL + '/images/' + data.image" class="img"></v-img>

                    <p class="address-and-time">
                        <span class="bold">Адрес:</span> {{ data.city }}, {{ data.address }}<br />
                        <span class="bold">Время:</span> примерно
                        {{ convert_time }}
                    </p>
                    <div style="padding-top: 0;">
                        <v-chip v-for="i in data.tags" :key="i" color="primary" outlined class="tag">
                            {{ i }}
                        </v-chip>
                    </div>

                    <div class="content">
                        <div>
                            {{ data.description }}
                        </div>
                    </div>
                    <div class="buttons">
                        <a target="_blank" v-if="data.site != null" :href="data.site"><v-btn color="primary" style="margin-right: 20px">Перейти на сайт</v-btn></a>
                        <a target="_blank" v-if="data.buy != null" :href="data.buy"><v-btn color="primary">Купить билеты</v-btn></a>
                    </div>
                </div>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
const showDialog = () => {
    const scrollY = document.documentElement.style.getPropertyValue("--scroll-y");
    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
};
const closeDialog = () => {
    const body = document.body;
    const scrollY = body.style.top;
    body.style.position = "";
    body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
};
window.addEventListener("scroll", () => {
    document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
});

export default {
    props: { "popup": {}, "data": {}, "use_methods": { default: true } },
    data: () => ({
        dialog: false,
        is_fullscreen: window.innerWidth <= 700,
    }),
    watch: {
        dialog(n, o) {
            this.$emit("update", n);
            if (n) {
                if (this.use_methods) showDialog();
                if (this.is_fullscreen) {
                    setTimeout(() => {
                        this.resize();
                    }, 200);
                }
            } else {
                if (this.use_methods) closeDialog();
                this.resize();
            }
        },
        popup(n, o) {
            this.dialog = n;
        },
    },
    methods: {
        decOfNum(number, titles) {
            var decCache = [],
                decCases = [2, 0, 1, 1, 1, 2];
            if (!decCache[number])
                decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
            return titles[decCache[number]];
        },
        resize() {
            if (this.is_fullscreen && this.dialog) {
                document.querySelectorAll(".content").forEach((i) => {
                    i.classList.add("content-reset");
                });

                document.querySelectorAll(".background").forEach((i) => {
                    i.classList.remove("hidden");
                });
            } else {
                document.querySelectorAll(".content").forEach((i) => {
                    i.classList.remove("content-reset");
                });

                document.querySelectorAll(".background").forEach((i) => {
                    i.classList.add("hidden");
                });
            }
        },
    },
    computed: {
        convert_time() {
            let a = this.data.min_duration;
            let b = this.data.max_duration;
            let t = Math.floor((a + b) / 2 / 10) * 10;
            a = Math.floor(t / 60);
            b = t % 60;
            let x = this.decOfNum(a, ["час", "часа", "часов"]);
            let y = this.decOfNum(b, ["минута", "минуты", "минут"]);
            let res = "";
            if (a > 0) res += a + " " + x + " ";
            if (b > 0) res += b + " " + y;
            return res;
        },
    },

    mounted() {
        let self = this;
        window.addEventListener(
            "resize",
            function (event) {
                self.is_fullscreen = window.innerWidth <= 700;
                self.resize();
            },
            true
        );
    },
};
</script>

<style lang="less" scoped>
@margin-x: 24px;

.hidden {
    display: none;
}

.background {
    width: 100vh;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background: #fff;
    z-index: 1;
}

@media (max-width: 700px) {
    .card {
        box-shadow: none !important;
    }

    .buttons button {
        width: 100%;
    }
}

.main {
    width: 100%;
    height: 82vh;
    display: flex;
    flex-direction: column;
    font-size: 1.1em;
    font-weight: 500;
}

.bold {
    font-weight: 700;
}

.main > * {
    padding: 10px @margin-x;
}

.content {
    overflow-y: auto;
    flex: 1;
    max-width: calc(100% - (@margin-x * 2));
    padding: 0;
    margin: auto;
}

.content-reset {
    overflow-y: initial;
}

.img {
    width: calc(100% - (@margin-x * 2));
    border-radius: 4px;
    max-height: 400px;
    padding: 0;
    margin: auto;
}

.place-title {
    font-size: 1.25em !important;
    font-weight: 700;
    padding: 5px 0;
    word-break: initial;
}

.buttons {
    margin-bottom: 15px;
    margin-top: 10px;
    padding-top: 0;
}

.buttons button {
    margin-top: 10px;
}

.address-and-time {
    margin: 0;
    padding-bottom: 0;
}

.tag {
    margin-top: 10px;
}

.tag:not(:last-child) {
    margin-right: 10px;
}
</style>
