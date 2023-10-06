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

<div>
	<svelte:component
		this={steps[currentStep].component}
		bind:currentStep
		bind:name
		bind:className
		bind:race
	/>
</div>
