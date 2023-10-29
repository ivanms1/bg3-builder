<script lang="ts">
	import { build } from '$lib/store/build';

	import { Input } from '$lib/components/ui/input';
	import * as Select from '$lib/components/ui/select';

	import { BACKGROUND_OPTIONS, RACES_OPTIONS, SUBRACE_OPTIONS } from '$lib/const';

	let val = { label: 'Human', value: 'human' };
</script>

<div class="flex flex-col gap-4 py-4 lg:min-h-[600px] lg:min-w-[692px]">
	<Input
		autofocus
		autocomplete="off"
		type="name"
		bind:value={$build.name}
		id="name"
		placeholder="Name"
	/>
	<div class="flex gap-4">
		<Select.Root
			onSelectedChange={() => {
				build.setSubrace({
					label: '',
					value: ''
				});
			}}
			bind:selected={$build.race}
		>
			<Select.Trigger>
				<Select.Value placeholder="Race" />
			</Select.Trigger>
			<Select.Content>
				{#each RACES_OPTIONS as option}
					<Select.Item value={option.value}>{option.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>

		{#if SUBRACE_OPTIONS?.[$build.race?.value]?.length > 0}
			<Select.Root bind:selected={$build.subrace}>
				<Select.Trigger>
					<Select.Value placeholder="Subrace" />
				</Select.Trigger>
				<Select.Content>
					{#each SUBRACE_OPTIONS[$build.race?.value] as option}
						<Select.Item value={option.value}>{option.label}</Select.Item>
					{/each}
				</Select.Content>
			</Select.Root>
		{/if}
	</div>
	<Select.Root bind:selected={$build.background}>
		<Select.Trigger>
			<Select.Value placeholder="Background" />
		</Select.Trigger>
		<Select.Content>
			{#each BACKGROUND_OPTIONS as option}
				<Select.Item value={option.value}>{option.label}</Select.Item>
			{/each}
		</Select.Content>
	</Select.Root>
</div>
