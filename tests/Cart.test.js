import Cart from '../src/js/Cart.js';
import Movie from '../src/js/Movie.js';

describe('Cart', () => {
  let cart;
  let movie;

  beforeEach(() => {
    cart = new Cart();
    movie = new Movie(1, 'Мстители', 2012, 'США', '!', ['фантастика'], 137, 500);
  });

  test('calculateTotal() возвращает сумму', () => {
    cart.add(movie);
    cart.add({ id: 2, price: 300 });
    expect(cart.calculateTotal()).toBe(800);
  });

  test('calculateDiscountedTotal() применяет скидку', () => {
    cart.add(movie);
    expect(cart.calculateDiscountedTotal(20)).toBe(400);
  });

  test('calculateDiscountedTotal() бросает ошибку при неверной скидке', () => {
    cart.add(movie);
    expect(() => cart.calculateDiscountedTotal(101)).toThrow();
    expect(() => cart.calculateDiscountedTotal(-1)).toThrow();
  });

  test('removeById() удаляет товар', () => {
    cart.add(movie);
    cart.add({ id: 2, price: 300 });
    cart.removeById(1);
    expect(cart.getItems().length).toBe(1);
    expect(cart.getItems()[0].id).toBe(2);
  });

  test('getItems() возвращает копию массива', () => {
    cart.add(movie);
    const items = cart.getItems();
    items.push('хак');
    expect(cart.getItems().length).toBe(1);
  });
});