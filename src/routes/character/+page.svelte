<script lang="ts">
	import NameStep from './Name.svelte';
	import RaceStep from './Race.svelte';
	import ClassStep from './Class.svelte';
	import LevelsStep from './Levels.svelte';

	import { build } from '$lib/store/build';

	const steps = {
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
		},
		levels: {
			id: 'levels',
			component: LevelsStep
		}
	};
</script>

<div>
	<svelte:component this={steps[$build.currentStep].component} />
</div>
