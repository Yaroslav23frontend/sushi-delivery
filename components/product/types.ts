export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  currency: string;
  categories: Array<{ title: string; slug: { current: string } }>;
  discounts: Array<{ rate: number; endDate: string; startDate: string }>;
  total: number;
}
export interface ProductProps {
  data: {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    currency: string;
    categories?: Array<{ title: string; slug: { current: string } }>;
    discounts: Array<{
      rate: number;
      endDate: string;
      startDate: string;
    }>;
  };
}
export interface ProductsProps {
  products: Array<Product>;
}
