export interface ICatalogListReducer {
  loading: boolean;
  error: string;
  catalog: ICatalogItem[];
}

export interface ICatalogItem {
  id: number,
  category: string,
  title: string,
  price: number,
  images: string[]
}

export interface IHitsListReducer {
  loading: boolean;
  error: string;
  hits: ICatalogItem[];
}

export interface BasketItemsReducer {
  items: BasketItems[];
}

export interface BasketItems {
  id: number,
  size: string,
  title: string,
  quantity: number,
  price: number
}

export interface ItemCardReducer {
  loading: boolean;
  error: string;
  itemInfo: ItemCardInfo | null;
}

export interface ItemCardInfo {
  id: number,
  title: string,
  images: string[],
  sku: string,
  manufacturer: string,
  color: string,
  material: string,
  reason: string,
  season: string,
  price: number,
  sizes: ItemCardSizes[]
}

export interface ItemCardSizes {
  size: string,
  available: boolean
}