<svelte:options customElement={{ tag: "goleaf-widget", shadow: "open" }} />

<script lang="ts">
  import Counter from './lib/Counter.svelte';
</script>

<main>
  <h1>Vite + Svelte</h1>
  <div class="card">
    <Counter />
  </div>
  <p>
    Check out
		<a
			target="_blank"
			rel="noreferrer"
			href="https://github.com/sveltejs/kit#readme"
		>
			SvelteKit
		</a>
		, the official Svelte app framework powered by Vite!
  </p>
  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .read-the-docs {
    color: #888;
  }
</style>
