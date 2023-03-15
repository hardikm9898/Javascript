// function practice



// const hello = function (m, n) {
//     console.log(m, n)
//     const mean = `my name is ${m} and my age is${n}`
//     return mean
// }

// hello(5, 21)

// console.log(hello(5, 21));

// const self = hello(5, 21)

// console.log(self)



// function codding challage #1

// test case#1







// const calcAverage = (a, b, c) => {

//     return (a + b + c) / 3
// }

// testcase#1


// const avgDolphins = calcAverage(44, 23, 71)
// const avgKoalas = calcAverage(85, 54, 41)  answer is=No one winnner yet try you luck next time 


// testcase#2


// const avgDolphins = calcAverage(85, 54, 41)
// const avgKoalas = calcAverage(23, 34, 27)

// console.log(avgDolphins)
// console.log(avgKoalas)


// function checkWinner() {

//     console.log(avgDolphins)

//     console.log(avgDolphins > (avgKoalas * 2))

//     if (avgDolphins > (avgKoalas * 2)) {
//         console.log(`dohlphin team is winner`)
//     }
//     else if (avgKoalas > (avgDolphins * 2)) {
//         console.log(`koalash team is winner`)
//     }
//     else {
//         console.log("No one winnner yet try you luck next time ")
//     }



// }

// console.log(checkWinner())


// codding challange #2 arrays 





// const tips = []
// const bills = [125, 55, 44]


// const calcTip = (billValue) => {



//     if (billValue >= 50 && billValue <= 300) {
//         const tip = (billValue * 15) / 100
//         tips.push(tip)
//     }
//     else {
//         const tip = (billValue * 20) / 100
//         tips.push(tip)
//     }

//     return tips
// }



// for (i = 0; i < bills.length; i++) {


//     const arrayOfTips = calcTip(bills[i])

//     // console.log(arrayOfTips)

//     if (arrayOfTips.length === bills.length) { console.log(bills, arrayOfTips) }
// }



// const jay = {
//     name: "jay mehta"
// }

// // jay = {
// //     name: "mehta"
// // }

// jay.name = "mehta"



// object practice


const hardik = {
    name: "hardik",
    lasname: "makwana",
    job: "trainee",
    work: "simform",
    friends: ["vishanu", "ajit", "annad"]
}

const me = hardik.work
console.log(me);
console.log(hardik['work']);


const pr = (prompt("what do you want from hardik name,lastname,job,work"))

// const ans = hardik[pr];

console.log(typeof pr)

const ans = hardik[pr];


console.log(ans)

const nmFreinds = hardik.friends.length;
console.log(nmFreinds)

console.log(`${hardik.name} have ${nmFreinds} his bestfiends name is ${hardik.friends[0]}`)