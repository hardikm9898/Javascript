
// codding challage #1

// testcase#2 

// let johnsMass = 78
// let marksMass = 92
// let johnsHieght = 1.69
// let marksHieght = 1.95


// Another for testcase#2 

// let johnsMass = 85
// let marksMass = 95
// let johnsHieght = 2.1
// let marksHieght = 1.88



// const BMIjohns = johnsMass / (johnsHieght * johnsHieght)
// const BMImarks = marksMass / (marksHieght * marksHieght)

// console.log("johns bmi" + BMIjohns)
// console.log("marks " + BMImarks);

// const markHigherBMi = (BMIjohns < BMImarks)

// const johnHigherBMI = (BMIjohns > BMImarks)


// console.log("marks BMI is higher than the johns" + " " + markHigherBMi)
// console.log("johns BMI is higher than the marks" + " " + johnHigherBMI)


// codding challage #2

// testcase#2 

// let johnsMass = 78
// let marksMass = 92
// let johnsHieght = 1.69
// let marksHieght = 1.95


// Another for testcase#2 

// let johnsMass = 85
// let marksMass = 95
// let johnsHieght = 2.1
// let marksHieght = 1.88



// const BMIjohns = johnsMass / (johnsHieght * johnsHieght)
// const BMImarks = marksMass / (marksHieght * marksHieght)

// if (BMIjohns > BMImarks) {
//     console.log(`johns ${BMIjohns} bli is higher than the marks bmi ${BMImarks}`)
// }
// else {
//     console.log(`marks bmi ${BMImarks} is higher than the johns bmi ${BMIjohns}`);
// }


// challange  #3

// test case #1

// const dolphinsAvrageScore = (96 + 108 + 89) / 3
// const koalasAvrageScore = (88 + 91 + 110) / 3


// testcase#2

// const dolphinsAvrageScore = (97 + 112 + 101) / 3
// const koalasAvrageScore = (189 + 95 + 123) / 3

// testcase#3
const koalasAvrageScore = (88 + 95 + 110) / 3
const dolphinsAvrageScore = (97 + 112 + 101) / 3


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