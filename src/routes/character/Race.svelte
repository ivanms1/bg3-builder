<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { fly } from 'svelte/transition';

	import dragonbornImage from '$lib/assets/images/dragonborn.png';
	import dwarfImage from '$lib/assets/images/dwarf.png';
	import elfImage from '$lib/assets/images/elf.png';
	import gnomeImage from '$lib/assets/images/gnome.png';
	import halfElfImage from '$lib/assets/images/half-elf.png';
	import halflingImage from '$lib/assets/images/halfling.png';
	import halfOrcImage from '$lib/assets/images/half-orc.png';
	import humanImage from '$lib/assets/images/human.png';
	import tieflingImage from '$lib/assets/images/tiefling.png';
	import { cn } from '$lib/utils';

	const racesImagesArray = [
		{ name: 'Dragonborn', image: dragonbornImage },
		{ name: 'Dwarf', image: dwarfImage },
		{ name: 'Elf', image: elfImage },
		{ name: 'Gnome', image: gnomeImage },
		{ name: 'Half-Elf', image: halfElfImage },
		{ name: 'Halfling', image: halflingImage },
		{ name: 'Half-Orc', image: halfOrcImage },
		{ name: 'Human', image: humanImage },
		{ name: 'Tiefling', image: tieflingImage }
	];

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
	class="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10"
	in:fly={{ x: 400, duration: 400, delay: 200 }}
	out:fly={{ x: -400, duration: 500 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="text-5xl font-bold">Choose the race of your character</h1>
	<div class="flex flex-wrap gap-10">
		{#each racesImagesArray as r, i (r.name)}
			<button type="button" class="flex flex-col items-center" on:click={() => (race = r.name)}>
				<img
					alt={r.name}
					src={r.image}
					class={cn('h-40 w-40 rounded-full border-4 border-transparent', {
						'border-red-900': race === r.name
					})}
				/>
				<span>{r.name}</span>
			</button>
		{/each}
	</div>

	<Button size="lg" class="w-40">Next</Button>
</form>
