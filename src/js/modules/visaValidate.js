export default function visaValidate(value) {
  value = value.replace(/\D/g, "");
  return value.length >= 13 && value.length <= 19 && +value[0] === 4;
}
