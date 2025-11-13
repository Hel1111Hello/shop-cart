// tests/Cart.test.ts
import { Cart } from '../src/Cart';
import { Movie } from '../src/Movie';

describe('Cart methods', () => {
  let cart: Cart;
  const movie = new Movie(1, 'Мстители', 'The Avengers', 2012, 'США', ['фантастика'], 137, 'IMAX', 599);

  beforeEach(() => {
    cart = new Cart();
    cart.add(movie);
  });

  it('calculateTotal returns price', () => {
    expect(cart.calculateTotal()).toBe(599);
  });

  it('calculateDiscountedTotal applies discount', () => {
    expect(cart.calculateDiscountedTotal(10)).toBe(539.1);
  });

  it('calculateDiscountedTotal throws on invalid discount', () => {
    expect(() => cart.calculateDiscountedTotal(-1)).toThrow();
    expect(() => cart.calculateDiscountedTotal(101)).toThrow();
  });

  it('removeById removes item', () => {
    cart.removeById(1);
    expect(cart.getItems()).toHaveLength(0);
  });

  it('removeById does nothing if not found', () => {
    cart.removeById(999);
    expect(cart.getItems()).toHaveLength(1);
  });
});