function guessTheSeason(month = Number(prompt("Введите номер месяца"))) {
  if (month === 1 || month === 2 || month === 12) {
    if (confirm("Это зима. Хотите сыграть ещё раз?")) {
      guessTheSeason();
    }
    return;
  }

  if (month === 3 || month === 4 || month === 5) {
    if (confirm("Это весна. Хотите сыграть ещё раз?")) {
      guessTheSeason();
    }
    return;
  }

  if (month === 6 || month === 7 || month === 8) {
    if (confirm("Это лето. Хотите сыграть ещё раз?")) {
      guessTheSeason();
    }
    return;
  }

  if (month === 9 || month === 10 || month === 11) {
    if (confirm("Это осень. Хотите сыграть ещё раз?")) {
      guessTheSeason();
    }
    return;
  }

  alert("Введите число от 1 до 12");
}
