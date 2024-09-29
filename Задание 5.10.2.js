const promocode = prompt("Введите промокод:");
const correctPromocode = "скидка";

if (promocode.toLowerCase() === correctPromocode) {
  alert("Промокод применён");
} else {
  alert("Промокод не работает");
}