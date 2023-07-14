import { Head } from "$fresh/runtime.ts";

import { GoLeafLogo } from "../components/GoLeafLogo.tsx";
import { FormSection } from '../components/FormSection/index.ts';

import { CLIENTS_MOCK, USERS_MOCK } from '../mocks/index.ts';

import type { Handler, PageProps } from '$fresh/server.ts';

export default function Home(props: PageProps) {
  const { data: { user, client } } = props;

  return (
    <>
      <Head>
        <title>GoLeaf - Automatiza alta de empresas</title>
      </Head>
      <div class="p-4 mx-auto max-w-screen-md">
        <header>
          <GoLeafLogo />
        </header>

        <main>
          <h1>Bienvenido a GoLeaf <span>{user.name}</span></h1>
          <p>Para dar de alta tu empresa en {client.name}</p>
          <p>Sube tus datos aquí</p>
          <FormSection />
        </main>
      </div>
    </>
  );
}

export const handler: Handler = function(req, ctx) {
  const _resp = validateSearchParams(req);
  if (_resp.isError) return _resp.response;
  return ctx.render(_resp.info);
}

function validateSearchParams(_req: Request) {
  const { clientId, userId, jwt } = getSearchParams(_req.url);
  if (!clientId || !userId || !jwt) {
    return {
      isError: true,
      response: new Response(
        "Página no encontrada",
        { status: 400, statusText: "Bad Request" }
      ),
    };
  }
  const client = CLIENTS_MOCK.get(clientId);
  const user = USERS_MOCK.get(userId);
  if (!client || !user || !user.jwt) {
    return {
      isError: true,
      response: new Response(
        "¿Quién eres?",
        { status: 400, statusText: "Deceptive request routing" }
      ),
    };
  }
  if (clientId !== user.clienteId || jwt !== user.jwt) {
    return {
      isError: true,
      response: new Response(
        "¿Qué intentas hacer?",
        { status: 400, statusText: "Deceptive request routing" }
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
    clientId: url.searchParams.get('client_id') ?? "",
    userId: url.searchParams.get('user_id') ?? "",
    jwt: url.searchParams.get('jwt') ?? "",
  };
}
