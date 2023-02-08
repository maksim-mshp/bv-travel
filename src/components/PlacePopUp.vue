<template>
    <v-dialog v-model="dialog" max-width="740px">
        <v-card>
            <div class="wrapper">
                <div class="photo">
                    <v-img
                        :src="'https://moveapp.site/images/' + data.image"
                        max-width="650px"
                        max-height="370px"
                        style="border-radius: 4px"
                    ></v-img>
                </div>
                <div class="close">
                    <v-btn icon @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                </div>
            </div>
            <div class="information">
                <h3>{{ data.name }}</h3>
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
                <p class="description">
                    {{ data.description }}
                </p>
                <div class="buttons">
                    <v-btn color="primary" style="margin-right: 20px"
                        >Перейти на сайт</v-btn
                    >
                    <v-btn color="primary">Купить билеты</v-btn>
                </div>
            </div>
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
.wrapper {
    width: 100%;
    display: flex;
    padding: 10px;
}

.photo {
    height: 100%;
    flex: 1;
    margin-top: 15px;
    margin-left: 15px;
}

.information {
    margin-left: 25px;
    margin-top: 10px;
    padding-bottom: 20px;
    max-width: 705px;
}

.information > h3 {
    font-size: 1.6em;
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
