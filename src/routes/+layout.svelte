<script>
	import '../app.postcss';
	import { buttonVariants } from '$lib/components/ui/button';
</script>

<main class="flex min-h-screen flex-col px-8 py-4">
	<nav class="flex justify-between">
		<a
			class={buttonVariants({
				variant: 'default'
			})}
			href="/">Home</a
		>
		<a
			class={buttonVariants({
				variant: 'default'
			})}
			href="/login">Login</a
		>
	</nav>
	<slot />
</main>
