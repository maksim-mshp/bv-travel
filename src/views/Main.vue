<template>
	<div class="main-wrap">
		<MainImage></MainImage>
		<HowItWorks></HowItWorks>
	</div>
</template>

<script>
import MainImage from '@/components/main/Image.vue';
import HowItWorks from '@/components/main/HowItWorks.vue';
export default {
	name: "Main",
	components: {
		MainImage, HowItWorks
	}
};
</script>