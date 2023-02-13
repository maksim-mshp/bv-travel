<template>
    <div><Row :places="routes[0]"></Row></div>
</template>

<script>
import Row from "@/components/routes/Row.vue";

export default {
    mounted() {
        window.scrollTo(0, 0);
    },
    components: {
        Row,
    },
    data: () => ({
        routes: [
            {
                "city": "Москва",
                "routes": [
                    {
                        "name": "Центр Москвы",
                        "image": "34.jpg",
                        "duration": 0,
                        "cost": 0,
                        "places_len": 8,
                    },
                    {
                        "name": "Романтическая Москва",
                        "image": "2.jpg",
                        "duration": 0,
                        "cost": 0,
                        "places_len": 4,
                    },
                    {
                        "name": "Исторические места Москвы",
                        "image": "35.jpg",
                        "duration": 0,
                        "cost": 0,
                        "places_len": 7,
                    },
                    {
                        "name": "Москва для детей",
                        "image": "40.jpg",
                        "duration": 0,
                        "cost": 0,
                        "places_len": 8,
                    },
                    {
                        "name": "Парки Москвы",
                        "image": "34.jpg",
                        "duration": 0,
                        "cost": 0,
                        "places_len": 9,
                    },
                ],
            },
        ],
    }),
};
</script>

<style></style>
