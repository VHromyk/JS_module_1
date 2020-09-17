let total = 0;
let input = prompt(`Введите число`);

while (input != null) {
  input = Number(input);
  if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    total += input;
  }
  input = prompt(`Введите число`);
}
alert(`Общая сумма чисел равна ${total}`);
