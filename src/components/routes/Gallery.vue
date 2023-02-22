<template>
    <div class="gallery" v-if="is_mounted">
        <hooper :playSpeed="2000" group="group1" class="img-view" ref="carousel">
            <slide v-for="i in images" :key="i">
                <v-img width="100%" :aspect-ratio="16 / 9" :src="API_URL + '/images/' + i"></v-img>
            </slide>
        </hooper>

        <hooper group="group1" class="nav-view" :itemsToShow="calc_to_show()" :centerMode="true">
            <slide v-for="i in images" :key="i">
                <v-img class="slider-image" :src="API_URL + '/images/' + i" @click="slide(i)"></v-img>
            </slide>

            <hooper-navigation slot="hooper-addons"></hooper-navigation>
            <hooper-pagination slot="hooper-addons"></hooper-pagination>
        </hooper>
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
    components: {
        Hooper,
        Slide,
        HooperProgress,
        HooperPagination,
        HooperNavigation,
    },
    props: ['id', 'images'],
    data: () => ({
        is_mounted: false
    }),
    methods: {
        calc_to_show() {
            let a = 'div[data-gallery-id="' + this.id + '"]';
            a = document.querySelector(a);
            a = a.getBoundingClientRect().width;
            return Math.floor(a / 150);
        },
        slide(n) {
            this.$refs.carousel.slideTo(n - 1);
        }
    },
    mounted() {
        this.is_mounted = true;
    }
};
</script>

<style scoped>
.img-view {
    width: 100%;
    aspect-ratio: 16/9;
    height: initial;
}

.nav-view {
    height: 180px;
}

.slider-image {
    width: 150px;
    height: 150px;
    box-sizing: border-box;
    border: 10px solid #fff;
    border-right: none;
    cursor: pointer;
}
</style>

<style>
.gallery .nav-view .hooper-indicator {
    background-color: #c7c7c7;
}

.gallery .nav-view .hooper-indicator:hover, .hooper-indicator.is-active {
    background-color: #4285f4 !important;
}

.gallery .v-application ul, .v-application ol {
    padding-left: none;
}
</style>