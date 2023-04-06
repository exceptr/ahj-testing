export default function mastercardValidate(value) {
  value = value.replace(/\D/g, "");
  const masterCardList = [51, 52, 53, 54, 55];
  const firstNumbers = [value[0] + value[1]];

  return value.length === 16 && masterCardList.includes(Number(firstNumbers));
}
