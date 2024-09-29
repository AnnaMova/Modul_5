const name = prompt("Введите имя:");
const yearOfBirth = Number(prompt("Введите год рождения:"));

const age = new Date().getFullYear() - yearOfBirth;

let ageText = age.toString();

switch (age % 10) {
  case 1:
    ageText += " год";
    break;
  case 2:
  case 3:
  case 4:
    ageText += " года";
    break;
  default:
    ageText += " лет";
}

alert(`${name}: ${ageText}`);