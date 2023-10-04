<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import { fly } from 'svelte/transition';

	export let currentStep = {};
	export let race: string;
	export let className: string;
	export let name: string;

	function handleSubmit() {
		currentStep = 'class';
		className = className;
		name = name;
	}
</script>

<form
	class="flex flex-col gap-4"
	in:fly={{ x: 500, duration: 1000 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1>Choose the race of your character</h1>
	<Input type="race" bind:value={race} id="race" placeholder="Race" />
	<Button>Next</Button>
</form>
