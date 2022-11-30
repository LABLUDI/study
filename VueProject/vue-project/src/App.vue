<template>
	<div class="app">
		<post-form
			@create="createPost"/>
		<post-list
			:posts="posts"
		/>
	</div>
</template>

<script>
import PostForm from "@/components/PostForm.vue"
import PostList from "@/components/PostList.vue"

export default {
	components: {
		PostList, PostForm
	},
	data() {
		return {
			posts: [
				{id: 1, title: 'JavaScript', body: 'Описание поста'},
				{id: 1, title: 'JavaScript', body: 'Описание поста'},
				{id: 1, title: 'JavaScript', body: 'Описание поста'},
			]
		}
	},
	methods: {
		createPost(post, second, third) {
			console.log(post);
			console.log(second);
			console.log(third);
		},
		
	}
}

</script>

<style>
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}



	.app {
		padding: 20px;
	}

</style>