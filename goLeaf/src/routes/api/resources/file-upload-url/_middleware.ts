import { MiddlewareHandlerContext } from '$fresh/server.ts';

export async function handler(req: Request, ctx: MiddlewareHandlerContext) {
  const preflightResp = preflightRequests(req);
  if (preflightResp !== null) {
    return preflightResp;
  }
  const origin = req.headers.get('Origin') ?? '*';
  const resp = await ctx.next();
  resp.headers.set('Access-Control-Allow-Origin', origin);
  resp.headers.set('Access-Control-Allow-Credentials', 'true');
  resp.headers.set(
    'Access-Control-Allow-Headers',
    'x-requested-with, x-api-key, Content-Type, Content-Length, Accept-Encoding,' +
    ' X-CSRF-Token, Authorization, accept, origin',
  );
  resp.headers.set('Access-Control-Allow-Methods', 'OPTIONS, GET');
  return resp;
}

function preflightRequests(req: Request) {
  if (req.method == 'OPTIONS') {
    const resp = new Response(null, { status: 204 });
    resp.headers.set('Access-Control-Allow-Origin', '*');
    resp.headers.set('Access-Control-Allow-Headers', 'x-api-key');
    return resp;
  }
  return null;
}
