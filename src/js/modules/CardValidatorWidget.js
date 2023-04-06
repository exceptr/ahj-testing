import visa from "../../img/visa.png";
import masterCard from "../../img/mastercard.png";
import mir from "../../img/mir.png";

export default class CardValidatorWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }

  static get markup() {
    return `<div class="widget">
        <h3>Проверьте номер своей карты</h3>
        <div class="card-list">
          <img class="visa" src="${visa}" alt="Visa" title="Visa">
          <img class="mastercard" src="${masterCard}" alt="Mastercard" title="Mastercard">
          <img class="mir" src="${mir}" alt="Mir" title="Mir">
        </div>
        <form class="form-inline">
          <div class="control">
            <input data-id="form-input" class="form-input" type="text" placeholder="Введите номер карты">
          </div>
          <button class="validate-btn">Нажмите для валидации</button>
        </form>
        <div class="example-card">Пример номера карты</div>
        <table>
          <tr>
            <td>Visa</td>
            <td>4916838661195196</td>
          </tr>
          <tr>
            <td>Mastercard</td>
            <td>5211033546806139</td>
          </tr>
          <tr>
            <td>Мир</td>
            <td>2200770212727079</td>
          </tr>
        </table>
      </div>
      `;
  }

  bindToDOM() {
    this.parentEl.innerHTML = CardValidatorWidget.markup;
  }
}
