import { Movie } from './Movie';

type CartItem = any; 

export class Cart {
  private items: CartItem[] = [];

  add(item: CartItem): void {
    this.items.push(item);
  }

  getItems(): CartItem[] {
    return [...this.items];
  }


  calculateTotal(): number {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  calculateDiscountedTotal(discount: number): number {
    if (discount < 0 || discount > 100) {
      throw new Error('Discount must be between 0 and 100');
    }
    return this.calculateTotal() * (1 - discount / 100);
  }

  removeById(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}