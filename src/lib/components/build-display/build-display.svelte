<script lang="ts">
	import type { BuildStore } from '$lib/store/build';
	import { BuildStatus, type Build } from '@prisma/client';
	import { AbilitiesBox } from '../abilities-box';

	export let build: Build;

	const buildData: BuildStore = JSON.parse(build.data);
</script>

<div class="flex flex-col gap-4">
	{#if build.status === BuildStatus.DRAFT}
		<p class="w-fit rounded-sm bg-blue-800 px-4 py-2">Draft</p>
	{:else}
		<p class="w-fit rounded-sm bg-green-800 px-4 py-2">Published</p>
	{/if}

	<div>
		<h1 class="text-5xl">{build.name}</h1>
		<p>{buildData.race.label + buildData.subrace.label}</p>
		<p class="uppercase">{buildData?.levels?.[1]?.className}</p>
	</div>
	<AbilitiesBox abilities={buildData.abilities} bonusAbilities={buildData.bonusAbilities} />
</div>
