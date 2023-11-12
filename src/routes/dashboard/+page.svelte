<script lang="ts">
	export let data;
</script>

<div>
	<p class="text-xl font-bold">Dashboard</p>
	{#each data.builds as build (build.id)}
		<div>
			<h2>{build.name}</h2>
			<p>{build.data}</p>
		</div>
	{/each}
</div>
