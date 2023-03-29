<script>
	// @ts-nocheck
	import Clipboard from 'svelte-clipboard';
	import { clipboard } from '@skeletonlabs/skeleton';

	const exampleData = 'This text was copied by the Skeleton clipboard action.';

	export let data;
	const { singleBlogPost } = data;
	let editableHtml = singleBlogPost.title;
</script>

<div class="blog-post p-12" style="max-width:48rem; margin: 0 auto;">
	<article class="space-y-8 md:space-y-12">
		<h1 class="space-y-4">{singleBlogPost.title}</h1>
		<p class="space-y-4">{@html singleBlogPost.content}</p>
	</article>

	<div contenteditable="true" bind:innerHTML={editableHtml} />
	<button use:clipboard={exampleData}>Copy</button>

	<!-- Source -->
	<div data-clipboard="exampleElement">(contents)</div>

	<!-- Trigger -->
	<button use:clipboard={{ element: 'exampleElement' }}>Copy</button>
</div>
