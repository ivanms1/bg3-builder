<script>
	import { buttonVariants } from '$lib/components/ui/button';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<div class="flex h-full flex-1 flex-col items-center justify-center gap-2">
	<h1>Baldur's gate builder</h1>
	<a href="/character" class={buttonVariants({ variant: 'default' })}>Get Started</a>
</div>
