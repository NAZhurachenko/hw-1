//Задание 1
function min(a, b) {
    if (a <= b) {
        console.log(a);
    }
    else {
        console.log(b);
    }
}
min(8, 4);
min(6, 6);
min(4, 8);


//Задание 2
function evenNumber(n) {
    if (n % 2 == 0) {
        console.log('Число чётное');
    }
    else {
        console.log('Число нечётное');
    }
}
evenNumber(2);
evenNumber(5);


//Задание 3
//3.1.
function square1(t) {
    console.log(t ** 2);
}
square1(5);
square1(6);
//3.2.
function square2(f) {
    return f ** 2;
}
let result = square2(3);
console.log(`Квадрат числа равен ${result}`);


//Задание 4
function sayHello(answer) {
    answer = prompt('Сколько вам лет?');
    if (answer < 0) {
        console.log('Вы ввели неправильное значение');
    }
    if (answer >= 0 && answer <= 12) {
        console.log('Привет, друг!');
    }
    if (answer > 12) {
        console.log('Добро пожаловать!');
    }
}
sayHello();


//Задание 5
function check(a, b) {
    if (isNaN(a) || isNaN(b))
        console.log('Одно или оба значения не являются числом');
    else {
        console.log(a * b);
    }
}
check(6, 7);
check(NaN, 1);
check(NaN, NaN);


//Задание 6
function cube(n) {
    n = prompt('Введите число');
    if (isNaN(n))
        console.log('Переданный параметр не является числом');
    else {
        console.log(`${n} в кубе равняется ${n ** 3}`);
    }
}
cube();


//Задание 7
function getArea(r) {
    return r ** 2 * Math.PI;
}
function getPerimeter(r) {
    return r * 2 * Math.PI;
}
let result1 = getArea(5);
let result2 = getPerimeter(5);
console.log(`Площадь круга равна ${result1}`);
console.log(`Периметр окружности равен ${result2}`);


//Задание 8
function season(month) {
    month = prompt('Введите номер месяца');
    if (month >= 3 && month <= 5) {
        console.log('Весна');
    }
    if (month >= 6 && month <= 8) {
        console.log('Лето');
    }
    if (month >= 9 && month <= 11) {
        console.log('Осень');
    }
    if (month >= 1 && month <= 2 || month == 12) {
        console.log('Зима');
    }
    if (month > 12 || month < 1 || isNaN(month)) {
        console.log('Ошибка');
    }
}
season();