<template>
    <div>
        <div class="wrapper">
            <div :data-gallery-id="id"><Gallery :id="id"></Gallery></div>
            <div class="information">
                <h2>{{ data.name }}</h2>
                <p>
                    Длительность: {{ data.duration }} <br />
                    Стоимость: {{ data.cost }} <br />
                    Количество мест: {{ data.places.length }} <br />
                </p>
                <ul>
                    <li v-for="i in data.places.length" :key="i" @click="open_popup(i - 1)">{{ data.places[i - 1].name }}</li>
                </ul>
            </div>
        </div>
        <PlacePopUp :use_methods="false" :popup.sync="popup" :data="popup_data" @update="(n) => (popup = n)"></PlacePopUp>
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
        data: {
            "name": "Центр Москвы",
            "duration": 0,
            "cost": 0,
            "places": [
                { "name": "Александровский сад", "image": "34.jpg" },
                { "name": "Нулевой километр", "image": "36.jpg" },
                { "name": "Красная площадь", "image": "33.jpg" },
                { "name": "Кремль", "image": "35.jpg" },
                { "name": "ГУМ", "image": "50.jpg" },
                { "name": "Никольская", "image": "49.jpg" },
                { "name": "ЦДМ", "image": "40.jpg" },
                { "name": "Большой театр", "image": "48.jpg" },
            ],
        },
        popup: false,
        popup_data: null,
    }),
    methods: {
        open_popup(n) {
            this.popup_data = this.data.places[n];
            this.popup = true;
        },
    },
    mounted() {
        window.scrollTo(0, 0);
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
