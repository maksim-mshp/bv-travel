<template>
    <v-app>
        <v-app-bar class="header" app color="primary" dark>
            <v-app-bar-nav-icon
                @click.stop="drawer = !drawer"
            ></v-app-bar-nav-icon>

            <router-link to="/" class="logo-link">
                <img src="@/assets/white_logo.svg" />
            </router-link>

            <v-spacer></v-spacer>

            <router-link to="">
                <v-btn icon>
                    <v-icon>mdi-login-variant</v-icon>
                </v-btn>
            </router-link>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            class="navigation-drawer"
        >
            <v-list nav dense>
                <v-list-item-group v-model="group" color="primary">
                    <router-link to="/"
                        ><v-list-item>
                            <v-list-item-title>Главная</v-list-item-title>
                        </v-list-item></router-link
                    >

                    <router-link to="/create"
                        ><v-list-item>
                            <v-list-item-title
                                >Создать маршрут</v-list-item-title
                            >
                        </v-list-item></router-link
                    >

                    <router-link to="/popular"
                        ><v-list-item>
                            <v-list-item-title
                                >Популярные маршруты</v-list-item-title
                            >
                        </v-list-item></router-link
                    >

                    <router-link to="/places"
                        ><v-list-item>
                            <v-list-item-title
                                >Интересные места</v-list-item-title
                            >
                        </v-list-item></router-link
                    >
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-main>
            <router-view />
        </v-main>

        <Footer></Footer>
    </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
    components: {
        Footer,
    },

    data: () => ({
        drawer: false,
        group: null,
    }),

    watch: {
        group() {
            this.drawer = false;
        },
    },

    mounted() {
        this.axios.defaults.headers.common["X-Master-Key"] =
            "$2b$10$tf15G4xzYpMvghS3gZ5q4ug.LaMxTEgt/kSgag4gKYezwhz0Jxr0y";
        this.axios.defaults.headers.common["Content-Type"] = "application/json";
    },
};
</script>

<style scoped>
a {
    text-decoration: none !important;
}

.logo-link {
    display: flex;
}

.logo-link > img {
    height: 28px;
    margin-left: 10px;
}

.navigation-drawer {
    font-weight: 600;
}
</style>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

body,
h1,
#app {
    font-family: "Montserrat", sans-serif !important;
}
</style>
