const user = ["ha", "js", "tr", "as", "ar", "rt"];

const output = user.reduce((acc, cuur) => {
  if (cuur.indexOf < cuur.length / 2) {
    acc.push();
  }
  return acc;
}, []);
console.log(output);

const arr = [11, 7, 3, 10, 45];

const [a, ...b] = arr;
console.log(a);
console.log([...b]);

const rever = [...b];
console.debug("🚀 ~ file: higherOrder.js:18 ~ rever:", rever);

rever.reverse();

console.debug("🚀 ~ file: higherOrder.js:18 ~ rever:", rever);
const [d, f, v] = rever;
console.log(d, f, v);
