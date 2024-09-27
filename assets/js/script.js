// 1
'use strict'
let name = 'John';
let admin = name;
alert(admin);

// 2

let city = prompt('Введите название города в котором вы проживаете');

let year = prompt('Введите год образования вашего города');

let nasel = prompt('Введите количество населения вашего города');

let godi = 2024 - year;

alert(`Городу ${city} исполнилось ${godi} лет с момента его образования. Население - ${nasel} человек`);

// 3

let pi = 3.14;

let r = prompt('Введите радиус');

let pl = pi*(r*r);

alert(`Площадь круга равна ${pl}`);

// 4 

let first = prompt('Введите первое число');

let second = prompt('Введите второе число');


let firstint = Number(first);
let secondint = Number(second);

let one = firstint+secondint;
let two = first-second;
let three = first*second;
let four = first/second;

alert(`Сумма = ${one} , разность = ${two}, частное = ${four}, произведение = ${three}`);