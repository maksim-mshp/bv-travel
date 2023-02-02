<template>
    <div class="form">
        <v-form ref="form" v-model="valid" lazy-validation>
            <v-alert
                class="help"
                outlined
                text
                prominent
                color="primary"
                icon="mdi-help"
                >Выберете место, длительность и бюджет, а после отметьте ваши
                интересы и мы автоматически подберем маршруты, которые помогут
                вам организовать свой отдых</v-alert
            >
            <v-autocomplete
                clearable
                :items="cities"
                outlined
                label="Город"
                required
                :rules="city_rules"
                v-model="params.city"
            ></v-autocomplete>
            <div class="sliders">
                <div>
                    <v-slider v-model="params.duration" min="1" max="7">
                    </v-slider>
                    <div class="duration-inputs">
                        <div>
                            <v-text-field
                                v-model="params.duration"
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
                    <v-range-slider v-model="params.range" min="0" max="10000">
                    </v-range-slider>
                    <div class="budget-inputs">
                        <div>
                            <v-text-field
                                v-model="params.range[0]"
                                label="от"
                                outlined
                                dense
                                required
                            >
                            </v-text-field>
                        </div>
                        <div>
                            <v-text-field
                                v-model="params.range[1]"
                                label="до"
                                outlined
                                dense
                                required
                            ></v-text-field>
                        </div>
                    </div>
                </div>
            </div>
        </v-form>
        <div class="btn-submit">
            <v-btn block color="primary" large @click="submit">Далее</v-btn>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        valid: false,
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
    props: ["params"],
    methods: {
        submit() {
            this.$refs.form.validate();
            if (this.valid && this.params.city != null) {
                this.$emit("next");
            }
        },
    },
};
</script>

<style scoped>
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

.form > h2 {
    text-align: center;
}

.form {
    /* height: 500px; */
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding-top: 50px;
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
    width: 100%;
}

@media (max-width: 500px) {
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

<style>
.help.v-alert--prominent .v-alert__icon.v-icon:after {
    display: none;
}
</style>
