import { BASE_URL } from '../../../../constants/configs.const.ts';

import type { Handlers } from '$fresh/server.ts';

export const handler: Handlers<FileUploadUrlResponse | null> = {
  GET(_req: Request) {
    const apiKey = validateApiKey(_req);
    if (apiKey === null) {
      return new Response(
        JSON.stringify({ message: 'You need a credential' }),
        { status: 401, statusText: 'Unauthorized' }
      );
    }
    const userId = validateUserId(_req);
    if (userId === null) {
      return new Response(
        JSON.stringify({ message: 'User ID not found' }),
        { status: 404, statusText: 'Not Found' }
      );
    }
    const body = generateRespBody({ userId, apiKey });
    return new Response(JSON.stringify(body));
  },
};

function validateUserId(req: Request): string | null {
  const url = new URL(req.url);
  return url.searchParams.get('user_id');
}

function validateApiKey(req: Request): string | null {
  return req.headers.get('x-api-key');
}

function generateRespBody(params: GenerateRespBodyParams) {
  const { apiKey, userId} = params;
  const url = new URL('/', BASE_URL);
  url.searchParams.set('api-key', apiKey);
  url.searchParams.set('user_id', userId);
  url.searchParams.set('jwt', 'JWTfakeJWTfake');
  return { url: url.toString() };
}

interface FileUploadUrlResponse {
  url: string;
}

interface GenerateRespBodyParams {
  apiKey: string;
  userId: string;
}
