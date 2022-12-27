<template>
	<div class="main-wrap">
		<MainImage></MainImage>
		<v-sheet color="white" height="1100"></v-sheet>
	</div>
</template>

<script>
import MainImage from '@/components/main/Image.vue';
export default {
	name: "Main",
	components: {
		MainImage
	}
};
</script>