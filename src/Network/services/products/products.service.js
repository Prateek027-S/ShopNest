export const fetchProducts = build =>
  build.query({
    query: ({skip}) => ({
      url: `/products?limit=10&skip=${skip}`,
      method: 'get',
    }),
  });
