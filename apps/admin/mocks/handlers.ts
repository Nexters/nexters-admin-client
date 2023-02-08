import { rest } from 'msw';

import { Book } from '~/mocks/types';

export const handlers = [
  rest.get('https://mock-api-server/book', (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: 'Lord of the Rings',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      }),
    );
  }),
] as const;
