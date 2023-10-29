<script>
	import { Abilities } from '$lib/components/pages/home/abilities';
	import { Background } from '$lib/components/pages/home/background';
	import { Gear } from '$lib/components/pages/home/gear';
	import { Levels } from '$lib/components/pages/home/levels';
	import * as Tabs from '$lib/components/ui/tabs';
</script>

<div class="flex h-full flex-1 flex-col items-center gap-10 lg:justify-center">
	<h1 class="text-5xl font-bold">BG3 Builder</h1>
	<Tabs.Root value="background">
		<Tabs.List class="grid w-full grid-cols-4">
			<Tabs.Trigger value="background">Background</Tabs.Trigger>
			<Tabs.Trigger value="abilites">Abilities</Tabs.Trigger>
			<Tabs.Trigger value="levels">Levels</Tabs.Trigger>
			<Tabs.Trigger value="gear">Gear</Tabs.Trigger>
		</Tabs.List>
		<Tabs.Content value="background">
			<Background />
		</Tabs.Content>
		<Tabs.Content value="abilites"><Abilities /></Tabs.Content>
		<Tabs.Content value="levels">
			<Levels />
		</Tabs.Content>
		<Tabs.Content value="gear">
			<Gear />
		</Tabs.Content>
	</Tabs.Root>
</div>
