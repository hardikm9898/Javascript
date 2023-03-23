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
console.warn(
  "🚀 ~ file: challange2.js:26 ~ gk2,...fieldPlayer2:",
  gk2,
  fieldPlayer2
);
console.warn(
  "🚀 ~ file: challange2.js:5 ~ gk, ...fieldPlayer:",
  gk1,
  ...fieldPlayer1
);

const allPlayer = [...game.player1, ...game.player2];
console.warn("🚀 ~ file: challange2.js:12 ~ allPlayer:", allPlayer);

const [mikal, , mbappe, , levish, ...substitutionPlayer] = game.player1;
console.warn(
  "🚀 ~ file: challange2.js:44 ~ mikal, , mbappe, , levish:",
  mikal,
  mbappe,
  levish
);
console.warn(
  "🚀 ~ file: challange2.js:15 ~ mikal, ,mbappe, ,levish,...substitutionPlayer:",
  substitutionPlayer
);

const finalPlayer = ["Thiango", "countho", "prisic", ...substitutionPlayer];
console.warn("🚀 ~ file: challange2.js:41 ~ finalPlayer:", finalPlayer);

const printGoal = function (...playre) {
  console.log(...playre);
  console.warn("🚀 ~ file: challange2.js:68 ~ printGoal ~ playre:", ...playre);
  console.log(`Goals ${playre.length} by the ${[...playre]}`);
};

printGoal("dhavan", "bolder", "magan", "leli");

for (const [i, values] of Object.entries(game.scored)) {
  console.log(`Golas ${1 + +i}  by ${values}`);
}
let avg = 0;
let odd = 0;
for (odd of Object.values(game.odds)) avg += odd;

avg /= Object.keys(game.odds).length;

console.log(avg);
