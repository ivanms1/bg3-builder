<script lang="ts">
	import { build } from '$lib/store/build';
	import { AbilitiesBox } from '../abilities-box';

	import { Button } from '../ui/button';

	function saveBuild() {
		const formData = new FormData();

		formData.append('build', JSON.stringify($build));
		formData.append('name', $build.name);

		fetch('/', {
			method: 'POST',
			body: formData
		}).then((res) => res.json());
	}
</script>

<div class="flex min-w-[355px] flex-col gap-1 rounded-sm bg-slate-900 p-4">
	<h1 class="text-center text-2xl font-semibold">{$build?.name}</h1>
	<p class="text-center capitalize">
		{$build.subrace.label ?? ''}
		{$build.race.label ?? ''}
		{$build.levels?.[1]?.className ?? ''}
	</p>
	<p class="text-center text-sm font-semibold uppercase">{$build.background.label}</p>
	<AbilitiesBox abilities={$build.abilities} bonusAbilities={$build.bonusAbilities} />
	<Button size="lg" class="mt-4" on:click={saveBuild}>Save</Button>
</div>
