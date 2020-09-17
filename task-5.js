let sumdelivery;
let deliveryCountry = prompt(
  "Укажите страну в которую будет выполнена доставка?"
);
let message;
const CHINA = "Китай";
const CHILI = "Чили";
const AUSTRALIA = "Австралия";
const INDIA = "Индия";
const JAMAIKA = "Ямайка";

deliveryCountry =
  deliveryCountry[0].toUpperCase() +
  deliveryCountry.slice(1).toLocaleLowerCase();

switch (deliveryCountry) {
  case CHINA:
    sumdelivery = 100;
    break;
  case CHILI:
    sumdelivery = 250;
    break;
  case AUSTRALIA:
    sumdelivery = 170;
    break;
  case INDIA:
    sumdelivery = 80;
    break;
  case JAMAIKA:
    sumdelivery = 120;
    break;
  default:
    alert("В вашей стране доставка не доступна!");
}
if (deliveryCountry) {
  alert(`Доставка в ${deliveryCountry} будет стоить ${sumdelivery} кредитов!`);
}
