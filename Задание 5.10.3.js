
const name = prompt("Введите ваше имя:");
const birthYear = prompt("Введите ваш год рождения:");

// Вычисляем текущий год
const currentYear = new Date().getFullYear();

// Вычисляем возраст пользователя
const age = currentYear - birthYear;

//  Сообщение с именем и возрастом
alert(`${name}: ${age}`);
