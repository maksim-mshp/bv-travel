<template>
	<v-sheet color="black">
		<div class="centerer">
			<router-link to="/"><h2>MoveApp</h2></router-link>
			<div class="main-wrapper">
				<div class="block">
					<a
						target="_blank"
						class="contact-link"
						href="mailto:info@moveapp.site"
						>info@moveapp.site</a
					>
					<div class="tg-links">
						<img src="@/assets/tg_logo.svg" />
						<div>
							<a target="_blank" href="https://t.me/tkrrrina"
								>@tkrrrina</a
							>
							<a target="_blank" href="https://t.me/maksim_mshp"
								>@maksim_mshp</a
							>
						</div>
					</div>
					<a href="tel:+79680795051" class="contact-link" style="padding-bottom: 0px;"
						>+7 968 079-50-51</a
					>
				</div>
				<div class="block links">
					<router-link to="/">Главная</router-link>
					<router-link to="/create">Создать маршрут</router-link>
					<router-link to="/popular">Популярные маршруты</router-link>
					<!-- <router-link to="">Наши подборки</router-link> -->
					<router-link to="/places">Интересные места</router-link>
				</div>
			</div>
		</div>
	</v-sheet>
</template>

<script>
export default {
};
</script>

<style lang="less" scoped>
.main-wrapper {
	display: flex;
	color: white !important;
	justify-content: space-between;
}

.centerer {
	margin: auto;
	max-width: 1100px;
	padding: 40px;
}

img {
	height: 35px;
	width: 35px;
	display: block;
	margin-right: 10px;
}

.block > .contact-link {
	padding-top: 15px;
}

.tg-links {
	display: flex;
	align-items: center;
}

.contact-link {
	padding-bottom: 15px;
	padding-top: 15px;
	line-height: 1;
}

.block {
	width: calc(100% - 235px);
	// font-size: 1.07em;
}

.links a {
	width: 100%;
	line-height: 2;
	display: block;
	// font-size: 1.1em;
}

.links {
	width: 400px;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
}

a {
	color: white !important;
	display: block;
	text-decoration: none;
	flex-wrap: wrap;
}

h2 {
	color: white !important;
	font-weight: 700;
	display: block;
	line-height: 0.8;
}

@media (max-width: 650px) {
	.main-wrapper {
		display: block;
	}

	.centerer {
		padding-left: 50px;
	}

	.block {
		width: 100%;
	}

	.links {
		margin-top: 20px;
	}

	.links a {
		line-height: 1.8;
	}
}
</style>
