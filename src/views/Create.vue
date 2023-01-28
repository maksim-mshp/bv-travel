<template>
    <div>
        <Form></Form>
    </div>
</template>

<script>
import Form from "@/components/create/Form.vue";

export default {
    name: "Create",
    components: {
        Form,
    },
    mounted() {
        window.scrollTo(0, 0);
    }
};
</script>

<style></style>
