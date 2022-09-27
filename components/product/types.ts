export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  currency: string;
  categories: Array<{ title: string; slug: { current: string } }>;
}
export interface ProductProps {
  data: Product;
}
export interface ProductsProps {
  products: Array<Product>;
}
