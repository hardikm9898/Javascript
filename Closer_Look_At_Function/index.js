const greeet = (greeting) => (name) => {
  console.log(`${greeting} ${name}`);
};
const pre = greeet("hey");

pre("hardik");

const airway = {
  name: "luftanja",
  icode: "GJ",
  booking: [],
  book(flightNo, name) {
    console.log(
      `airport ${this.name}  flight no.${this.icode}${flightNo} seat booked by the ${name}  `
    );
    this.booking.push(`name:${name},flight:${this.icode}${flightNo}`);
  },
};

airway.book(59, "hardik");
airway.book(35, "bhagvanji");

const airway2 = {
  name: "jimas",
  icode: "GJ13",
  booking: [],
};
const { book: book2 } = airway;

book2.call(airway2, 25, "jay");
book2.call(airway2, 35, "bhagvanji");

console.log(airway);
console.log(airway2);

const textRate = (rate) => (value) => value + value * rate;
console.debug("🚀 ~ file: index.js:37 ~ textRate:", textRate);

const rate = textRate(0.2);
console.debug("🚀 ~ file: index.js:40 ~ rate:", rate);
const value = rate(200);
console.debug("🚀 ~ file: index.js:42 ~ value:", value);

const addRate = textRate.bind(null)(0.2);

console.debug("🚀 ~ file: index.js:46 ~ addRate:", addRate(200));

// poll generator

const poll = {
  registerNewAnswer() {
    const pollQuestion = Number(prompt(`${poll.question} ${poll.option}`));

    console.debug(
      "🚀 ~ file: index.js:52 ~ registerNewAnswer ~ pollQuestion:",
      typeof pollQuestion
    );
    console.log(Number.isInteger(pollQuestion));

    if (typeof pollQuestion === "number" && pollQuestion < this.answer.length) {
      this.answer[pollQuestion] += 1;
      console.log(this.answer);
    }
  },
  displayResult() {
    const result = document.getElementById("result");

    result.innerHTML = this.answer;
  },

  question: "what is your favouritr programming",
  option: ["0:Javascript", "1:Python", "2:Rust", "3:c++"],
  answer: new Array(4).fill(0),
};

const pollButton = document.getElementById("demo");

pollButton.addEventListener("click", poll.registerNewAnswer.bind(poll));

const displayResul = document.getElementById("displayResult");

displayResul.addEventListener("click", poll.displayResult.bind(poll));

// poll.displayResult.call({ answer: });

// closer practice

let f;

function meet() {
  const m = 10;
  f = function () {
    console.log(m);
  };
}
function jay() {
  const l = 20;
  f = () => {
    console.log(l);
  };
}

meet();
f();
jay();
f();

// challange#2

(function () {
  const header = document.querySelector("h1");
  header.style.color = "red";
  document.querySelector("body").addEventListener("click", () => {
    header.style.color = "blue";
  });
})();
