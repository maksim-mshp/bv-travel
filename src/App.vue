<template>
    <v-app>
        <v-app-bar class="header" app color="primary" dark>
            <router-link to="/">
                <v-toolbar-title>Название</v-toolbar-title></router-link
            >

            <v-spacer></v-spacer>

            <router-link to="/create">
                <v-btn text>
                    <span>Создать маршрут</span>
                </v-btn>
            </router-link>
            <router-link to="/popular">
            <v-btn text>
                <span>Популярные маршруты</span>
            </v-btn>
            </router-link>
            <router-link to="/places">
            <v-btn text>
                <span>Интересные места</span>
            </v-btn>
            </router-link>
        </v-app-bar>

        <v-main>
            <router-view />
        </v-main>

        <Footer></Footer>
    </v-app>
</template>

<script>
import Footer from "@/components/Footer.vue";
export default {
    name: "App",
    components: {
        Footer,
    },

    data: () => ({
        //
    }),

    mounted() {
        this.axios.defaults.headers.common['X-Master-Key'] = '$2b$10$tf15G4xzYpMvghS3gZ5q4ug.LaMxTEgt/kSgag4gKYezwhz0Jxr0y';
		this.axios.defaults.headers.common['Content-Type'] = 'application/json';
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap");

body,
h1,
#app {
    font-family: "Montserrat", sans-serif !important;
}
</style>

<style scoped>
a {
    text-decoration: none !important;
    color: white !important;
}
</style>
