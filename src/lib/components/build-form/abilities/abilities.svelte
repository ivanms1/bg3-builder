<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import * as Table from '$lib/components/ui/table';
	import { ABILITIES } from '$lib/const';
	import { build } from '$lib/store/build';

	let abilityPoints =
		75 - Object.values($build.abilities || {}).reduce((acc, curr) => acc + curr, 0);

	const resetAbilities = () => {
		build.resetAbilities();
		abilityPoints = 27;
	};
</script>

<div class="py-4 lg:min-h-[600px] lg:min-w-[692px]">
	<div class="flex gap-2">
		<p>Ability Points</p>
		: {abilityPoints}
	</div>
	<Table.Root>
		<Table.Caption><Button on:click={resetAbilities}>Reset</Button></Table.Caption>
		<Table.Header>
			<Table.Row>
				<Table.Head class="lg:min-w-[300px]"></Table.Head>
				<Table.Head class="text-center lg:w-48"></Table.Head>
				<Table.Head class="flex flex-col items-center justify-center lg:w-[200px]">
					<p>Bonus</p>
					<div class="flex items-center justify-center gap-4">
						<p>+2</p>
						<p>+1</p>
					</div>
				</Table.Head>
			</Table.Row>
		</Table.Header>
		<Table.Body>
			{#each ABILITIES as ability, i (i)}
				<Table.Row>
					<Table.Cell class="font-medium capitalize">{ability}</Table.Cell>
					<Table.Cell class="flex items-center justify-center gap-4">
						<Button
							disabled={$build.abilities?.[ability] === 8}
							on:click={() => {
								if ($build.abilities?.[ability]) {
									build.setAbility(ability, $build.abilities?.[ability] - 1);
									abilityPoints += 1;
								}
							}}>-</Button
						>
						<p class="min-w-[14px] text-center">
							{$build.abilities?.[ability] +
								($build.bonusAbilities.plusOne === ability
									? 1
									: $build.bonusAbilities.plusTwo === ability
									? 2
									: 0)}
						</p>
						<Button
							disabled={abilityPoints === 0 || $build.abilities?.[ability] === 15}
							on:click={() => {
								if ($build.abilities?.[ability]) {
									build.setAbility(ability, $build.abilities?.[ability] + 1);
									abilityPoints -= 1;
								}
							}}>+</Button
						>
					</Table.Cell>
					<Table.Cell class="pr-[16px_!important]">
						<div class="flex items-center justify-center gap-4">
							<Checkbox
								on:click={(e) => {
									if ($build.bonusAbilities.plusTwo === ability) {
										build.setPlusTwo('');
									} else {
										if ($build.bonusAbilities.plusOne === ability) {
											build.setPlusOne('');
										}

										build.setPlusTwo(ability);
									}
								}}
								checked={$build.bonusAbilities.plusTwo === ability}
							/>
							<Checkbox
								on:click={(e) => {
									if ($build.bonusAbilities.plusOne === ability) {
										build.setPlusOne('');
									} else {
										if ($build.bonusAbilities.plusTwo === ability) {
											build.setPlusTwo('');
										}
										build.setPlusOne(ability);
									}
								}}
								checked={$build.bonusAbilities.plusOne === ability}
							/>
						</div>
					</Table.Cell>
				</Table.Row>
			{/each}
		</Table.Body>
	</Table.Root>
</div>
