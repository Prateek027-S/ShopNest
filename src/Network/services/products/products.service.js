export const fetchProducts = build => (
    build.query({
        query: () => 'products',
    })
)