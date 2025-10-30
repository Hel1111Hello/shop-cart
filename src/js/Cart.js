/**
 * Класс Cart — корзина покупок
 */
export default class Cart {
  constructor() {
    /** @type {Array} */
    this.items = [];
  }

  /**
   * Добавляет товар в корзину
   * @param {Object} item - Объект с полем price
   */
  add(item) {
    this.items.push(item);
  }

  /**
   * Удаляет товар по ID
   * @param {number} id
   * @returns {void}
   */
  removeById(id) {
    this.items = this.items.filter(item => item.id !== id);
  }

  /**
   * Считает общую стоимость без скидки
   * @returns {number}
   */
  calculateTotal() {
    return this.items.reduce((sum, item) => sum + item.price, 0);
  }

  /**
   * Считает стоимость с учётом скидки
   * @param {number} discount - Процент скидки (0–100)
   * @returns {number}
   */
  calculateDiscountedTotal(discount) {
    if (discount < 0 || discount > 100) {
      throw new Error('Скидка должна быть от 0 до 100');
    }
    const total = this.calculateTotal();
    return total * (1 - discount / 100);
  }

  /**
   * Возвращает массив товаров
   * @returns {Array}
   */
  getItems() {
    return [...this.items];
  }
}