const ADMIN_PASSWORD = "jqueryismyjam";
let massage = prompt("Введите Ваш пароль:");
const CANCEL = "Отменено пользователем!";
const YOU_ARE_WELCOME = "Добро пожаловать!";
const NO_ACCESS = "Доступ запрещен, неверный пароль!";

if (massage === null) {
  alert(CANCEL);
} else if (massage === ADMIN_PASSWORD) {
  alert(YOU_ARE_WELCOME);
} else {
  alert(NO_ACCESS);
}
