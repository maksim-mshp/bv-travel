<template>
    <div v-if="routes != null">
        <Row v-for="(value, key) in routes" :key="key" :city="key" :places="value"></Row>
    </div>
</template>

<script>
import Row from "@/components/routes/Row.vue";

export default {
    mounted() {
    },
    components: {
        Row,
    },
    data: () => ({
        routes: null,
    }),
    mounted() {
        this.axios.get(this.API_URL + "/routes/popular").then((response) => {
            this.routes = response.data;
        });
    },
};
</script>

<style></style>
