<script lang="ts">
	import { build } from '$lib/store/build';
</script>

<div class="flex min-w-[355px] flex-col gap-1 rounded-sm bg-slate-900 p-4">
	<h1 class="text-center text-2xl font-semibold">{$build?.name}</h1>
	<p class="text-center capitalize">
		{$build.subrace.label ?? ''}
		{$build.race.label ?? ''}
		{$build.levels?.[1]?.className ?? ''}
	</p>
	<p class="text-center text-sm font-semibold uppercase">{$build.background.label}</p>
	<div class="flex justify-center gap-4">
		{#each Object.entries($build.abilities) as [ability] (ability)}
			<div class="flex flex-col gap-2">
				<h2 class="text-center uppercase">{ability.substring(0, 3)}</h2>
				<div class="flex items-start">
					<p class="min-w-[20px] text-center">
						{$build.abilities?.[ability] +
							($build.bonusAbilities.plusOne === ability
								? 1
								: $build.bonusAbilities.plusTwo === ability
								? 2
								: 0)}
					</p>
					<p class="min-w-[20px] text-xs">
						( {Math.floor(
							($build.abilities?.[ability] +
								($build.bonusAbilities.plusOne === ability
									? 1
									: $build.bonusAbilities.plusTwo === ability
									? 2
									: 0) -
								10) /
								2
						)})
					</p>
				</div>
			</div>
		{/each}
	</div>
</div>
