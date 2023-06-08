let i = 1;
while (i <= 2) { console.log('Привет'); i++; }

let a = 1;
while (a <= 5) { console.log(a); a++; }

let b = 7;
do { console.log(b); b++; } while (b <= 22);

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
};
for (let name in obj) {
    console.log(`${name} — зарплата ${obj[name]}`);
}


let n = 1000;
num = 0;
while (n > 50) { n = n / 2; num++; }
{
    console.log(`Получится число ${n}. Количество итераций — ${num}`);
}

let day = new Date;
console.log(day);

let fr = Number(prompt('Введите номер первой пятницы месяца'))
do { console.log(`Сегодня пятница, ${fr}-е число. Необходимо подготовить отчет.`); fr = fr + 7; } while (fr <= 31);