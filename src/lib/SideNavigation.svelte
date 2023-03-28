<script lang='ts'>
    import { AppRail, AppRailTile, drawerStore } from '@skeletonlabs/skeleton';
    import { page } from '$app/stores';
	import { writable, type Writable } from 'svelte/store';

    function drawerClose(): void {
        drawerStore.close();
    }

    const storeValue: Writable<number> = writable(0);

</script>


<AppRail selected={storeValue}>
	<AppRailTile tag="a" href="/" label="Home" value={0} class="{"/" === $page.url.pathname ? '!bg-primary-500' : ''}">H</AppRailTile>
	<AppRailTile tag="a" href="/about" label="About" value={1} class="{"/about" === $page.url.pathname ? '!bg-primary-500' : ''}">A</AppRailTile>
</AppRail>