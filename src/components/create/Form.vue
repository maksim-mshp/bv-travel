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
                    v-if="step == 1"
                    :params="params[1]"
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
let all = [
    "Искусство",
    "Наука",
    "Природа",
    "Еда",
    "Театры",
    "Кино",
    "Музеи",
    "Парки",
    "Архитектура",
    "Космос",
    "Концерты",
    "Бары",
    "18+",
    "Европейская кухня",
    "Балет",
    "Опера",
    "Фото",
    "Фаст-фуд",
    "Для детей",
    "Популярное",
    "Другое",
];

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
            2: structuredClone(all)
        },
        all_categories: all
    }),
    methods: {
        receive_data(n, x) {
            this.params[x] = n;
            this.step++;
        },
        submit() {
            console.log(this.params);
        }
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
