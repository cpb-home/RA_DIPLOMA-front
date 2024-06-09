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