import Cart from './js/Cart.js';
import Movie from './js/Movie.js';
import './css/style.css';

// Пример использования
const cart = new Cart();

const movie = new Movie(
  1,
  'Мстители',
  2012,
  'США',
  'Avengers Assemble!',
  ['фантастика', 'боевик', 'приключения'],
  137,
  500
);

cart.add(movie);
console.log(cart.calculateTotal()); // 500
cart.removeById(1);
console.log(cart.getItems()); // []