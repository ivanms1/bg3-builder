<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import * as Select from '$lib/components/ui/select';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import Label from '$lib/components/ui/label/label.svelte';

	import { build } from '$lib/store/build';
	import { CLASS_OPTIONS } from '$lib/const';

	import { Trash2Icon } from 'lucide-svelte';

	let className = {
		label: 'Barbarian',
		value: 'barbarian'
	};

	function addLevel() {
		const nextLevel = Object.keys($build.levels).length + 1;
		build.setLevel(nextLevel, {
			comment: '',
			className: className.value
		});
	}
</script>

<div class="flex flex-col items-center gap-4 p-4 lg:min-h-[600px] lg:min-w-[692px]">
	<div class="flex gap-4">
		<Select.Root bind:selected={className}>
			<Select.Trigger class="lg:min-w-[300px]">
				<Select.Value placeholder="Class" />
			</Select.Trigger>
			<Select.Content>
				{#each CLASS_OPTIONS as option}
					<Select.Item value={option.value}>{option.label}</Select.Item>
				{/each}
			</Select.Content>
		</Select.Root>
		<Button
			disabled={Object.keys($build?.levels).length === 12}
			size="sm"
			class="w-40"
			on:click={addLevel}>Level Up</Button
		>
	</div>
	<Accordion.Root class="max-h-[60vh] w-full max-w-7xl overflow-y-auto">
		{#each Object.keys($build?.levels) as l (l)}
			<Accordion.Item value={l.toString()}>
				<Accordion.Trigger class="relative gap-4 capitalize"
					>Level {l}:
					{$build.levels[+l].className}
					<Button
						size="icon"
						variant="destructive"
						class="absolute right-6  top-1/2 h-fit w-fit -translate-y-1/2 cursor-pointer p-2"
						on:click={(e) => {
							e.stopPropagation();
							build.removeLevel(+l);
						}}
					>
						<Trash2Icon class="h-4 w-4" />
					</Button>
				</Accordion.Trigger>

				<Accordion.Content>
					<Label>Comment</Label>
					<Textarea autofocus bind:value={$build.levels[+l].comment} id="comment" name="comment" />
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>
</div>
