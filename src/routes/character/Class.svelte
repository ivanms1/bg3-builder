<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { fly } from 'svelte/transition';
	import { build } from '$lib/store/build';
	import { cn } from '$lib/utils';

	import barbarianImage from '$lib/assets/images/barbarian.png';
	import bardImage from '$lib/assets/images/bard.png';
	import clericImage from '$lib/assets/images/cleric.png';
	import druidImage from '$lib/assets/images/druid.png';
	import fighterImage from '$lib/assets/images/fighter.png';
	import monkImage from '$lib/assets/images/monk.png';
	import paladinImage from '$lib/assets/images/paladin.png';
	import rangerImage from '$lib/assets/images/ranger.png';
	import rogueImage from '$lib/assets/images/rogue.png';
	import sorcererImage from '$lib/assets/images/sorcerer.png';

	const classesArray = [
		{ name: 'Barbarian', image: barbarianImage },
		{ name: 'Bard', image: bardImage },
		{ name: 'Cleric', image: clericImage },
		{ name: 'Druid', image: druidImage },
		{ name: 'Fighter', image: fighterImage },
		{ name: 'Monk', image: monkImage },
		{ name: 'Paladin', image: paladinImage },
		{ name: 'Ranger', image: rangerImage },
		{ name: 'Rogue', image: rogueImage },
		{ name: 'Sorcerer', image: sorcererImage }
	];

	function handleSubmit() {
		build.setCurrentStep('levels');
	}
</script>

<form
	class="absolute left-1/2 top-1/2 flex h-screen -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10 overflow-y-auto py-12"
	in:fly={{ x: 400, duration: 400, delay: 200 }}
	out:fly={{ x: -400, duration: 500 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="text-center text-5xl font-bold">Choose the class of your character</h1>
	<div class="flex flex-wrap gap-10">
		{#each classesArray as r, i (r.name)}
			<button
				type="button"
				class="flex flex-col items-center"
				on:click={() => {
					build.setClassName(r.name);
				}}
			>
				<img
					alt={r.name}
					src={r.image}
					class={cn('h-40 w-40 rounded-full border-8 border-transparent', {
						'border-red-900': $build.className === r.name
					})}
				/>
				<span>{r.name}</span>
			</button>
		{/each}
	</div>
	<Button size="lg" class="w-40">Next</Button>
</form>
