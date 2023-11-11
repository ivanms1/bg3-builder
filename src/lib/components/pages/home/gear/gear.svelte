<script lang="ts">
	import * as Select from '$lib/components/ui/select';
	import { Input } from '$lib/components/ui/input';
	import { build } from '$lib/store/build';
	import Label from '$lib/components/ui/label/label.svelte';

	const actOptions = [
		{
			label: 'Act 1',
			value: 1
		},
		{
			label: 'Act 2',
			value: 2
		},
		{
			label: 'Act 3',
			value: 3
		}
	];

	let selectedAct = {
		label: 'Act 1',
		value: 1
	};
</script>

<div class="flex flex-col items-center gap-4 p-4 lg:min-h-[600px] lg:min-w-[692px]">
	<Select.Root bind:selected={selectedAct}>
		<Select.Trigger>
			<Select.Value placeholder="Act 1" />
		</Select.Trigger>
		<Select.Content>
			{#each actOptions as option}
				<Select.Item value={option.value}>{option.label}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
	<div class="grid w-full grid-cols-2 gap-4">
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Primary Weapon</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].weaponPrimary}
				id="primary-weapon"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Secondary Weapon</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].weaponSecondary}
				id="secondary-weapon"
			/>
		</div>
		<div>
			<Label>Range Primary</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].rangePrimary}
				id="range-primary"
			/>
		</div>
		<div>
			<Label>Range Secondary</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].rangeSecondary}
				id="range-secondary"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Head Gear</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].head}
				id="head-gear"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Cloak</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].cloak}
				id="cloak"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Necklace</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].necklace}
				id="necklace"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>First Ring</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].firstRing}
				id="first-ring"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Second Ring</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].secondRing}
				id="second-ring"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Hands</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].hands}
				id="hands"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Armor</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].torso}
				id="armor"
			/>
		</div>
		<div class="flex w-full max-w-sm flex-col gap-1.5">
			<Label>Boots</Label>
			<Input
				autofocus
				autocomplete="off"
				bind:value={$build.gear[selectedAct.value].boots}
				id="boots"
			/>
		</div>
	</div>
</div>
