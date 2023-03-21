// function practice

const hello = function hello(m, n) {
  console.log(m, n);
  const mean = `my name is ${m} and my age is${n}`;
  return mean;
};

hello(5, 21);

console.log(hello(5, 21));

const self = hello(5, 21);

console.log(self);

// function codding challage #1

// test case#1

const calcAverage = (a, b, c) => (a + b + c) / 3;

// testcase#1

let avgDolphins = calcAverage(44, 23, 71);
let avgKoalas = calcAverage(85, 54, 41);

// answer is=No one winnner yet try you luck next time

// testcase#2

avgDolphins = calcAverage(85, 54, 41);
avgKoalas = calcAverage(23, 34, 27);

console.log(avgDolphins);
console.log(avgKoalas);

function checkWinner() {
  console.log(avgDolphins);

  console.log(avgDolphins > avgKoalas * 2);

  if (avgDolphins > avgKoalas * 2) {
    console.log(`dohlphin team is winner`);
  } else if (avgKoalas > avgDolphins * 2) {
    console.log(`koalash team is winner`);
  } else {
    console.log("No one winnner yet try you luck next time ");
  }
}

const winner = checkWinner();

console.log(winner);

// codding challange #2 arrays

const tips = [];

const bills = [125, 55, 44];

const calcTip = (billValue) => {
  if (billValue >= 50 && billValue <= 300) {
    const tip = (billValue * 15) / 100;
    tips.push(tip);
  } else {
    const tip = (billValue * 20) / 100;
    tips.push(tip);
  }

  return tips;
};

for (let i = 0; i < bills.length; i += 1) {
  const arrayOfTips = calcTip(bills[i]);

  // console.log(arrayOfTips)

  if (arrayOfTips.length === bills.length) {
    console.log(`bills   ${bills} and tips array is  ${arrayOfTips}`);
  }
}

// object practice

const hardik = {
  name: "hardik",
  lasname: "makwana",
  job: "trainee",
  work: "simform",
  friends: ["vishanu", "ajit", "annad"],
};

const me = hardik.work;
console.log(me);
console.log(hardik.work);

const pr = "job";

// let ans = hardik[pr];

console.log(typeof pr);

const ans = hardik[pr];

console.log(ans);

const nmFreinds = hardik.friends.length;
console.log(nmFreinds);

console.log(
  `${hardik.name} have ${nmFreinds} his bestfiends name is ${hardik.friends[0]}`
);

// challanges :2

const intro = {
  name: "hardik",
  lasname: "makwana",
  job: "trainee",
  birthYear: 2002,
  work: "simform",
  friends: ["vishanu", "ajit", "annad"],
  divingLicence: false,

  calage(birthYear) {
    return 2037 - birthYear;
  },
};
const derivingLicenceOrNot = intro.divingLicence
  ? "driving lecenc"
  : "not a driver's license ";

console.log(
  `${intro.name} is a  ${intro.calage(2002)}-year old  ${
    intro.job
  },and he hasa ${derivingLicenceOrNot} `
);

// testcase#1

let mark = {
  name: "mark",
  mass: 64,
  height: 1.69,
};
let john = {
  name: "john",
  mass: 53.3,
  height: 1.95,
};
//  testcase #2

mark = {
  name: "mark",
  mass: 94,
  height: 1.59,
};
john = {
  name: "john",
  mass: 83.3,
  height: 1.15,
};

const calcBMI = function calcBMI(mass, height) {
  return mass / (height * height);
};

const johnBMI = calcBMI(john.mass, john.height);
console.warn("🚀 ~ file: function.js:202 ~ jayBMI:", johnBMI);
const markBMi = calcBMI(mark.mass, mark.height);
console.warn("🚀 ~ file: function.js:204 ~ bhagvanjiBMi:", markBMi);

if (johnBMI > markBMi) {
  console.log(
    `${john.name} BMI ${johnBMI} is higher than ${mark.name} ${markBMi}!`
  );
} else {
  console.log(
    `${mark.name} BMI ${markBMi} is higher than ${john.name} ${johnBMI}!`
  );
}

// last codding challange#4

const bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

const calTips = function (billValue) {
  return billValue >= 50 && billValue <= 300
    ? (billValue * 15) / 100
    : (billValue * 20) / 100;
};

const tips1 = [];
const total = [];
for (let i = 0; i < bills2.length; i += 1) {
  const arrayOfTips = calTips(bills2[i]);
  tips1.push(arrayOfTips);
  total.push(bills2[i] + arrayOfTips);
}
console.log(tips1);
console.log(total);

const calAvrage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  const avrage = sum / arr.length;
  // console.warn("🚀 ~ file: function.js:247 ~ calAvrage ~ arr.length:", sum)
  return avrage;
};

console.log(calAvrage(tips1));
console.log(calAvrage(total));
console.log(calAvrage([2, 8, 9]));

const jessi = {
  me: "jessi",
  age: 21,
};

console.log(jessi);

Object.assign({}, marry);
