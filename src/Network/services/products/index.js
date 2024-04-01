import api from '../../api';
import {fetchProducts} from './products.service';

export const productsApi = api.injectEndpoints({
  endpoints: build => ({
    getProducts: fetchProducts(build),
  }),
  overrideExisting: false,
});

export const {useLazyGetProductsQuery} = productsApi;
