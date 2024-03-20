export interface ICategory {
  id: string;
  img?: string;
  parent: string;
  children?: string[];
  products: string[];
}