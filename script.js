// let name = "Иван";
// alert(`Привет, ${name}`);

// alert("Hello");

// let age = prompt("Сколько тебе лет?", 100);
// alert(`Тебе ${age} лет`);

// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);

// let nameUser = prompt("Как тебя зовут?", "");
// alert(nameUser);

// alert(5 ** 3);

// let counter = 1;
// let a = counter++;
// console.log(a);
// console.log(a);

// let counter = 0;
// counter++;
// ++counter;
// alert(counter);

// let varUser = prompt("Какое официальное название js?", "");
// if (varUser == "ECMAScript") {
//   alert("Правильно");
// } else {
//   alert(`Не знаете? 'ECMAScript'!`);
// }

// let value = prompt("Введите число", "");
// if (value > 0) {
//   alert(1);
// } else if (value < 0) {
//   alert(-1);
// } else {
//   alert(0);
// }

// let result;
// result = a + b < 4 ? "Мало" : "Много";

// let message;
// message =
//   login == "Сотрудник"
//     ? "Привет"
//     : login == "Директор"
//     ? "Здравствуйте"
//     : login == ""
//     ? "Нет логина"
//     : "";

// age = 14;
// if (age >= 14 && age <= 90) {
//   alert("Да, между 14 и 90");
// }

// age = 12;
// if (!(age >= 14 && !age <= 90)) {
//   alert("Не от 14 до 90");
// }

// age = 12;
// if (age <= 14 || age >= 90) {
//   alert("Не от 14 до 90");
// }

// let userStatus = prompt("Кто там?", "");
// if (userStatus == null) {
//   alert("Отменено");
// } else if (userStatus == "Админ") {
//   let userPassword = prompt("Пароль?", "");
//   if (userPassword == null) {
//     alert("Отменено");
//   } else if (userPassword == "Я Главный") {
//     alert("Здравствуйте");
//   } else {
//     alert("Неверный пароль");
//   }
// } else {
//   alert("Я вас не знаю!");
// }

// for (let i = 0; i <= 10; i++) {
//   if (i % 2 == 0 && i != 0) {
//     console.log(i);
//   }
// }

// let i = 0;
// while (i < 3) {
//   console.log(`number ${i}!`);
//   i++;
// }

// let value = +prompt("Введите число больше 100", 0);
// while (value <= 100 && value) {
//   value = +prompt("Введите число больше 100", 0);
// }
// console.log(value);

// let n = 100;
// label: for (let i = 2; i <= n; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue label;
//   }
//   console.log(i);
// }

// let n = 100;
// nextPrime: for (let i = 2; i <= n; i++) {
//   // Для всех i...
//   for (let j = 2; j < i; j++) {
//     // проверить, делится ли число..
//     if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//   }
//   console.log(i); // простое число
// }

// let browser = "Chrome";
// if (browser === "Edge") {
//   alert("You`ve got the Edge!");
// } else if (
//   browser === "Chrome" ||
//   browser === "Firefox" ||
//   browser === "Safari" ||
//   browser === "Opera"
// ) {
//   alert("Okay we support these browsers too");
// } else {
//   alert("We hope that this page looks ok!");
// }

// const number = +prompt("Введите число между 0 и 3", "");
// switch (number) {
//   case 0:
//     alert("Вы ввели число 0");
//     break;
//   case 1:
//     alert("Вы ввели число 1");
//     break;
//   case 2:
//   case 3:
//     alert("Вы ввели число 2, а может и 3");
//     break;
// }

// function checkAge(age) {
//   return age > 18 ? true : confirm("Родители разрещали?");
// }
// checkAge(2);

// function checkAge(age) {
//   return age > 18 || confirm("Родители разрещали?");
// }
// checkAge(2);

// function min(a, b) {
//   if (a < b) {
//     return a;
//   }
//   return b;
// }
// let res = min(1, 1);
// console.log(res);

// function pow(x, n) {
//   return x ** n;
// }
// let res = pow(5, 3);
// console.log(res);

// Function Declaration(Объявление функции)
// function sayHi(){
//   alert('Привет');
// }

// Function Expression(Функциональное Выражение)
// let sayHi = function () {
//   alert("Привет");
// };

// function ask(questiob, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Вы согласны?",
//   () => alert("Вы согласились."),
//   () => ask("Вы отменили выполнение.")
// );

//
