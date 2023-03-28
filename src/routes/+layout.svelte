<script lang="ts">
	// The ordering of these imports is critical to your app working properly
	import '@skeletonlabs/skeleton/themes/theme-crimson.css';
	// If you have source.organizeImports set to true in VSCode, then it will auto change this ordering
	import '@skeletonlabs/skeleton/styles/all.css';
	// Most of your app wide CSS should be put in this file
	import '../app.postcss';
	import { AppShell, AppBar, Drawer, drawerStore } from '@skeletonlabs/skeleton';
	import Navigation from '$lib/Navigation.svelte';
	import SideNavigation from '$lib/SideNavigation.svelte';
	import PageHeader from '$lib/PageHeader.svelte';
	import { Avatar } from '@skeletonlabs/skeleton';

	function drawerOpen(): void {
		drawerStore.open({});
	}
</script>

<AppShell>
	<!-- Header Slot w/AppBar -->
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<Avatar
					class="h-12"
					width="w-12"
					src="favicon.png"
					border="border-4 border-surface-300-600-token hover:!border-primary-500"
					cursor="cursor-pointer"
				/>
			</svelte:fragment>

			<svelte:fragment slot="trail">
				<!-- <a href="/new-post" class="btn variant-soft-primary">New Post</a> -->
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<!-- Left Sidebar Slot -->
	<svelte:fragment slot="sidebarLeft" />
	<!-- <svelte:fragment slot="sidebarRight">
		<SideNavigation/>
	</svelte:fragment> -->
	<!-- Router Slot -->
	<slot />
	<!-- ---- / ---- -->
	<!-- <svelte:fragment slot="pageFooter">Page Footer</svelte:fragment> -->
</AppShell>
