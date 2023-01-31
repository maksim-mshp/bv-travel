<template>
    <div>
        <h1>Москва</h1>
        <div class="wrapper">
            <div :class="'places place-' + id">
                <v-card
                    max-width="400"
                    v-for="n in places.length"
                    :class="'card-' + n"
                    :key="n"
                >
                    <v-img
                        class="white--text align-end"
                        height="270px"
                        :src="
                            'https://bv-travel.mshp.ml/images/' +
                            places[n - 1].image
                        "
                    >
                        <v-card-title>{{ places[n - 1].name }}</v-card-title>
                    </v-img>
                </v-card>
            </div>

            <div class="buttons">
                <div class="spacer" :class="last_enable ? 'hidden' : ''"></div>
                <v-btn
                    class="control-btn"
                    :disabled="!last_enable"
                    fab
                    small
                    @click="update(-1)"
                    color="primary"
                    :class="last_enable ? '' : 'hidden'"
                >
                    <v-icon dark> mdi-arrow-left </v-icon>
                </v-btn>
                <v-btn
                    class="control-btn"
                    :disabled="!next_enable"
                    :class="next_enable ? '' : 'hidden'"
                    fab
                    small
                    @click="update(1)"
                    color="primary"
                >
                    <v-icon dark> mdi-arrow-right </v-icon>
                </v-btn>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["places"],
    data: () => ({
        card: 0,
        next_enable: null,
        last_enable: null,
        back_pos: null,
        front_pos: 0,
        cards_count: null,
        id:
            Math.random().toString(36).slice(2) +
            Math.random().toString(36).slice(2),
    }),
    methods: {
        update(n) {
            let a = document
                .querySelector(".place-" + this.id + " > div:last-child")
                .getBoundingClientRect().width;

            this.back_pos -= a * n;
            this.front_pos -= a * n;
            this.card += n;

            document
                .querySelector(".place-" + this.id)
                .scrollTo(this.card * a + this.card * 20, 0);
            this.next_enable =
                this.back_pos > document.documentElement.clientWidth;
            if (this.card >= this.cards_count - 1) {
                this.next_enable = false;
            }
            this.last_enable = this.front_pos < 0;
            console.log(this.front_pos);
        },
    },
    mounted() {
        this.cards_count = this.places.length;
        this.back_pos = document
            .querySelector(".place-" + this.id + " > div:last-child")
            .getBoundingClientRect().right;
        this.update(0);
    },
};
</script>

<style scoped>
h1 {
    padding: 20px;
    margin: 0;
    padding-bottom: 0;
}

.places {
    display: flex;
    padding: 20px;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

.spacer {
    width: 1px;
    height: 1px;
}

.places > * {
    margin-right: 20px !important;
    margin-bottom: 20px !important;
    min-width: 400px;
}

.control-btn {
    margin: 20px;
}

.buttons {
    position: relative;
    z-index: 10;
    top: -310px;
    height: 270px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.wrapper {
    max-height: 310px;
}

@media (max-width: 450px) {
    .places > * {
        min-width: calc(100vw - 55px);
    }
}
</style>

<style>
.hidden {
    display: none;
}
</style>
