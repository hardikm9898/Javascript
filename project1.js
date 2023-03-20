let guessNumber = Math.round(Math.random() * 100) + 1;
console.warn("🚀 ~ file: project1.js:2 ~ guessNumber:", guessNumber);
// console.warn("🚀 ~ file: project1.js:4 ~ userGuess:", userGuess);
const massage = document.getElementById("massage");
const countGuesses = document.getElementById("countGuesses");

let count = 1;
let highScore = 10;

document.querySelector("#checkGuessNumber").addEventListener("click", () => {
  const userGuess = Number(document.getElementById("userInput").value);

  // console.warn(
  //   "🚀 ~ file: project1.js:12 ~ document.querySelector ~ highScore:",
  //   highScore
  // );

  if (!userGuess) {
    if (count <= 10) {
      //   massage.innerHTML("please pass the number in between 100 ");
      massage.innerHTML = "please enter the any  Number";
    } else {
      massage.innerHTML = "Try again you lose the game ";
      document.querySelector("body").style.backgroundColor = "red";
    }
  } else if (userGuess > 100) {
    if (count <= 10) {
      massage.innerHTML = "please enter the number between 1 to  100";
      countGuesses.innerHTML = count;
    } else {
      massage.innerHTML = " Try again you lose the game ";
      document.querySelector("body").style.backgroundColor = "red";
    }
    count += 1;
  } else if (guessNumber > userGuess) {
    if (count <= 10) {
      console.warn(
        "🚀 ~ file: project1.js:22 ~ document.querySelector ~ count:",
        count
      );
      countGuesses.innerHTML = `${count}`;
      massage.innerHTML = "your number is low check another";
    } else {
      massage.innerHTML = " Try again you lose the game";
      document.querySelector("body").style.backgroundColor = "red";
    }

    count += 1;
  } else if (userGuess > guessNumber) {
    if (count <= 10) {
      countGuesses.innerHTML = `${count}`;
      massage.innerHTML = "your number higher than number";
    } else {
      massage.innerHTML = "Try again you lose the game";
      document.querySelector("body").style.backgroundColor = "red";
    }

    count += 1;
  } else if (userGuess === guessNumber) {
    countGuesses.innerHTML = `${count}`;
    massage.innerHTML =
      "yaah yeh hue na bat congratulation!!! you chose right number make your New highscore  'TRY AGAIN' ";
    document.querySelector("body").style.backgroundColor = "green";
    if (highScore > count) {
      highScore = count;
      document.getElementById("countHighScore").innerHTML = highScore;
    }
  } else {
    massage.innerHTML = "error code is not runnig properly";
  }
});

document.querySelector("#aginStart").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "black";
  countGuesses.innerHTML = 0;
  count = 1;
  massage.innerHTML = "Enter the Number Blow";
  guessNumber = Math.round(Math.random() * 100) + 1;
  console.warn(
    "🚀 ~ file: project1.js:72 ~ document.querySelector ~ guessNumber:",
    guessNumber
  );
});
