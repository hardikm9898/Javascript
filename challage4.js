// challange#4
// testcase#1
let bill = 256

// testcase#2
bill=200

const tip15Percent = (bill * 15) / 100

const tip20Percent = (bill * 20) / 100

const tip = bill >= 50 && bill <= 300 ? tip15Percent : tip20Percent

console.log(`you give the ${tip} rupees of tip to the waiter`)




