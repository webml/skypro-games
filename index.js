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

function rememberWord() {
  let word = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];
  word = word.sort(() => Math.random() - 0.5);
  alert(word.join(", "));

  let firstWord = prompt("Каким было первое слово?");
  let lastWord = prompt("Каким было последне слово?");

  if (
    firstWord.toLowerCase() == word[0].toLowerCase() &&
    lastWord.toLowerCase() == word[word.length - 1].toLowerCase()
  ) {
    if (confirm("Вы угадали оба слова, хотите сыграть ещё раз?")) {
      remember();
    } else {
      return;
    }
  }

  if (
    firstWord.toLowerCase() == word[0].toLowerCase() ||
    lastWord.toLowerCase() == word[word.length - 1].toLowerCase()
  ) {
    if (confirm("Вы были близки к победе! Хотите сыграть ещё раз?")) {
      rememberWord();
    } else {
      return;
    }
  }

  if (confirm("Вы не угадали, хотите сыграть ещё раз?")) {
    remember();
  } else {
    return;
  }
}

const getEnigma = () => {
  const enigma = {
    answer: "Свеча",
    quest:
      "Моя жизнь может быть измерена в часах. Я служу, когда уменьшаюсь. Когда я тонкая, я быстрая. Когда я толстая, я медленная. Ветер мой враг. Кто я?",
    hint1: "Тело снаружи, рубашка внутри.",
    hint2: "Днём сплю, ночью гляжу, утром умираю.",
  };

  let t = 3;
  let answer = enigma.answer.toUpperCase();

  console.log(answer);
  do {
    let answerUser = prompt(enigma.quest);
    answerUser = answerUser.toUpperCase();

    if (t > 0 && answer === answerUser) {
      alert("Вы угадали!");
      return;
    }

    t--;

    if (t == 2) {
      alert(`Подсказка:\n${enigma.hint1}`);
    }

    if (t == 1) {
      alert(`Подсказка:\n${enigma.hint2}`);
    }

    if (t == 0) {
      alert("Вы проиграли");
      return;
    }
  } while (t !== 0);
};
