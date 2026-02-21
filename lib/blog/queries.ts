/**
 * Queries GraphQL centralizadas para o blog (WordPress headless).
 * Retorno mapeado em lib/blog/mappers.ts para tipos em types/blog.ts.
 */

export const LIST_POSTS = `
  query ListPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        slug
        title
        excerpt
        date
        modified
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`;

export const POST_BY_SLUG = `
  query PostBySlug($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      slug
      title
      excerpt
      content
      date
      modified
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      categories {
        nodes {
          slug
          name
        }
      }
    }
  }
`;

export const LIST_CATEGORIES = `
  query ListCategories {
    categories(first: 100, where: { hideEmpty: true }) {
      nodes {
        slug
        name
        count
      }
    }
  }
`;

export const POSTS_BY_CATEGORY_SLUG = `
  query PostsByCategorySlug($slug: ID!, $first: Int!, $after: String) {
    category(id: $slug, idType: SLUG) {
      posts(first: $first, after: $after, where: { status: PUBLISH }) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          slug
          title
          excerpt
          date
          modified
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
        }
      }
    }
  }
`;

export const ALL_POST_SLUGS_AND_DATES = `
  query AllPostSlugsAndDates($first: Int!, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo { hasNextPage endCursor }
      nodes { slug modified date }
    }
  }
`;

export const ALL_CATEGORY_SLUGS = `
  query AllCategorySlugs {
    categories(first: 100, where: { hideEmpty: true }) {
      nodes { slug }
    }
  }
`;

export const RECENT_POSTS = `
  query RecentPosts($first: Int!) {
    posts(first: $first, where: { status: PUBLISH }) {
      nodes {
        id
        slug
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        categories {
          nodes {
            slug
            name
          }
        }
      }
    }
  }
`;
