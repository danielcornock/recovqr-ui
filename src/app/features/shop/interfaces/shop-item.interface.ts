export interface ShopItem {
  id: string;
  name: string;
  description: string;
  options: { quantity: number, price: number, id: string }[];
}