<svelte:options customElement={{ tag: "goleaf-widget", shadow: "open" }} />

<!--<script lang="ts">-->
<!--</script>-->

<main>
	<button class="cta-btn">
		Subir datos
	</button>
<!--		<a-->
<!--			target="_blank"-->
<!--			rel="noreferrer"-->
<!--			href="https://github.com/sveltejs/kit#readme"-->
<!--		>-->
<!--			SvelteKit-->
<!--		</a>-->
</main>

<style>
	main:global {
		--brand-color-primary: #26970D;
		--brand-color-secondary: #CFFAC7;
		--font-color-primary: midnightblue;
	}
	.cta-btn {
		display: inline-block;
		padding: 0.5rem 1rem;
		font-size: 1.25rem;
		font-weight: bold;
		text-decoration: none;
		border-radius: 0.5rem;
		color: var(--font-color-primary);
		background-color: var(--brand-color-secondary);
	}
</style>
