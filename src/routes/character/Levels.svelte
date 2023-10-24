<script lang="ts">
	import * as Accordion from '$lib/components/ui/accordion';
	import { Button } from '$lib/components/ui/button';
	import { Textarea } from '$lib/components/ui/textarea';
	import Label from '$lib/components/ui/label/label.svelte';
	import { fly } from 'svelte/transition';
	import { build } from '$lib/store/build';

	const levelsArray = [
		{
			level: 1
		},
		{
			level: 2
		},
		{
			level: 3
		},
		{
			level: 4
		},
		{
			level: 5
		},
		{
			level: 6
		},
		{
			level: 7
		},
		{
			level: 8
		},
		{
			level: 9
		},
		{
			level: 10
		},
		{
			level: 11
		},
		{
			level: 12
		}
	];

	function handleSubmit() {
		console.log($build);
	}

	function handleAddComment(
		event: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		},
		level: number
	) {
		console.log($build.levels);
	}
</script>

<form
	class="absolute left-1/2 top-1/2 flex h-screen w-full -translate-x-1/2 -translate-y-1/2 transform flex-col items-center gap-10 overflow-y-auto py-12"
	in:fly={{ x: 400, duration: 400, delay: 200 }}
	out:fly={{ x: -400, duration: 500 }}
	on:submit|preventDefault={handleSubmit}
>
	<h1 class="text-center text-5xl font-bold">Levels</h1>
	<Accordion.Root class="max-h-[70vh] w-full max-w-7xl overflow-y-auto">
		{#each levelsArray as l (l.level)}
			<Accordion.Item value={l.level.toString()}>
				<Accordion.Trigger>Level {l.level}</Accordion.Trigger>

				<Accordion.Content>
					<Label>Comment</Label>
					<Textarea
						autofocus
						bind:value={$build.levels[l.level].comment}
						id="comment"
						name="comment"
					/>
				</Accordion.Content>
			</Accordion.Item>
		{/each}
	</Accordion.Root>

	<Button class="w-40">Next</Button>
</form>
