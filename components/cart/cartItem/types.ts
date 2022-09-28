export interface CartItemProps {
  item: {
    currency: string;
    description?: string | undefined;
    formattedValue: string;
    image?: string;
    name: string;
    price: number;
    quantity: number;
    sku: string;
    value: number;
  };
}
