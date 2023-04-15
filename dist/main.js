/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/img/visa.png
const visa_namespaceObject = __webpack_require__.p + "545145c60c726b397f61.png";
;// CONCATENATED MODULE: ./src/img/mastercard.png
const mastercard_namespaceObject = __webpack_require__.p + "c4e9401087382c69cf65.png";
;// CONCATENATED MODULE: ./src/img/mir.png
const mir_namespaceObject = __webpack_require__.p + "0ff4424b83cc4a3d0c21.png";
;// CONCATENATED MODULE: ./src/js/modules/CardValidatorWidget.js



class CardValidatorWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
  }
  static get markup() {
    return `<div class="widget">
        <h3>Проверьте номер своей карты</h3>
        <div class="card-list">
          <img class="visa" src="${visa_namespaceObject}" alt="Visa" title="Visa">
          <img class="mastercard" src="${mastercard_namespaceObject}" alt="Mastercard" title="Mastercard">
          <img class="mir" src="${mir_namespaceObject}" alt="Mir" title="Mir">
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
;// CONCATENATED MODULE: ./src/js/modules/Luna.js
function luna(value) {
  value = value.replace(/\D/g, "");
  let nCheck = 0;
  let bEven = false;
  for (let n = value.length - 1; n >= 0; n--) {
    let nDigit = parseInt(value.charAt(n), 10);
    if (bEven && (nDigit *= 2) > 9) {
      nDigit -= 9;
    }
    nCheck += nDigit;
    bEven = !bEven;
  }
  return nCheck % 10 == 0;
}
;// CONCATENATED MODULE: ./src/js/modules/visaValidate.js
function visaValidate(value) {
  value = value.replace(/\D/g, "");
  return value.length >= 13 && value.length <= 19 && +value[0] === 4;
}
;// CONCATENATED MODULE: ./src/js/modules/mastercardValidate.js
function mastercardValidate(value) {
  value = value.replace(/\D/g, "");
  const masterCardList = [51, 52, 53, 54, 55];
  const firstNumbers = [value[0] + value[1]];
  return value.length === 16 && masterCardList.includes(Number(firstNumbers));
}
;// CONCATENATED MODULE: ./src/js/modules/mirValidate.js
function mirValidate(value) {
  value = value.replace(/\D/g, "");
  const firstNumber = value[0];
  return value.length === 16 && Number(firstNumber) === 2;
}
;// CONCATENATED MODULE: ./src/js/modules/CardValidator.js




class CardValidator {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.onButton = this.onButton.bind(this);
    this.valueNone = this.valueNone.bind(this);
  }
  static get selector() {
    return ".form-inline";
  }
  static get cardListSelector() {
    return ".card-list";
  }
  static get inputSelector() {
    return ".form-input";
  }
  static get buttonSelector() {
    return ".validate-btn";
  }
  static get labelSelector() {
    return ".validator-form";
  }
  static get visaSelector() {
    return ".visa";
  }
  static get masterCardSelector() {
    return ".mastercard";
  }
  static get mirSelector() {
    return ".mir";
  }
  init() {
    this.element = this.parentEl.querySelector(CardValidator.selector);
    this.cardList = this.parentEl.querySelector(CardValidator.cardListSelector);
    this.input = this.element.querySelector(CardValidator.inputSelector);
    this.button = this.element.querySelector(CardValidator.buttonSelector);
    this.label = this.element.querySelector(CardValidator.labelSelector);
    this.visa = this.cardList.querySelector(CardValidator.visaSelector);
    this.masterCard = this.cardList.querySelector(CardValidator.masterCardSelector);
    this.mir = this.cardList.querySelector(CardValidator.mirSelector);
    this.element.addEventListener("click", this.onButton);
    this.element.addEventListener("input", this.valueNone);
  }
  valueNone(e) {
    e.preventDefault();
    const _value = this.input.value;
    if (_value.length === 0) return this.defaultOpacity();
  }
  onButton(e) {
    e.preventDefault();
    const value = this.input.value;
    if (luna(value)) {
      this.valid();
      if (visaValidate(value)) {
        this.valid();
        this.validVisa();
      }
      if (mastercardValidate(value)) {
        this.valid();
        this.validMasterCard();
      }
      if (mirValidate(value)) {
        this.valid();
        this.validMir();
      }
    } else {
      this.inValid();
      this.defaultOpacity();
    }
  }
  validVisa() {
    this.defaultOpacity();
    this.visa.classList.add("valid");
    this.masterCard.style.opacity = "0.3";
    this.mir.style.opacity = "0.3";
  }
  validMasterCard() {
    this.defaultOpacity();
    this.masterCard.classList.add("valid");
    this.visa.style.opacity = "0.3";
    this.mir.style.opacity = "0.3";
  }
  validMir() {
    this.defaultOpacity();
    this.mir.classList.add("valid");
    this.visa.style.opacity = "0.3";
    this.masterCard.style.opacity = "0.3";
  }
  defaultOpacity() {
    this.visa.style.opacity = "1";
    this.masterCard.style.opacity = "1";
    this.mir.style.opacity = "1";
  }
  inValid() {
    this.input.classList.add("inValid");
    this.input.classList.remove("valid");
    this.input.style.borderColor = "red";
  }
  valid() {
    this.input.classList.add("valid");
    this.input.classList.remove("inValid");
    this.input.style.borderColor = "gray";
  }
}
;// CONCATENATED MODULE: ./src/js/app.js


const validator = document.querySelector(".validator");
const widget = new CardValidatorWidget(validator);
widget.bindToDOM();
const cardValidator = new CardValidator(validator);
cardValidator.init();
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;