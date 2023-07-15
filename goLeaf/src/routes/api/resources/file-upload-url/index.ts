import { BASE_URL } from '../../../../constants/configs.const.ts';

import { API_KEYS_MOCK, CLIENTS_MOCK, USERS_MOCK } from '../../../../mocks/index.ts';

import type { Handlers } from '$fresh/src/server/types.ts';

export const handler: Handlers<FileUploadUrlResponse | null> = {
	GET(_req: Request) {
		const apiKey = validateApiKey(_req);
		if (apiKey === '') {
			return new Response(
				JSON.stringify({ message: 'You need a credential' }),
				{ status: 401, statusText: 'Unauthorized' },
			);
		}
		const client = getClientByApiKey(apiKey);
		if (client === null) {
			return new Response(
				JSON.stringify({ message: 'Who are you?' }),
				{ status: 403, statusText: 'Forbidden' },
			);
		}
		const user = validateUser(_req);
		if (user === null) {
			return new Response(
				JSON.stringify({ message: 'User ID not found' }),
				{ status: 404, statusText: 'Not Found' },
			);
		}
		const body = generateRespBody({
			userId: user.id,
			clientId: client.id,
			jwt: user.jwt,
		});
		return new Response(JSON.stringify(body), { status: 200 });
	},
};

function validateUser(req: Request) {
	const url = new URL(req.url);
	const userId = url.searchParams.get('user_id') ?? '';
	const user = USERS_MOCK.get(userId) ?? null;
	return user ? { ...user, id: userId } : null;
}

function validateApiKey(req: Request): ApiKey {
	const apiKey = req.headers.get('x-api-key') ?? '';
	return API_KEYS_MOCK.has(apiKey) ? apiKey : '';
}

function getClientByApiKey(apiKey: ApiKey) {
	const clientId = API_KEYS_MOCK.get(apiKey)?.clienteId ?? '';
	const client = CLIENTS_MOCK.get(clientId) ?? null;
	return client ? { ...client, id: clientId } : null;
}

function generateRespBody(params: GenerateRespBodyParams) {
	const { clientId, userId, jwt } = params;
	const url = new URL('/', BASE_URL);
	url.searchParams.set('client_id', clientId);
	url.searchParams.set('user_id', userId);
	url.searchParams.set('jwt', jwt);
	return { url: url.toString() };
}

interface FileUploadUrlResponse {
	url: string;
}

type ApiKey = string;
type ClientId = string;
type UserId = string;
type JWT = string;

interface GenerateRespBodyParams {
	clientId: ClientId;
	userId: UserId;
	jwt: JWT;
}
