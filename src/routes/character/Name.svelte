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
	class="flex flex-col gap-4"
	in:fly={{ x: 500, duration: 1000 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1>Choose the name of your character</h1>
	<Input type="name" bind:value={name} id="name" placeholder="Name" />
	<Button>Next</Button>
</form>
