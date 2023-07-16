<script lang="ts">
	export let apiKey = '';
	export let userId = '';
	const BASE_URL = 'http://localhost:5010';
	const webFormUrl = new URL('/api/resources/file-upload-url', BASE_URL);
	function handleClick() {
		webFormUrl.searchParams.set('user_id', userId);
		window.fetch(webFormUrl, {
			method: "GET",
			headers: { "x-api-key": apiKey },
		})
			.then(async (resp) => {
				if (resp.status === 200) return resp.json();
				throw new Error(
					'Ha ocurrido un error',
					{ details: { ...resp, body: await resp.json() }}
				);
			})
			.then((resp) => window.open(resp.url, '_blank'))
			.catch((err) => alert(err.message));
	}
</script>

<button class="cta-btn" on:click={handleClick}>
	Subir datos
</button>

<style>
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
