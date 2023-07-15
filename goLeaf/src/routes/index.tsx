import { Head } from '$fresh/runtime.ts';

import { FormSection, GoLeafLogo } from '../components/index.ts';

import {
	CLIENTS_MOCK,
	TEMPLATES_BY_CLIENT_MOCK,
	TEMPLATES_MOCK,
	USERS_MOCK,
} from '../mocks/index.ts';

import type { Handler, PageProps } from '$fresh/server.ts';
import type { FormTemplate } from '../domain/index.ts';

export default function Home(props: PageProps) {
	const { data: { user, client, template } } = props;
	return (
		<>
			<Head>
				<title>GoLeaf - Automatiza alta de empresas</title>
			</Head>
			<div class='h-full min-h-screen pt-2 px-4 pb-8 bg-green-50'>
				<div class='m-auto w-full max-w-5xl'>
					<header>
						<GoLeafLogo />
					</header>
					<main>
						<h1 class='text(4xl center) leading-normal'>
							Bienvenido a GoLeaf <span>{user?.name}</span>
						</h1>
						<p>Para dar de alta tu empresa en {client.name}</p>
						<p>Sube tus datos aquí</p>
						<FormSection template={template} />
					</main>
				</div>
			</div>
		</>
	);
}

export const handler: Handler = function (req, ctx) {
	const _resp = validateSearchParams(req);
	if (_resp.isError) return _resp.response;
	const template = getTemplateByClient({ clientId: _resp.info.client.id });
	if (!template) {
		return new Response(
			'No tenemos ese modelo de formulario',
			{ status: 404, statusText: 'Form template not Found' },
		);
	}
	return ctx.render({ ..._resp.info, template });
};

function getTemplateByClient(
	{ clientId }: { clientId: string },
): FormTemplate | null {
	const templateId = TEMPLATES_BY_CLIENT_MOCK.get(clientId)?.templates?.[0] ??
		'';
	return TEMPLATES_MOCK.get(templateId) ?? null;
}

function validateSearchParams(_req: Request) {
	const { clientId, userId, jwt } = getSearchParams(_req.url);
	if (!clientId || !userId || !jwt) {
		return {
			isError: true,
			response: new Response(
				'Página no encontrada',
				{ status: 400, statusText: 'Bad Request' },
			),
		};
	}
	const client = CLIENTS_MOCK.get(clientId);
	const user = USERS_MOCK.get(userId);
	if (!client || !user || !user.jwt) {
		return {
			isError: true,
			response: new Response(
				'¿Quién eres?',
				{ status: 400, statusText: 'Deceptive request routing' },
			),
		};
	}
	if (clientId !== user.clienteId || jwt !== user.jwt) {
		return {
			isError: true,
			response: new Response(
				'¿Qué intentas hacer?',
				{ status: 400, statusText: 'Deceptive request routing' },
			),
		};
	}
	return {
		isError: false,
		info: {
			user: { ...user, id: userId },
			client: { ...client, id: clientId },
		},
	};
}

function getSearchParams(urlString: string) {
	const url = new URL(urlString);
	return {
		clientId: url.searchParams.get('client_id') ?? '',
		userId: url.searchParams.get('user_id') ?? '',
		jwt: url.searchParams.get('jwt') ?? '',
	};
}
