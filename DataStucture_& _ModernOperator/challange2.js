const game = {
  team1: "bayern Munich",
  team2: "Borrussian Dortmund",
  player1: [
    "mikal",
    "john",
    "mbappe",
    "kohli",
    "levish",
    "mindle",
    "bob",
    "vkaram",
    "lesi",
  ],
  player2: [
    "liven",
    "jenn",
    "mesi",
    "ronaldo",
    "raina",
    "dhavan",
    "bolder",
    "magan",
    "leli",
  ],
  score: "4.0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummenls"],
  date: "23 march, 2023",
  odds: {
    team1: 1.33,
    x: 3.35,
    team2: 6.5,
  },
};
const [gk1, ...fieldPlayer1] = game.player1;
const [gk2, ...fieldPlayer2] = game.player2;
console.debug(
  "🚀 ~ file: challange2.js:26 ~ gk2,...fieldPlayer2:",
  gk2,
  fieldPlayer2
);
console.debug(
  "🚀 ~ file: challange2.js:5 ~ gk, ...fieldPlayer:",
  gk1,
  ...fieldPlayer1
);

const allPlayer = [...game.player1, ...game.player2];
console.debug("🚀 ~ file: challange2.js:12 ~ allPlayer:", allPlayer);

const [mikal, , mbappe, , levish, ...substitutionPlayer] = game.player1;
console.debug(
  "🚀 ~ file: challange2.js:44 ~ mikal, , mbappe, , levish:",
  mikal,
  mbappe,
  levish
);
console.debug(
  "🚀 ~ file: challange2.js:15 ~ mikal, ,mbappe, ,levish,...substitutionPlayer:",
  substitutionPlayer
);

const finalPlayer = ["Thiango", "countho", "prisic", ...substitutionPlayer];
console.debug("🚀 ~ file: challange2.js:41 ~ finalPlayer:", finalPlayer);

const printGoal = function (...playre) {
  console.log(...playre);
  console.debug("🚀 ~ file: challange2.js:68 ~ printGoal ~ playre:", ...playre);
  console.log(`Goals ${playre.length} by the ${[...playre]}`);
};

printGoal("dhavan", "bolder", "magan", "leli");

Object.entries(game.scored).forEach(([i, values]) => {
  console.log(`Golas ${1 + +i}  by ${values}`);
});

let avg = 0;

Object.values(game.odds).forEach((odd) => {
  avg += odd;
});

avg /= Object.keys(game.odds).length;

console.log(avg);

const gameEvent = new Map([
  [17, "Goal"],
  [36, "Subst]tution"],
  [47, "Goal"],
  [61, "Subst]tution"],
  [65, "Red c]rd"],
  [69, "Subs"],
  [69, "Subst]tution"],
  [72, "Goal"],
  [80, "Goal"],
  [92, "yello]card"],
]);
console.debug("🚀 ~ file: challange2.js:97 ~ gameEvent:", gameEvent);

gameEvent.delete(65);

console.log(gameEvent);

console.debug("🚀 ~ file: challange2.js:115 ~ gameEvent.size:", gameEvent.size);

console.log();
const arr = [...gameEvent.keys()];
console.debug("🚀 ~ file: challange2.js:107 ~ arr:", arr);
const time = arr.pop();
console.debug("🚀 ~ file: challange2.js:109 ~ time:", time);

const avrage = time / gameEvent.size;

console.log(`an event happened, on average, every ${avrage} minutes`);

gameEvent.forEach((minutes, event) => {
  const half = minutes <= 17 ? "[FIRST_HALF]" : "[SECONF HALF]";
  console.log(`${half} ${event} happended at ${minutes}`);
});
