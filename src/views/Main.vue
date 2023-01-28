<template>
	<div class="main-wrap">
		<MainImage></MainImage>
		<About></About>
		<HowItWorks></HowItWorks>
	</div>
</template>

<script>
import MainImage from '@/components/main/Image.vue';
import HowItWorks from '@/components/main/HowItWorks.vue';
import About from '@/components/main/About.vue';
export default {
	name: "Main",
	components: {
		MainImage, HowItWorks, About
	},
	mounted() {
        window.scrollTo(0, 0);
    }
};
</script>