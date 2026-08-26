export type StoreCategory = 'Hardware' | 'Redes' | 'CFTV' | 'Celulares' | 'Software' | 'IA';

export type StoreProduct = {
  id: string;
  name: string;
  category: StoreCategory;
  description: string;
  price?: number;
  currency?: 'BRL';
  active: boolean;
  featured?: boolean;
  image?: string;
  stock?: number;
  sku?: string;
};

/**
 * Initial mobile catalog. Keep products data-driven so future inventory can
 * come from BiteFixes Backend/Supabase without changing the Store UI.
 */
export const storeProducts: StoreProduct[] = [
  {
    id: 'placeholder-ssd',
    name: 'SSD para Notebook',
    category: 'Hardware',
    description: 'Produto de exemplo para a futura integração do catálogo.',
    currency: 'BRL',
    active: false,
    featured: false,
  },
  {
    id: 'placeholder-router',
    name: 'Roteador Wi-Fi',
    category: 'Redes',
    description: 'Espaço reservado para futuros produtos de rede.',
    currency: 'BRL',
    active: false,
    featured: false,
  },
];

export const storeCategories: Array<'Todos' | StoreCategory> = [
  'Todos',
  'Hardware',
  'Redes',
  'CFTV',
  'Celulares',
  'Software',
  'IA',
];
