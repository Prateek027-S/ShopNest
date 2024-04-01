export const fetchProducts = build =>
  build.query({
    query: () => ({
      url: '/products',
      method: 'get',
    }),
  });
