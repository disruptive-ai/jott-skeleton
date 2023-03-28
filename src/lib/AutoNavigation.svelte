<script lang='ts'>
    import { drawerStore } from '@skeletonlabs/skeleton';

    function drawerClose(): void {
        drawerStore.close();
    }
</script>

  
<nav class="list-nav p-4">
    <h2>Navigation</h2>
    <hr/> 
	<ul>
		<li><a href="/" on:click={drawerClose}>Home</a></li>
        <li><a href="/about" on:click={drawerClose}>About</a></li>
	</ul>
</nav>