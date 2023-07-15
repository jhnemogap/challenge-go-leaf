import type { Handlers } from '$fresh/src/server/types.ts';

export default function UploadedForm() {
	return <h1>No hemos podido capturar los datos</h1>;
}

export const handler: Handlers = {
	async GET(_, ctx) {
		const dataStorage = sessionStorage.getItem('data-from-form');
		if (!dataStorage) return ctx.render();
		return new Response(
			dataStorage,
			{ headers: { 'Content-Type': 'application/json' } },
		);
	},
};
