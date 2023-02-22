<template>
    <v-sheet class="main-wrapper">
        <div class="form-wrapper">
            <h1>Создание индивидуального маршрута</h1>
            <!-- <v-progress-linear
                :value="knowledge"
                rounded
                height="6"
            ></v-progress-linear> -->

            <div class="make_center">
                <Step1
                    v-if="step == 1 && data != null"
                    :params="params[1]"
                    :cities="data.cities"
                    :duration="data.duration"
                    :cost="data.cost"
                    @next="step++"
                ></Step1>
                <Step2
                    v-if="step == 2"
                    :params="params[2]"
                    :categories="all_categories"
                    @prevPage="step--"
                    @next="submit"
                ></Step2>
            </div>
        </div>
    </v-sheet>
</template>

<script>
import Step1 from "@/components/create/steps/Step1.vue";
import Step2 from "@/components/create/steps/Step2.vue";
export default {
    components: {
        Step1,
        Step2,
    },
    data: () => ({
        step: 1,
        progress: 33,
        params: {
            1: {
                city: null,
                duration: 3,
                range: [0, 10000],
            },
            2: null,
        },
        all_categories: null,
        data: null,
    }),
    methods: {
        receive_data(n, x) {
            this.params[x] = n;
            this.step++;
        },
        submit() {
            ym(92561302, "reachGoal", "create_route");
            console.log(this.params);
        },
    },
    beforeCreate() {
        this.axios.get(this.API_URL + "/config").then((response) => {
            this.data = response.data;
            this.params[1].duration = this.data.duration_pos;
            this.all_categories = structuredClone(this.data.services);
            this.params[2] = structuredClone(this.data.services);
        });
    },
};
</script>

<style scoped>
.form-wrapper {
    /* height: calc(100vh - 64px); */
    padding: 30px;
    font-weight: 500;
    height: 100%;
    display: flex;
    flex-direction: column;
}

.form-wrapper > h1 {
    line-height: 1.35;
}

.main-wrapper {
    height: 100%;
}

.form-wrapper > h1 {
    text-align: center;
}

.make_center {
    flex-grow: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
