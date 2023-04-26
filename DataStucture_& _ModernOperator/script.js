// DataStucture_& _ModernOperator practice

const hotelDetails = {
  name: "taj",
  Startermenu: ["garlic bread", "manchau suup", "tomato suupp"],
  menu: ["pizza", "bread", "puff", "panipuri"],

  startTime: {
    mon: {
      open: 11,
      close: 5,
    },
    fri: {
      open: 12,
      close: 6,
    },
    sat: {
      open: 1,
      close: 24,
    },
  },
  oerder({ index, address, time }) {
    console.log(
      ` ${this.name}  order ${this.Startermenu[index]} or ${this.menu[index]} dilivered to the ${address} at ${time}`
    );
  },
};

hotelDetails.oerder({
  index: 2,
  address: "simform solution",
  time: 20,
});

const { name, Startermenu } = hotelDetails;

console.log(name, Startermenu);

let [bread, supp] = Startermenu;

console.log(bread, supp);

// switch the variable

[bread, supp] = [supp, bread];

console.log(bread, supp);

// spread Operator practice
const array = [1, 2, 3, 4, 5, 6, 7];
const [x, y, z] = [...array];

console.log(x, y, z); //   1 2 3

// rest operatore practice

const mat = [1, 2, 3, 4, 5];

const arr = [...mat, 5, 5, 6];
console.warn("🚀 ~ file: script.js:63 ~ arr:", arr);

const test = [1, 2, 3, ...mat];
console.log(test);

// cosnt [1,3,4,...other]=test

// console.log(hardik)

const [me, to, help, ...other] = test;
console.warn("🚀 ~ file: script.js:70 ~ other:", other);
console.warn(
  "🚀 ~ file: script.js:70 ~ me,to,help,...other:",
  me,
  to,
  help,
  other
);

const foo = null ?? "default string";
console.log(foo);
// Expected output: "default string"

const baz = 0 ?? 42;
console.log(baz);
// Expected output: 0

console.log(false && true);
console.log(false && false);
console.log(false && "");
console.log("dog" && "cat");
console.log("cat" && "");
console.log(0 && true);
console.log(0 && false);
console.log(true && true);
