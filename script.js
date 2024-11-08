const add = (a, b) => a + b;
console.log(add(14, 19));


console.log(`task 2`);


const diff = (a, b) => {
    return a - b
}
console.log(diff(19, 14));


console.log(`task 3`);


const iseven = (num) => {
    if (num % 2 === 0)
        return "luwia"
    else return "kentia"
}
console.log(iseven(12));
/* marto true an false*/
const isevenn = (num) => num % 2 === 0
console.log(isevenn(90));


console.log(`task 4`);


function multip(callback) {
    const numb = 11;
    const numbb = 2;
    return callback(numb, numbb);
}
function mult(numb, numbb) {
    return numb * numbb
}
console.log(multip(mult));


console.log(`task 5`);


/*const positive = (num) => {
    if (num > 0)
        return `is positive`
    else return `is negative`
}
console.log(positive(-3439));
true || false > */
const posittive = (n) => n > 0;
console.log(posittive(49));


console.log(`task 6`);


const doubl = function (numone) {
    return numone * 2
}
console.log(doubl(22));


console.log(`task 7`);


function doub(callback) {
    const num = 22;
    return callback(num);
}
function dou(num) {
    return num * 2
}
console.log(doub(dou));


console.log(`task 8`);


const three = (num) => num % 3 != 0;
console.log(three(12));
/*roca nashti aqvs trues mashin gamoitans*/


console.log(`task 9`);


/*const isluwi = (num) => {
    if (num%2==0)
        return `is luwi`
    else return `is kenti`
}
console.log(isluwi(-19));
true an false*/
const luw = (num) => num % 2 == 0;
console.log(luw(19));


console.log(`task 10`);


const cube = (m) => m * m * m
console.log(cube(7));


console.log(`task 11`);


function namr(callback) {
    const mamr1 = 22;
    const mamr2 = 4;
    return callback(mamr1, mamr2);
}
function nam(mamr1, mamr2) {
    return mamr1 * mamr2
}
console.log(namr(nam));


console.log(`task 12`);


const isgreaterthan0 = (num) => num >= 0
console.log(isgreaterthan0(500));


console.log(`task 13`);


const half = function (num) {
    return num / 2
}
console.log(half(22));


console.log(`task 14`);


function summ(callback) {
    const num = 22;
    const numb = 33;
    return callback(num, numb);
}
function sum(num, numb) {
    return num + numb
}
console.log(summ(sum));


console.log(`task 15`);


const last = (num) => num * num
console.log(last(22));