
// codding challage #1

// testcase#2 

let johnsMass = 78
let marksMass = 92
let johnsHieght = 1.69
let marksHieght = 1.95


// Another for testcase#2 

 johnsMass = 85
 marksMass = 95
 johnsHieght = 2.1
 marksHieght = 1.88



const johnsBmi = johnsMass / (johnsHieght * johnsHieght)
const marksBmi = marksMass / (marksHieght * marksHieght)

console.log(`johns bmi" ${johnsBmi}`)
console.log(`marks ${marksBmi}`);

const markHigherBMi = (johnsBmi < marksBmi)

const johnHigherBMI = (johnsBmi > marksBmi)


console.log(`marks BMI is higher than the johns ${markHigherBMi}`)
console.log(`johns BMI is higher than the marks ${johnHigherBMI}`)


// codding challage #2

// testcase#2 

let jaysMass = 78
let bhagvanjiMass = 92
let jaysHieght = 1.69
let bhagvanjiHieght = 1.95


// Another for testcase#2 

 jaysMass = 85
 bhagvanjiMass = 95
 jaysHieght = 2.1
 bhagvanjiHieght = 1.88



const BMIjohns = jaysMass / (jaysHieght * jaysHieght)
const BMImarks = bhagvanjiMass / (bhagvanjiHieght * bhagvanjiHieght)

if (BMIjohns > BMImarks) {
    console.log(`johns ${BMIjohns} bli is higher than the marks bmi ${BMImarks}`)
}
else {
    console.log(`marks bmi ${BMImarks} is higher than the johns bmi ${BMIjohns}`);
}


// challange  #3

// test case #1

let dolphinsAvrageScore = (96 + 108 + 89) / 3
let koalasAvrageScore = (88 + 91 + 110) / 3


// testcase#2

 dolphinsAvrageScore = (97 + 112 + 101) / 3
 koalasAvrageScore = (189 + 95 + 123) / 3

// testcase#3
 koalasAvrageScore = (88 + 95 + 110) / 3
 dolphinsAvrageScore = (97 + 112 + 101) / 3


if ((dolphinsAvrageScore > koalasAvrageScore) && (dolphinsAvrageScore > 100)) {
    console.log("the winner team is dolphin");
}
else if ((dolphinsAvrageScore === koalasAvrageScore) && (dolphinsAvrageScore > 100)) {
    console.log("match is draw")
}


else if ((koalasAvrageScore > dolphinsAvrageScore) && (koalasAvrageScore > 100)) {
    console.log("the winner team is koalhas");
}
else {
    console.log("both team is loose their game");
}