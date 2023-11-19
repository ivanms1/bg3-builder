<script lang="ts">
	import BuildDisplay from '$lib/components/build-display/build-display.svelte';

	export let data;
</script>

<div>
	{#if data.build}
		<BuildDisplay build={data.build} />
	{:else}
		<p>Build not found</p>
	{/if}
</div>
