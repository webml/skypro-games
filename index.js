function whatIsSeasons(month = Number(prompt("Введите номер месяца"))) {
  if (month === 1 || month === 2 || month === 12) {
    alert("Зима");
  } else if (month === 3 || month === 4 || month === 5) {
    alert("Весна");
  } else if (month === 6 || month === 7 || month === 8) {
    alert("Лето");
  } else if (month === 9 || month === 10 || month === 11) {
    alert("Осень");
  } else {
    alert("Введите число от 1 до 12");
  }
}
