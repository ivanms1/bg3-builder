<script lang="ts">
	export let data;
</script>

<div>
	<p class="text-xl font-bold">Dashboard</p>
	{#each data.builds as build (build.id)}
		<a href={`/build/${build.id}`}>
			<div>
				<h2>{build.name}</h2>
			</div>
		</a>
	{/each}
</div>
