<template>
    <v-dialog v-model="dialog" max-width="740px">
        <v-card class="card" style="height: 90vh">
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

            <v-card-text class="v-card-text">
                <v-img
                    :src="'https://moveapp.site/images/' + data.image"
                    class="img"
                ></v-img>

                <p class="address-and-time">
                    Адрес: {{ data.city }}, {{ data.address }}<br />
                    Время: примерно
                    {{ convert_time }}
                </p>
                <div>
                    <v-chip
                        v-for="i in data.tags"
                        :key="i"
                        color="primary"
                        outlined
                        class="tag"
                    >
                        {{ i }}
                    </v-chip>
                </div>
                <div class="description">
                    {{ data.description }}
                </div>
                <div class="buttons">
                    <v-btn color="primary" style="margin-right: 20px"
                        >Перейти на сайт</v-btn
                    >
                    <v-btn color="primary">Купить билеты</v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    props: ["popup", "data"],
    data: () => ({
        dialog: false,
    }),
    watch: {
        dialog(n, o) {
            this.$emit("update", n);
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
                decCache[number] =
                    number % 100 > 4 && number % 100 < 20
                        ? 2
                        : decCases[Math.min(number % 10, 5)];
            return titles[decCache[number]];
        },
    },
    computed: {
        convert_time() {
            let a = this.data.min_duration;
            let b = this.data.max_duration;
            let t = (a + b) / 2;
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
};
</script>

<style scoped>
.card {
    display: flex;
    flex-direction: column;
}

.v-card-text {
    flex: 1;
    display: flex;
    flex-direction: column;
    font-size: 1.25em;
    font-weight: 500;
}

.img {
    width: 100%;
    border-radius: 4px;
    max-height: 400px;
}

.information {
    margin-top: 10px;
    max-width: 705px;

    display: flex;
    flex-direction: column;
    flex: 1;
}

.description {
    flex: 1;
    overflow-y: scroll;
}

.place-title {
    font-size: 1.25em !important;
    font-weight: 700;
    padding: 5px 0;
}

.buttons {
    margin-top: 10px;
}

.address-and-time {
    margin-bottom: 10px;
}

.tag:not(:last-child) {
    margin-right: 10px;
}

.tag {
    margin-bottom: 10px;
}
</style>
