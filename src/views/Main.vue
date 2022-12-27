<template>
	<div class="main-wrap">
		<v-img
			src="../assets/tabea-schimpf-9-xfYKAI6ZI-unsplash.jpg"
			class="main-img"
		></v-img>
	</div>
</template>

<script>
export default {
	name: "Main",
	data: () => ({
		height: 600,
	}),
	computed: {
		getHeight() {
			return 600;
		},
	},
	methods: {
		resize() {
            let x = document.querySelector('.header').getBoundingClientRect().height;
			document.querySelector('.main-img').style['height'] = `calc(100vh - ${x}px)`
		},
	},
	mounted() {
        this.resize();
		window.addEventListener(
			"resize",
			function (event) {
				this.resize();
			},
			true
		);
	},
};
</script>

<style scoped>
.main-wrap {
	height: 100%;
}

.main-img {
    height: 600px;
}
</style>
