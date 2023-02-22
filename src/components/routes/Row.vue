<template>
    <div>
        <h1>{{ city }}</h1>
        <div class="slider">
            <div class="btn-wrapper" data-type="prev">
                <v-btn color="primary" fab small @click.prevent="slidePrev" :disabled="isPrevDisabled"
                    ><v-icon dark> mdi-arrow-left </v-icon></v-btn
                >
            </div>
            <div class="wrapper">
                <div>
                    <hooper
                        :trimWhiteSpace="true"
                        :wheelControl="false"
                        :itemsToShow="get_size()"
                        :mouseDrag="false"
                        class="all"
                        ref="carousel"
                    >
                        <slide class="slide" v-for="n in places.length" :key="n">
                            <div class="card-wrapper">
                                <v-card :to="'/route/' + places[n - 1].id" :class="'card-' + n" @click="open_popup(n - 1)">
                                    <v-img
                                        height="270px"
                                        :src="API_URL + '/images/' + places[n - 1].image"
                                    >
                                    </v-img>
                                    <v-card-title class="card-title">{{ places[n - 1].name }}</v-card-title>

                                    <v-card-text class="text--primary card-description">
                                        Длительность: {{ places[n - 1].duration }} {{convert_time(places[n - 1].duration)}} <br />
                                        Стоимость: {{ places[n - 1].cost }} <br />
                                        Количество мест: {{ places[n - 1].places_len }} <br />
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn color="primary" text :to="'/route/' + places[n - 1].id">
                                            Подробнее
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </div>
                        </slide>
                    </hooper>
                </div>
            </div>
            <div class="btn-wrapper" data-type="next">
                <v-btn fab small color="primary" @click.prevent="slideNext" :disabled="isNextDisabled"
                    ><v-icon dark> mdi-arrow-right </v-icon></v-btn
                >
            </div>
        </div>
    </div>
</template>

<script>
import {
    Hooper,
    Slide,
    Progress as HooperProgress,
    Pagination as HooperPagination,
    Navigation as HooperNavigation,
} from "hooper";
import "hooper/dist/hooper.css";

export default {
    props: ["places", "city"],
    data: () => ({
        id: Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2),
        currentSlide: 0,
    }),
    components: {
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation,
    },
    watch: {
        carouselData() {
            this.$refs.carousel.slideTo(this.carouselData);
        },
    },
    methods: {
        slidePrev() {
            this.$refs.carousel.slidePrev();
            this.currentSlide = this.$refs.carousel.currentSlide;
        },
        slideNext() {
            this.$refs.carousel.slideNext();
            this.currentSlide = this.$refs.carousel.currentSlide;
        },
        get_size() {
            if (window.innerWidth < 600) {
                return 1;
            }
            return (window.innerWidth / 1000) * 1.85;
        },
        decOfNum(number, titles) {
            var decCache = [],
                decCases = [2, 0, 1, 1, 1, 2];
            if (!decCache[number])
                decCache[number] = number % 100 > 4 && number % 100 < 20 ? 2 : decCases[Math.min(number % 10, 5)];
            return titles[decCache[number]];
        },
        convert_time(n) {
            return this.decOfNum(n, ["день", "дня", "дней"]);;
        },
    },
    computed: {
        isPrevDisabled() {
            return this.currentSlide === 0;
        },
        isNextDisabled() {
            return (
                this.currentSlide === this.places.length - Math.min(this.get_size(), this.places.length)
            );
        },
    },
    mounted() {},
};
</script>

<style scoped>
h1 {
    padding: 20px;
    margin: 0;
    padding-bottom: 0;
}

.card-title {
    font-weight: 700;
    text-overflow: ellipsis;
    width: calc(100%);
    white-space: nowrap;
    display: inline-block;
    overflow: hidden;
    padding-bottom: 0;
}

.card-description {
    font-size: 1.05em;
    font-weight: 500;
    padding-bottom: 0;
}

.slider {
    display: flex;
    justify-content: space-between;
}

.wrapper {
    padding: 20px 0;
    max-width: calc(100vw - 160px - 20px);
    width: 100%;
    margin: auto;
}

.btn-wrapper {
    width: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.all {
    height: 470px;
}

.card-wrapper {
    border-left: 10px solid white;
    border-right: 10px solid white;
}

.slide:first-child > .card-wrapper {
    border-left: none;
}
.slide:last-child > .card-wrapper {
    border-left: none;
}

.slide:first-child {
    margin-left: 2px;
}

@media (max-width: 599px) {
    .btn-wrapper {
        display: none;
    }

    .wrapper {
        max-width: calc(100% - 40px);
    }
}
</style>

<style>
ul.hooper-track {
    padding: 0;
}
</style>
