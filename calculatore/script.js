const button = document.querySelectorAll(".btn");
console.log(button);
const display = document.querySelector(".display");
const trigno = document.querySelectorAll(".trigno");
const display2 = document.querySelector(".display2");
const memory = document.querySelectorAll(".memory");

const operator = ["+", "-", "*", "/"];

console.log(memory[0].textContent);

console.log(trigno[0].textContent === "sin");

// calculation function
const calculatFactorial = (n) => {
  let answer = 1;
  if (n > 1) {
    for (let i = n; i >= 1; i -= 1) {
      answer *= i;
    }
  } else if (n === 0 || n === 1) {
    answer = 1;
  } else {
    return "please pass posotive Number in factorial";
  }
  return answer;
};
console.debug(
  "🚀 ~ file: script.js:16 ~ calculatFactorial ~ calculatFactorial:",
  calculatFactorial(1)
);

let memoryArray = [];
// select button

button.forEach((btn) =>
  btn.addEventListener("click", () => {
    const buttonValue = btn.value;

    console.log(typeof btn.value);

    let hello = display.innerHTML;

    console.log(hello);
    const factorialIndex = hello.indexOf("!");
    const rightIndex = hello.slice(0, factorialIndex + 1);
    switch (buttonValue) {
      case "=":
        hello = hello.replaceAll("sin(", "Math.sin(Math.PI/180*");
        hello = hello.replaceAll("cos(", "Math.cos(Math.PI/180*");
        hello = hello.replaceAll("tan(", "Math.tan(Math.PI/180*");
        hello = hello.replaceAll("sin<sup>-1</sup>", "Math.asin");
        hello = hello.replaceAll("cos<sup>-1</sup>", "Math.acos");
        hello = hello.replaceAll("tan<sup>-1</sup>", "Math.atan");
        hello = hello.replaceAll("<sup>-1</sup>", "**-1");
        hello = hello.replaceAll("log<sub>10</sub>", "Math.log10");
        hello = hello.replaceAll("log<sub>e</sub>", "Math.log");
        hello = hello.replaceAll("e", "Math.E");
        hello = hello.replaceAll("^", "**");
        hello = hello.replaceAll("fact(", `calculatFactorial(`);
        // hello = hello.replaceAll(`!`,`${calculatFactorial(n)}`)

        hello = hello.replaceAll("π", `Math.PI`);

        hello = hello.replaceAll("√", "Math.sqrt");

        for (let i = rightIndex.length - 1; i >= 0; i -= 1) {
          if (operator.includes(rightIndex.charAt(i))) {
            const indexLeft = rightIndex.indexOf(rightIndex.charAt(i));
            const answerValue = rightIndex.slice(
              indexLeft + 1,
              rightIndex.length + 1
            );
            console.debug("🚀 ~ file: test.js:28 ~ n:", answerValue);
            const value = rightIndex.slice(
              indexLeft + 1,
              rightIndex.length - 1
            );
            console.debug(
              "🚀 ~ file: script.js:81 ~ btn.addEventListener ~ value:",
              value
            );
            console.debug("🚀 ~ file: test.js:29 ~ value:", value);
            hello = hello.replaceAll(
              answerValue,
              `${calculatFactorial(value)}`
            );

            console.debug(
              "🚀 ~ file: script.js:86 ~ btn.addEventListener ~ hello:",
              hello
            );
          }
        }

        console.log(hello);

        display2.innerHTML = display.innerHTML;
        try {
          display.textContent = `=${this.eval(hello).toFixed(2)}`;
        } catch (error) {
          console.debug(
            "🚀 ~ file: script.js:100 ~ btn.addEventListener ~ error:",
            error
          );
          display.textContent = "error";
        }

        break;

      case "backspace":
        display.textContent = display.textContent.slice(
          0,
          display.textContent.length - 1
        );

        break;

      case "AC":
        display2.textContent = "";
        display.innerHTML = "";
        break;
      case "2nd":
        if (trigno[0].textContent === "sin") {
          const converArray = [
            "sin<sup>-1</sup>",
            "cos<sup>-1</sup>",
            "tan<sup>-1</sup>",
          ];
          const signValue = [
            "sin<sup>-1</sup>(",
            "cos<sup>-1</sup>(",
            "tan<sup>-1</sup>(",
          ];
          for (let index = 0; index < trigno.length; index += 1) {
            trigno[index].innerHTML = converArray[index];
            trigno[index].value = signValue[index];
          }
        } else {
          const converArray = ["sin", "cos", "tan"];
          const signValue = ["sin(", "cos(", "tan("];
          for (let index = 0; index < trigno.length; index += 1) {
            trigno[index].textContent = converArray[index];
            trigno[index].value = signValue[index];
          }
        }
        break;
      case "m":
        if (memory[0].textContent === "xy") {
          const converArray = ["MS", "MC", "MR", "M+", "M-"];
          for (let index = 0; index < memory.length; index += 1) {
            memory[index].textContent = converArray[index];
            memory[index].value = converArray[index];
          }
        } else {
          const converArray = ["x<sup>y</sup>", "√x", "x!", "1/x", "π"];
          const signValue = ["^", "√(", "fact(", "<sup>-1</sup>", "π"];
          for (let index = 0; index < memory.length; index += 1) {
            memory[index].innerHTML = converArray[index];
            memory[index].value = signValue[index];
          }
        }

        break;
      case "MR":
        {
          const recallMemory = memoryArray.reduce((acc, x) => {
            let memoryHandel = acc;
            memoryHandel += Number(x);
            return memoryHandel;
          }, 0);
          if (
            display.textContent.includes(operator) ||
            display.textContent.includes("=")
          ) {
            if (display.textContent.indexOf("=") !== -1) {
              const NotPresentEqual = display.textContent.slice(
                1,
                display.textContent.length - 1
              );
              display.textContent = `${NotPresentEqual}+${recallMemory}`;
            } else {
              display.textContent += recallMemory;
            }
          } else {
            display.textContent += `${recallMemory}`;
          }
        }
        break;
      case "M+":
        if (display.textContent.includes("=")) {
          memoryArray.push(
            this.eval(
              `+${display.textContent.slice(1, display.textContent.length - 1)}`
            )
          );
        } else {
          memoryArray.push(this.eval(display.textContent));
        }

        break;
      case "M-":
        if (display.textContent.includes("=")) {
          memoryArray.push(
            `-${display.textContent.slice(1, display.textContent.length - 1)}`
          );
        } else {
          memoryArray.push(this.eval(display.textContent));
        }

        break;

      case "MC":
        memoryArray = [];

        break;
      default:
        if (display.textContent.includes("=")) {
          if (operator.includes(buttonValue)) {
            display.textContent = display.textContent.replaceAll("=", "");
            display2.innerHTML = display.textContent;
          } else {
            display2.innerHTML = display.textContent.replace("=", "");
            display.textContent = "";
          }
        }
        display.innerHTML += btn.value;
    }
    // console.log( display.textContent.slice(1,display.textContent.length-1))
    console.log(display.innerText);
  })
);
