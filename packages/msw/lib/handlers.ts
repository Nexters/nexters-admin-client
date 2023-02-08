import { rest } from 'msw';

import { Book } from './types';

const handlers = [
  rest.get('https://mock-api-server/book', async (_req, res, ctx) => {
    return res(
      ctx.json<Book>({
        title: 'Lord of the Rings',
        description:
          'The Lord of the Rings is an epic high-fantasy novel written by English author and scholar J. R. R. Tolkien.',
      }),
    );
  }),
] as const;

export { handlers };
