<template>
    <v-sheet class="main-wrapper">
        <div class="form-wrapper">
            <h1>Создание индивидуального маршрута</h1>
            <div class="form">
            <v-alert class="help" outlined text color="primary" icon="mdi-help">Выберете место, длительность и бюджет, а после отметьте ваши интересы и мы автоматически подберем маршруты, которые помогут вам организовать свой отдых</v-alert>
                <!-- <h2>Выберите город</h2> -->
                <!-- <div class="cities-btn">
                    <v-btn
                        color="primary"
                        :outlined="checked != 1"
                        @click="check(1)"
                        rounded
                        large
                        >Ялта</v-btn
                    >
                    <v-btn
                        color="primary"
                        :outlined="checked != 2"
                        @click="check(2)"
                        rounded
                        large
                        >Сочи</v-btn
                    >
                    <v-btn
                        color="primary"
                        :outlined="checked != 3"
                        @click="check(3)"
                        rounded
                        large
                        >Москва</v-btn
                    >
                    <v-btn
                        color="primary"
                        :outlined="checked != 4"
                        @click="check(4)"
                        rounded
                        large
                        >Питер</v-btn
                    >
                    <v-btn
                        color="primary"
                        :outlined="checked != 5"
                        @click="check(5)"
                        rounded
                        large
                        >Казань</v-btn
                    >
                </div> -->

                <v-form ref="form" v-model="valid" lazy-validation>
                    <v-autocomplete
                        clearable
                        :items="cities"
                        outlined
                        label="Город"
                        required
                        :rules="city_rules"
                    ></v-autocomplete>
                    <div class="sliders">
                        <div>
                            <v-slider v-model="duration" min="1" max="7">
                            </v-slider>
                            <div class="duration-inputs">
                                <div>
                                    <v-text-field
                                        v-model="duration"
                                        label="длительность"
                                        outlined
                                        dense
                                        required
                                    >
                                    </v-text-field>
                                </div>
                            </div>
                        </div>
                        <div>
                            <v-range-slider v-model="range" min="0" max="10000">
                            </v-range-slider>
                            <div class="budget-inputs">
                                <div>
                                    <v-text-field
                                        v-model="range[0]"
                                        label="от"
                                        outlined
                                        dense
                                        required
                                    >
                                    </v-text-field>
                                </div>
                                <div>
                                    <v-text-field
                                        v-model="range[1]"
                                        label="до"
                                        outlined
                                        dense
                                        required
                                    ></v-text-field>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="btn-submit">
                        <v-btn block color="primary" large @click="submit"
                            >Продолжить</v-btn
                        >
                    </div>
                </v-form>
            </div>
        </div>
    </v-sheet>
</template>

<script>
export default {
    name: "Form",
    data: () => ({
        valid: null,
        checked: 0,
        duration: 3,
        range: [0, 10000],
        cities: [
            "Москва",
            "Ялта",
            "Казань",
            "Санкт-Петербург",
            "Екатеринбург",
            "Калининград",
        ],
        city_rules: [(v) => !!v || "Введите город"],
    }),
    methods: {
        check(n) {
            this.checked = n;
        },
        submit() {
            this.$refs.form.validate();
        },
    },
};
</script>

<style scoped>
.form-wrapper {
    /* height: calc(100vh - 64px); */
    padding: 30px;
    font-weight: 500;
}

.budget-inputs {
    display: flex;
    justify-content: space-between;
    padding-left: 8px;
}

.budget-inputs div {
    width: calc(100% - 8px);
}

.duration-inputs {
    width: calc(100% - 16px);
    margin: auto;
}

.sliders {
    display: flex;
    justify-content: space-between;
    /* margin-top: 30px; */
}

.sliders > div {
    width: calc(50% - 10px);
}

.sliders > div > p {
    font-size: 1.1em;
    font-weight: 600;
    margin-bottom: 10px;
}

.form-wrapper > h1 {
    text-align: center;
}

.form > h2 {
    text-align: center;
}

.form {
    /* height: 500px; */
    max-width: 800px;
    margin: auto;
    margin-top: 20px;
}

.help {
    margin-bottom: 30px;
}

.cities-btn {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
    flex-flow: row wrap;
}

.cities-btn button {
    margin-top: 15px;
}

.btn-submit {
    max-width: 300px;
    margin: auto;
}

/* @media (max-width: 960px) {
    .form-wrapper {
        height: calc(100vh - 56px);
    }
} */

@media (max-width: 500px) {
    /* .cities-btn {
        display: block;
    }

    .cities-btn button {
        width: 100%;
    } */

    .sliders {
        display: block;
    }

    .sliders > div {
        width: 100%;
    }

    .btn-submit {
        max-width: none;
    }
}
</style>
