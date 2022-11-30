<template>
  <div class="app">
		<Header />
		<Main />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './views/Main.vue'

export default {
	components: {
		Header,
		Main,
	}
}
</script>

<style lang="scss">
@import "./assets/layouts/normalize.module.scss";

* {
	padding: 0;
	margin: 0;
	box-sizing: border-box;
	background: #fff;
	.container {
		max-width: 1280px;
		margin: 0 auto;
		background: #FFFFFF;
	}
}
</style>