/**
 * Класс Movie — представляет фильм в магазине
 */
export default class Movie {
  /**
   * @param {number} id - Уникальный ID
   * @param {string} title - Название фильма
   * @param {number} year - Год выпуска
   * @param {string} country - Страна
   * @param {string} tagline - Слоган
   * @param {string[]} genres - Жанры (массив строк)
   * @param {number} duration - Длительность в минутах
   * @param {number} price - Цена
   */
  constructor(id, title, year, country, tagline, genres, duration, price) {
    this.id = id;
    this.title = title;
    this.year = year;
    this.country = country;
    this.tagline = tagline;
    this.genres = genres;
    this.duration = duration;
    this.price = price;
  }

  /**
   * Возвращает строковое представление фильма
   * @returns {string}
   */
  toString() {
    return `${this.title} (${this.year}), ${this.country}, ${this.duration} мин`;
  }
}