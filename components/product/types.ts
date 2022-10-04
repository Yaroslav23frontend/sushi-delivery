export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  description: string;
  currency: string;
  categories: Array<{ title: string; slug: { current: string } }>;
  promotion?: Array<{ promotion: number }>;
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
    promotion?: Array<{ promotion: number }>;
  };
}
export interface ProductsProps {
  products: Array<Product>;
}
