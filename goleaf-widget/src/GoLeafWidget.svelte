<svelte:options customElement={{ tag: "goleaf-widget", shadow: "open" }} />

<script>
	import { StartButton } from './components';

	export let apikey = '';
	export let userid = '';
</script>

<main>
	<StartButton apiKey={apikey} userId={userid} />
</main>

<style>
	main {
		--brand-color-primary: #26970D;
		--brand-color-secondary: #CFFAC7;
		--font-color-primary: midnightblue;
	}
</style>
