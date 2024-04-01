import api from "../../api";
import { fetchProducts } from "./products.service";


export const productsApi = api.injectEndpoints({
    endpoints: build => ({
        getProducts: fetchProducts(build),
    })
})

export const { useGetProductsQuery } = productsApi;