// tests/Movie.test.ts
import { Cart } from '../src/Cart';
import { Movie } from '../src/Movie';

describe('Movie in Cart', () => {
  const movie = new Movie(
    1,
    'Мстители',
    'The Avengers',
    2012,
    'США',
    ['фантастика', 'боевик', 'фэнтези', 'приключения'],
    137,
    'IMAX',
    599
  );

  it('should add Movie to cart', () => {
    const cart = new Cart();
    cart.add(movie);

    expect(cart.getItems()).toHaveLength(1);
    expect(cart.getItems()[0].title).toBe('Мстители');
    expect(cart.calculateTotal()).toBe(599);
  });

  it('should return correct info string', () => {
    const expected = `Мстители (The Avengers)
2012, США
фантастика, боевик, фэнтези, приключения
2 ч 17 мин • IMAX`;
    expect(movie.getInfo().trim()).toBe(expected);
  });
});