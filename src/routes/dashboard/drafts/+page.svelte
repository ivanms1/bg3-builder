<script lang="ts">
	export let data;
	console.log(data);
</script>

<div>
	<p class="text-xl font-bold">Drafts</p>
	{#each data.builds as build (build.id)}
		<div>
			<h2>{build.name}</h2>
			<p>{build.data}</p>
		</div>
	{/each}
</div>
