<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { build } from '$lib/store/build';
	import { fly } from 'svelte/transition';

	function handleSubmit() {
		build.setCurrentStep('race');
	}
</script>

<form
	class="absolute left-1/2 top-1/2 flex h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10 overflow-y-auto py-12"
	in:fly={{ x: 400, duration: 400, delay: 200 }}
	out:fly={{ x: -400, duration: 500 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="text-center text-5xl font-bold">Choose the name of your character</h1>
	<p>{$build.name}</p>
	<Input
		autofocus
		autocomplete="off"
		type="name"
		class="max-w-md"
		bind:value={$build.name}
		id="name"
		placeholder="Name"
	/>
	<Button class="w-40">Next</Button>
</form>
