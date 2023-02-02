<template>
    <div class="form">
        <v-alert
            class="help"
            outlined
            text
            prominent
            color="primary"
            icon="mdi-help"
            >Выберете место, длительность и бюджет, а после отметьте ваши
            интересы и мы автоматически подберем маршруты, которые помогут вам
            организовать свой отдых</v-alert
        >

        <v-form ref="form" v-model="valid" lazy-validation>
            <v-autocomplete
                clearable
                :items="cities"
                outlined
                label="Город"
                required
                :rules="city_rules"
                v-model="city"
            ></v-autocomplete>
            <div class="sliders">
                <div>
                    <v-slider v-model="duration" min="1" max="7"> </v-slider>
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
</template>

<script>
export default {
    data: () => ({
        valid: false,
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
        city: null,
    }),
    methods: {
        submit() {
            this.$refs.form.validate();
            if (this.valid && this.city != null) {
                let temp = {
                    duration: this.duration,
                    budget: this.range,
                    city: this.city,
                };
                this.$emit("transfer", temp);
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
