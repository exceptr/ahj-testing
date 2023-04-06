export default function mirValidate(value) {
  value = value.replace(/\D/g, "");
  const firstNumber = value[0];

  return value.length === 16 && Number(firstNumber) === 2;
}
