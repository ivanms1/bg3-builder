<script>
	import { BuildDisplay } from '$lib/components/build-display';
	import { Abilities } from '$lib/components/build-form/abilities';
	import { Background } from '$lib/components/build-form/background';
	import { Gear } from '$lib/components/build-form/gear';
	import { Levels } from '$lib/components/build-form/levels';
	import * as Tabs from '$lib/components/ui/tabs';

	import { build } from '$lib/store/build';

	function saveBuild() {
		const formData = new FormData();

		formData.append('build', JSON.stringify($build));
		formData.append('name', $build.name);

		fetch('/', {
			method: 'POST',
			body: formData
		})
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
			});
	}
</script>

<div class="flex h-full flex-1 flex-col items-center gap-10 p-4 lg:justify-center">
	<h1 class="text-5xl font-bold">BG3 Builder</h1>
	<div class="flex flex-col gap-8 lg:flex-row">
		<Tabs.Root value="background" class="rounded-sm bg-slate-900 p-4">
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
		<BuildDisplay />
	</div>
</div>
