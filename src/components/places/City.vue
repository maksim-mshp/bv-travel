<template>
    <div>
        <h1>Москва</h1>
        <div class="slider">
            <div class="btn-wrapper" data-type="prev">
                <v-btn
                    color="primary"
                    fab
                    small
                    @click.prevent="slidePrev"
                    :disabled="isPrevDisabled"
                    ><v-icon dark> mdi-arrow-left </v-icon></v-btn
                >
            </div>
            <div class="wrapper">
                <div>
                    <hooper
                        :trimWhiteSpace="true"
                        :wheelControl="false"
                        :itemsToShow="get_size()"
                        class="all"
                        ref="carousel"
                        @slide="updateCarousel"
                        @updated="dis_update"
                    >
                        <slide
                            class="slide"
                            v-for="n in places.length"
                            :key="n"
                        >
                            <div class="card-wrapper">
                                <v-card :class="'card-' + n">
                                    <v-img
                                        class="white--text align-end"
                                        height="270px"
                                        :src="
                                            'https://bv-travel.mshp.ml/images/' +
                                            places[n - 1].image
                                        "
                                    >
                                        <v-card-title>{{
                                            places[n - 1].name
                                        }}</v-card-title>
                                    </v-img>
                                </v-card>
                            </div>
                        </slide>
                    </hooper>
                </div>
            </div>
            <div class="btn-wrapper" data-type="next">
                <v-btn
                    fab
                    small
                    color="primary"
                    @click.prevent="slideNext"
                    :disabled="isNextDisabled"
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
    props: ["places"],
    data: () => ({
        id:
            Math.random().toString(36).slice(2) +
            Math.random().toString(36).slice(2),
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
    },
    computed: {
        isPrevDisabled() {
            return this.currentSlide === 0;
        },
        isNextDisabled() {
            return (
                this.currentSlide ===
                this.places.length -
                    Math.min(this.get_size(), this.places.length)
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

.slider {
    display: flex;
    justify-content: space-between;
}

.wrapper {
    padding: 20px 0;
    max-height: 310px;
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
    height: 275px;
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
