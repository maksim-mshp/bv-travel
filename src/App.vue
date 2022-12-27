<template>
	<v-app>
		<v-app-bar class="header" app color="primary" dark>
			<div class="d-flex align-center">
				Название
			</div>

			<v-spacer></v-spacer>

			<v-btn
				to="/create"
				target="_blank"
				text
			>
				<span>Создать маршрут</span>
			</v-btn>
            <v-btn
				to="/popular"
				target="_blank"
				text
			>
				<span>Популярные маршруты</span>
			</v-btn>
            <v-btn
				to="/create"
				target="_blank"
				text
			>
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
