export interface ICatalogListReducer {
  loading: boolean;
  error: string;
  catalog: ICatalogItem[];
}

export interface ICatalogItem {
  id: number,
  name: string,
  price: number
}