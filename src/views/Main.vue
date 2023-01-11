<template>
	<div class="main-wrap">
		<MainImage></MainImage>
		<HowItWorks></HowItWorks>
		<About></About>
		<Footer></Footer>
	</div>
</template>

<script>
import MainImage from '@/components/main/Image.vue';
import HowItWorks from '@/components/main/HowItWorks.vue';
import About from '@/components/main/About.vue';
import Footer from '@/components/main/Footer.vue';
export default {
	name: "Main",
	components: {
		MainImage, HowItWorks, About, Footer
	}
};
</script>