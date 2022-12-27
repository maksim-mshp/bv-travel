<template>
	<div class="main-wrap">
		<v-img
			src="@/assets/tabea-schimpf-9-xfYKAI6ZI-unsplash.jpg"
			class="main-img"
		>
			<div class="text-block-main-img">
				<h1>Создать свой маршрут</h1>
				<h2>
					Создайте свой индивидуальный маршрут для вашего путешествия
				</h2>
				<v-btn color="primary" elevation="5" x-large rounded class="btn-main-img" to="/create">Создать</v-btn>
			</div>
		</v-img>
	</div>
</template>

<script>
export default {
	name: "MainImage"
};
</script>

<style scoped>
.main-wrap {
	height: 100%;
}

.btn-main-img {
	/* display: block; */
	margin: auto;
	margin-top: 20px;
}

.main-img {
	height: calc(100vh - 64px);
	display: flex;
	justify-content: center;
	align-items: center;
}

.main-img:after {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: rgba(0, 0, 0, 0.5);
	z-index: 2;
}

.text-block-main-img {
	position: relative;
	z-index: 3;
	color: #fff;
	padding: 30px;
	text-align: center;
}

h1 {
	font-size: 3rem !important;
	font-weight: 600;
	line-height: 120%;
	margin-bottom: 20px;
}

h2 {
	font-size: 1.75rem !important;
	font-weight: 400;
}

h1,
h2 {
	display: block;
	text-align: center;
	color: white;
}

@media (max-width: 960px) {
	.main-img {
		height: calc(100vh - 56px);
	}
}
</style>
