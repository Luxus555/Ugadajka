function gameBot() {
  let num = 88,
    numUser = +prompt("Угадай число от 1 до 100");

  function gameBotChecknumber() {
    if (numUser > num) {
      alert("Загаданное число меньше");
    } else if (numUser < num) {
      alert("Загаданное число больше");
    } else if (numUser === num) {
      alert("Вы угадали");

      let gameOver = confirm("Сыграем ещё?");

      if (gameOver == true) {
        gameBot();
      } else {
        return;
      }
    }
    gameBot();
  }

  gameBotChecknumber();
}
gameBot();
