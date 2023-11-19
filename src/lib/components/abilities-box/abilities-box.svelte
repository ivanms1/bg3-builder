<script lang="ts">
	export let abilities: Record<string, number>;
	export let bonusAbilities: Record<string, string>;
</script>

<div class="flex gap-4">
	{#each Object.entries(abilities) as [ability] (ability)}
		<div class="flex flex-col gap-2">
			<h2 class="text-center uppercase">{ability.substring(0, 3)}</h2>
			<div class="flex items-start">
				<p class="min-w-[20px] text-center">
					{abilities?.[ability] +
						(bonusAbilities.plusOne === ability ? 1 : bonusAbilities.plusTwo === ability ? 2 : 0)}
				</p>
				<p class="min-w-[20px] text-xs">
					( {Math.floor(
						(abilities?.[ability] +
							(bonusAbilities.plusOne === ability
								? 1
								: bonusAbilities.plusTwo === ability
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
