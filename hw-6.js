//Задание 1
const num = [1, 5, 4, 10, 0, 3];
for (let i = 0; num.length > 1; i++) {
    console.log(num[i]);
    if (num[i] == 10)
        break;
}


//Задание 2
const numb = [1, 5, 4, 10, 0, 3];
let result = numb.indexOf(4);
console.log(result);


//Задание 3
const number = [1, 3, 5, 10, 20];
let line = number.join(' ');
console.log(line);


//Задание 4
const arr = [];
for (let i = 0; i < 3; i++) {
    arr.push([]);
    for (let j = 0; j < 3; j++) {
        arr[i][j] = 1;
    }
}
console.log(arr);


//Задание 5
const plus = [1, 1, 1];
let addition = plus.concat([2, 2, 2]);
console.log(addition.join(', '));


//Задание 6
const numbers = [9, 8, 7, 'a', 6, 5];
let sorting = numbers.sort();
let finish = sorting.filter(el => isNaN(el) == false);
console.log(finish);


//Задание 7
const variants = [9, 8, 7, 6, 5];
let answer = Number(prompt('Угадайте число'));
let search = variants.includes(answer);
(search == true) ? alert('Угадал') : alert('Не угадал');


//Задание 8
const str = 'abcdef';
let separately = str.split('');
let back = separately.reverse();
console.log(back.join(''));


//Задание 9
const two = [[1, 2, 3,], [4, 5, 6]];
let one = two[0].concat(two[1]);
console.log(one);


//Задание 10
const generateArray = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const random = generateArray(5, (1, 10));
//Усложняю, или нам действительно нужно пользоваться такой функцией? Я её нагуглила, признаюсь, но не поняла, как по-другому заполнить массив произвольными числами...
console.log(random);
for (let x = 0; x < random.length; x++) {
    let sum = random.reduce((intermediate, value) => intermediate + value);
    console.log(sum);
}


//Задание 11
const first = prompt('Задайте массив целых чисел');
let array = first.split(', ');
let second = array.map(el => (el ** 2));
console.log(second);


//Задание 12
const letter = prompt('Задайте массив строк');
let word = letter.split(', ');
let quantity = word.map(el => (el.length));
console.log(quantity);


//Задание 13
const both = []
function filterPositive(both) {
    let negative = [];
    for (let y = 0; y < both.length; y++) {
        if (both[y] < 0)
            negative.push(both[y]);
    }
    return negative;
}
console.log(filterPositive([-1, 0, 5, -10, 56]));
console.log(filterPositive([-25, 25, 0, -1000, -2]));


//Задание 14
const different = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const prep = different(10, 10);
console.log(prep);
function filterEven(prep) {
    let even = [];
    for (let z = 0; z < prep.length; z++) {
        if (prep[z] % 2 === 0)
            even.push([prep[z]]);
    }
    return even;
}
console.log(filterEven(prep));
//Что-то корявое, но результат всё-таки есть. Не могу разобраться, почему элементы отдельными массивами вышли


//Задание 15
const terms = (length, max) => (
    [...new Array(length)]
        .map(() => Math.round(Math.random() * max))
);
const randomTerms = terms(6, (1, 10));
console.log(randomTerms);
for (let s = 0; s < randomTerms.length; s++) {
    let sumTerms = randomTerms.reduce((intermediate, value) => intermediate + value);
    let average = sumTerms / randomTerms.length;
    console.log(average);
}