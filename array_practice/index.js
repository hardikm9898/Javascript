// codding challange#1

const checkDOg = function (juliasDogs, katiaDogs) {
  juliasDogs.splice(0, 1);
  juliasDogs.splice(-2);
  const juliasDogCheck = juliasDogs;

  const concatDogsArray = [...juliasDogCheck, ...katiaDogs];

  console.log("for-each loops");

  concatDogsArray.forEach((x, i) =>
    x >= 3
      ? console.log(`Dog number${i + 1} is an adult, and is ${x} year old`)
      : console.log(`Dog number${i + 1} is still puppy, and is ${x} year old`)
  );

  console.log("Map-method ");
  concatDogsArray.map((x, i) => {
    if (x >= 3) {
      return `Dog number${i + 1} is an adult, and is ${x} year old`; // to place return to console.log  same result of forech loop
    }
    return `Dog number${i + 1} is still puppy, and is ${x} year old`;
  });
};
const katia = [4, 1, 15, 8, 3];

const julis = [3, 5, 2, 7, 12];
checkDOg(katia, julis);

// convert Dog age to Human Age

const convertDogAgeToHumanAge = function (age) {
  const humanAge = age.map((x) => (x <= 2 ? 2 * x : 16 + x * 4));
  console.log(humanAge);

  const total2 = humanAge.filter((x) => x > 18);
  console.debug(
    "🚀 ~ file: index.js:40 ~ convertDogAgeToHumanAge ~ total2:",
    total2
  );

  const total = humanAge.filter((x) => x > 18);
  const reduce = total.reduce((acc, x) => acc + x, 0);
  const avarage = reduce / total.length;
  console.log(`the total Average of Dog is ${avarage}`);
};

const age = [5, 2, 4, 1, 15, 8, 4];

// testcase

const age2 = [16, 6, 10, 5, 6, 1, 4];

convertDogAgeToHumanAge(age);

// coding challange #3 by the chaining make averageHumanAge calculator

const convertDogAgeToHumanAge2 = (man) => {
  const resultArrow = man
    .map((x) => (x <= 2 ? 2 * x : 16 + x * 4))
    .filter((x) => x > 18)
    .reduce((acc, x, i, arr) => acc + x / arr.length, 0);
  console.log(`By the chaining ${resultArrow}`);
};

convertDogAgeToHumanAge2(age);
convertDogAgeToHumanAge2(age2);

// codding challange  #4

const dog = [
  { weight: 22, curFood: 250, owners: ["Alice", "bob"] },
  { weight: 8, curFood: 200, owners: ["matilda"] },
  { weight: 13, curFood: 275, owners: ["sarah"] },
  { weight: 32, curFood: 340, owners: ["michail"] },
];

function recommendedPortion(weight) {
  return Math.round(weight ** 0.75 * 28);
}
// task#1
const recommendedFood = dog.reduce((acc, curr, i) => {
  const recommended = recommendedPortion(curr.weight);

  acc[
    i
  ] = ` The owner of  ${curr.owners[0]} dog  recomdded food portion is ${recommended} kg`;

  return acc;
}, {});
console.log(recommendedFood);

// task#2

const findSarahdog = dog.reduce((acc, x) => {
  let accResult = acc;
  if (x.owners[0] === "sarah") {
    accResult =
      x.curFood > recommendedPortion(x.weight) ? "Too high" : "littel";
  }
  return accResult;
}, "");
console.log(findSarahdog);

// task#3

const tooMuchEatOwner = dog
  .filter((curr) => curr.curFood > recommendedPortion(curr.weight))

  .map((x) => x.owners)
  .flat();
console.log(tooMuchEatOwner);
const tooLittelEatOwner = dog
  .filter((curr) => curr.curFood < recommendedPortion(curr.weight))

  .map((x) => x.owners)
  .flat();

console.log(tooLittelEatOwner);

// task#4
const stringlittel = tooLittelEatOwner.join(" and ");
const stringEatTooMuch = tooMuchEatOwner.join(" and ");

console.log(
  `${stringEatTooMuch}'s dogs eat too much! ${stringlittel}'s dog eat too littel!`
);

// task#5

const exactEat = dog.filter((x) => x.curFood === recommendedPortion(x.weight));

if (exactEat.length === 0) {
  console.log("false");
} else {
  console.log("true");
}

// task#6
const shallowCopy = [...dog];

const assendingOrder = shallowCopy
  .map((x) => Math.round(x.weight ** 0.75 * 28))
  .reduce((acc, curr, i, arr) => {
    let resultAssending = acc;
    resultAssending = arr.sort((a, b) => a - b);
    return resultAssending;
  }, {});
assendingOrder.sort((a, b) => a - b);

console.debug("🚀 ~ file: index.js:152 ~ assendingOrder:", assendingOrder);

// practice of shallow copy





