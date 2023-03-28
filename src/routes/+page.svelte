<script>
	export let data;
	let { blogPosts } = data;
	$: ({ blogPosts } = data);
	import PageHeader from '$lib/PageHeader.svelte';
	import Page from './new-post/+page.svelte';
	
</script>

<div class="container p-6 space-y-4">
	<PageHeader PageName="Jott's Posts"/>
	<hr />

	<!-- https://www.skeleton.dev/elements/lists -->

	<nav class="list-nav flex justify-center px-10">
		<ul class="whitespace-normal break-words">
			{#each blogPosts as post}
				<li>
					<a href="/post/{post.id}">
						<strong>{post.title}</strong>
					</a>
					<!-- Author: {post.author} -->
					<!-- {post.content} -->
					<!-- Published on: {post.created_at} -->
				</li>
			{/each}
		</ul>
	</nav>
</div>
