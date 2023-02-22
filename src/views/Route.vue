<template>
    <div>
        <div class="wrapper">
            <div :data-gallery-id="id"><Gallery :images="images" :id="id"></Gallery></div>
            <div class="information">
                <h2>{{ data.name }}</h2>
                <p>
                    Длительность: {{ data.duration }} {{ convert_time(data.duration) }}<br />
                    Стоимость: {{ data.cost }} <br />
                    Количество мест: {{ data.places.length }} <br />
                </p>
                <ul>
                    <li v-for="i in data.places.length" :key="i" @click="open_popup(i - 1)">
                        {{ data.places[i - 1].name }}
                    </li>
                </ul>
            </div>
        </div>
        <PlacePopUp
            :use_methods="false"
            :popup.sync="popup"
            :data="popup_data"
            @update="(n) => (popup = n)"
        ></PlacePopUp>
    </div>
</template>

<script>
import Gallery from "@/components/routes/Gallery.vue";
import PlacePopUp from "@/components/PlacePopUp.vue";

export default {
    components: {
        Gallery,
        PlacePopUp,
    },
    data: () => ({
        id: Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2),
        data: {},
        popup: false,
        popup_data: null,
        images: [],
    }),
    methods: {
        open_popup(n) {
            this.popup_data = this.data.places[n];
            this.popup = true;
        },
        decOfNum(number, titles) {
            var decCache = [],
                decCases = [2, 0, 1, 1, 1, 2];
            if (!decCache[number])
                decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
            return titles[decCache[number]];
        },
        convert_time(n) {
            return this.decOfNum(n, ["день", "дня", "дней"]);
        },
    },
    mounted() {
        this.axios.get(this.API_URL + "/route/" + this.$route.params.id).then((response) => {
            this.data = response.data;

            this.data.places.forEach((i) => {
                this.images.push(i.image);
            });
        });
    },
};
</script>

<style scoped>
.wrapper {
    display: flex;
}

.wrapper > div {
    width: 50%;
    padding: 20px;
}

.information > p,
.information > ul {
    font-size: 1.1em;
    font-weight: 500;
}

.information > ul > li {
    cursor: pointer;
}

.information > h2 {
    font-size: 2em;
}

@media (max-width: 650px) {
    .wrapper {
        display: block;
    }

    .wrapper > div {
        width: 100%;
    }
}
</style>
