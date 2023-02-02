<template>
    <v-sheet class="main-wrapper">
        <div class="form-wrapper">
            <h1>Создание индивидуального маршрута</h1>
            <!-- <v-progress-linear
                :value="knowledge"
                rounded
                height="6"
            ></v-progress-linear> -->

            <Step1 v-if="step == 1" @transfer="(n) => receive_data(n, 1)"></Step1>
        </div>
    </v-sheet>
</template>

<script>
import Step1 from '@/components/create/steps/Step1.vue';
export default {
    components: {
        Step1
    },
    data: () => ({
        step: 1,
        progress: 33,
        params: {}
    }),
    methods: {
        receive_data(n, x) {
            this.params[x] = n;
            this.step++;
        }
    }
};
</script>

<style scoped>
.form-wrapper {
    /* height: calc(100vh - 64px); */
    padding: 30px;
    font-weight: 500;
}

.form-wrapper > h1 {
    text-align: center;
}
</style>