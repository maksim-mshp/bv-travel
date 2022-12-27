<template>
	<v-app>
		<v-app-bar class="header" app color="primary" dark>
			<router-link to="/">
				<v-toolbar-title>Название</v-toolbar-title></router-link
			>

			<v-spacer></v-spacer>

			<v-btn to="/create" text>
				<span>Создать маршрут</span>
			</v-btn>
			<v-btn text>
				<span>Популярные маршруты</span>
			</v-btn>
			<v-btn text>
				<span>Интересные места</span>
			</v-btn>
		</v-app-bar>

		<v-main>
			<router-view />
		</v-main>
	</v-app>
</template>

<script>
export default {
	name: "App",

	data: () => ({
		//
	}),
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;800&display=swap");

body,
h1,
.v-main {
	font-family: "Montserrat", sans-serif !important;
}
</style>

<style scoped>
a {
	text-decoration: none !important;
	color: white !important;
}
</style>