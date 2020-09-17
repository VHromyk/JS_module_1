let credits = 23580;
const pricePerDroid = 3000;
let totalOrdered = prompt("Введите количество ремонтных дроидов:");
let totalPrice = totalOrdered * pricePerDroid;
let balance = credits - totalOrdered * pricePerDroid;
if (totalOrdered === null) {
  console.log("Отменено пользователем!");
} else if (totalPrice > credits) {
  console.log("Недостаточно средств на счету!");
} else if (totalPrice < credits) {
  console.log(
    `Вы купили ${totalOrdered} дроидов, на счету осталось ${balance} кредитов.`
  );
}
