export interface ProductProps {
  data: {
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    currency: string;
  };
}
export interface ProductsProps {
  products: Array<{
    id: string;
    image: string;
    name: string;
    price: number;
    description: string;
    currency: string;
  }>;
}
