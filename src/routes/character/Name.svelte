<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { fly } from 'svelte/transition';

	export let currentStep = {};
	export let name: string;
	export let className: string;
	export let race: string;

	function handleSubmit() {
		currentStep = 'race';
		className = className;
		name = name;
		race = race;
	}
</script>

<form
	class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10"
	in:fly={{ x: 400, duration: 400, delay: 200 }}
	out:fly={{ x: -400, duration: 500 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="text-5xl font-bold">Choose the name of your character</h1>
	<Input
		autofocus
		autocomplete="off"
		type="name"
		class="max-w-md"
		bind:value={name}
		id="name"
		placeholder="Name"
	/>
	<Button class="w-40">Next</Button>
</form>
