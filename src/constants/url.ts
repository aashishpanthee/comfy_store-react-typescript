export const FEATURED_PRODUCTS_URL = '/products?featured=true' as const;
export const PRODUCTS_URL = '/products' as const;

export const PRODUCTION_URL = import.meta.env.VITE_API_URL;

export type FeaturedProductsUrl = typeof FEATURED_PRODUCTS_URL;
export type ProductsUrl = typeof PRODUCTS_URL;
export type ProductionUrl = typeof PRODUCTION_URL;
