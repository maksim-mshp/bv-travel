<template>
	<v-sheet class="main-wrapper" color="white" height="1100">
		<h1>Как это работает</h1>

		<div class="desktop">
			<div class="main-content">
				<div class="block">
					<div class="timeline-elem">
						<div class="circle"><span>1</span></div>
						<div class="line"></div>
					</div>
					<div class="text-elem">
						<h3>Выберете город и дату</h3>
						<p>Выберете город и время которое вы проведете в нем</p>
					</div>
				</div>
				<div class="block">
					<div class="timeline-elem">
						<div class="circle"><span>2</span></div>
						<div class="line"></div>
					</div>
					<div class="text-elem">
						<h3>Выбор интересов</h3>
						<p>Отметьте свои предпочтения и цели путешествия</p>
					</div>
				</div>
				<div class="block">
					<div class="timeline-elem">
						<div class="circle"><span>3</span></div>
						<div class="line"></div>
					</div>
					<div class="text-elem">
						<h3>Забронируйте</h3>
						<p>Забронируйте понравившиеся места на нашем сайте</p>
					</div>
				</div>
				<div class="block">
					<div class="timeline-elem">
						<div class="circle"><span>4</span></div>
					</div>
					<div class="text-elem">
						<h3>Наслаждайтесь отдыхом</h3>
						<p>
							Наслаждайтесь отдыхом и не переживайте, что забыли
							про что-то
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mobile">
			<div class="main-content">
				<div class="block">
					<div class="timeline-elem">
						<div class="circle"><span>1</span></div>
						<div class="line"></div>
					</div>
					<div class="text-elem">
						<h3>Наслаждайтесь отдыхом</h3>
						<p>
							Наслаждайтесь отдыхом и не переживайте, что забыли
							про что-то
						</p>
					</div>
				</div>
			</div>
		</div>
	</v-sheet>
</template>

<script>
export default {
	name: "HowItWorks",
};
</script>

<style lang="less" scoped>

@circle-size: 35px;

.main-wrapper {
	padding: 30px;
	text-align: center;
}

.desktop {
	display: inline-block;
	margin: auto;
}

@media (min-width: 801px) {
	.mobile {
		display: none;
	}
}

@media (max-width: 800px) {
	.desktop {
		display: none;
	}
}

.mobile .block {
	width: 100%;
	display: flex;
}

.mobile .timeline-elem {
	width: @circle-size;
}

.mobile .text-elem {
	width: calc(100% - @circle-size);
}

.desktop .block {
	width: calc((100vw - 60px) / 4);
}

.main-content {
	display: flex;
	margin-top: 20px;
	max-width: 1700px;
}

h1 {
	text-align: center;
	font-size: 2.5em !important;
}

.desktop .timeline-elem {
	display: flex;
	align-items: center;
	justify-content: start;
}

.desktop .text-elem {
	text-align: left;
	margin-top: 15px;
	padding-right: 20px;
	max-width: 300px;
}

.circle {
	width: @circle-size;
	height: @circle-size;
	background-color: #000;
	border-radius: 50%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.line {
	width: calc(100% - @circle-size);
	height: 2px;
	background-color: #ddd;
}

.circle span {
	font-weight: 700;
	color: white;
	display: block;
}
</style>
