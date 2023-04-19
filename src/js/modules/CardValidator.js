import luna from "../modules/luna";
import visaValidate from "../modules/visaValidate";
import mastercardValidate from "../modules/mastercardValidate";
import mirValidate from "../modules/mirValidate";

export default class CardValidator {
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
    this.masterCard = this.cardList.querySelector(
      CardValidator.masterCardSelector
    );
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
