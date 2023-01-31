<template>
    <div>
        <City :places="places"></City>
    </div>
</template>

<script>
import City from "@/components/places/City.vue";

export default {
    name: "Places",
    data: () => ({
        places: []
    }),
    components: {
        City,
    },
    mounted() {
        this.axios.get("https://api.jsonbin.io/v3/b/63d7d007ace6f33a22cef0fa?meta=false").then((response) => {
            this.places = response.data;
            console.log(this.places);
        })
    }
};
</script>

<style></style>
