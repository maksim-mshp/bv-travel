<template>
    <div class="el-wrapper">
        <div class="categories">
            <div class="categories-wrapper">
                <v-chip
                    v-for="key in categories"
                    :key="key"
                    :outlined="!params.includes(key)"
                    rounded
                    color="primary"
                    @click="change(key)"
                    >{{ key }}</v-chip
                >
            </div>
        </div>
        <div class="control-btns">
            <div class="btn-submit">
                <v-btn
                    block
                    color="primary"
                    large
                    outlined
                    @click="$emit('prevPage')"
                    >Назад</v-btn
                >
            </div>
            <div class="btn-submit">
                <v-btn block color="primary" large @click="submit"
                    >Создать маршрут</v-btn
                >
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ["params", "categories"],
    data: () => ({
        min_categories: 5,
    }),
    methods: {
        submit() {
            if (this.params.length < this.min_categories) {
                this.$toast.error(
                    `Выберите не менее ${this.min_categories} категорий`,
                    {
                        position: "top-right",
                        timeout: 5000,
                        closeOnClick: false,
                        pauseOnFocusLoss: true,
                        pauseOnHover: true,
                        draggable: true,
                        draggablePercent: 0.6,
                        showCloseButtonOnHover: false,
                        hideProgressBar: false,
                        closeButton: "button",
                        icon: true,
                        rtl: false,
                    }
                );
            } else {
                this.$emit("next");
            }
        },
        change(key) {
            let index = this.params.indexOf(key);
            if (index >= 0) {
                this.params.splice(index, 1);
            } else {
                this.params.push(key);
            }
        },
    },
    mounted() {
        window.scrollTo(0, 0);
    },
};
</script>

<style scoped>
.categories-wrapper > span.v-chip {
    margin: 5px;
}

.btn-submit {
    max-width: 300px;
    width: 100%;
}

.btn-submit:first-child {
    margin-right: 10px;
}

.btn-submit:last-child {
    margin-left: 10px;
}

.control-btns {
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
}

.categories {
    text-align: center;
    padding-top: 15px;
    padding-bottom: 15px;
    max-width: 740px;
    margin: auto;
    flex-grow: 1;
    display: flex;
    align-items: center;
}

.el-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
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
