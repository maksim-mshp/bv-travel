<template>
    <div>
        <City></City>
        <City></City>
        <City></City>
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
};
</script>

<style></style>
