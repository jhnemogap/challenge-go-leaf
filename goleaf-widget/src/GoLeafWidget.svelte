<svelte:options customElement={{ tag: "goleaf-widget", shadow: "open" }} />

<script lang="ts">
	function onClickCtaBtn() {
		console.info('onClickCtaBtn');
	}
</script>

<main>
	<button class="cta-btn" on:click={onClickCtaBtn}>
		Subir datos
	</button>
</main>

<style>
	:global(main) {
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
