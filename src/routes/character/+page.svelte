<script lang="ts">
	import { cn } from '$lib/utils';
	import NameStep from './Name.svelte';
	import RaceStep from './Race.svelte';
	import ClassStep from './Class.svelte';
	import { Button } from '$lib/components/ui/button';

	let currentStep: 'name' | 'race' | 'class' = 'name';

	let name = '';
	let race = '';
	let className = '';

	let steps = {
		name: {
			id: 'name',
			component: NameStep
		},
		race: {
			id: 'race',
			component: RaceStep
		},
		class: {
			id: 'class',
			component: ClassStep
		}
	};
</script>

<div class="flex gap-2">
	<Button
		on:click={() => (currentStep = 'name')}
		variant={currentStep === 'name' ? 'secondary' : 'outline'}>Name</Button
	>
	<Button
		on:click={() => (currentStep = 'race')}
		variant={currentStep === 'race' ? 'secondary' : 'outline'}>Race</Button
	>
	<Button
		on:click={() => (currentStep = 'class')}
		variant={currentStep === 'class' ? 'secondary' : 'outline'}>Class</Button
	>
</div>

<div class="flex flex-1 flex-col items-center justify-center gap-4">
	<svelte:component
		this={steps[currentStep].component}
		bind:currentStep
		bind:name
		bind:className
		bind:race
	/>
</div>
