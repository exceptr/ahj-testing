import CardValidatorWidget from "./modules/CardValidatorWidget";
import CardValidator from "./modules/CardValidator";

const validator = document.querySelector(".validator");
const widget = new CardValidatorWidget(validator);

widget.bindToDOM();

const cardValidator = new CardValidator(validator);
cardValidator.init();
