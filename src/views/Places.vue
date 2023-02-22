<template>
    <div>
        <City v-for="(value, key) in places" :key="key" :city="key" :places="value"></City>
    </div>
</template>

<script>
import City from "@/components/places/City.vue";

export default {
    data: () => ({
        places: []
    }),
    components: {
        City,
    },
    mounted() {
        this.axios.get(this.API_URL + "/places/popular").then((response) => {
            this.places = response.data;
        })
    }
};
</script>

<style></style>
