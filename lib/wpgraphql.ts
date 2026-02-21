/**
 * Cliente WPGraphQL para WordPress headless.
 * Usa WORDPRESS_GRAPHQL_URL do .env e next revalidate para cache/ISR.
 */

const GRAPHQL_URL = process.env.WORDPRESS_GRAPHQL_URL;
const REVALIDATE = typeof process.env.BLOG_REVALIDATE !== 'undefined'
  ? Number(process.env.BLOG_REVALIDATE)
  : 60;

export interface GraphQLResponse<T> {
  data?: T;
  errors?: Array<{ message: string; locations?: unknown[] }>;
}

export async function fetchGraphQL<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  if (!GRAPHQL_URL) {
    throw new Error('WORDPRESS_GRAPHQL_URL is not set');
  }

  const res = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: REVALIDATE },
  });

  if (!res.ok) {
    throw new Error(`WPGraphQL request failed: ${res.status} ${res.statusText}`);
  }

  const json: GraphQLResponse<T> = await res.json();

  if (json.errors && json.errors.length > 0) {
    const messages = json.errors.map((e) => e.message).join('; ');
    throw new Error(`WPGraphQL errors: ${messages}`);
  }

  if (!json.data) {
    throw new Error('WPGraphQL returned no data');
  }

  return json.data as T;
}
