"use strict";

let a;

if(a == '1') {
    console.log('Верно');
}
else
{
    console.log('Не верно');
}

let item;

if(!item){
    console.log('Верно');
}
else{
    console.log('Не верно');
}

!item ? console.log('Верно'): console.log('Не верно');

if( a > 0 && a < 4 ){
    console.log('Верно');
}
else{
    console.log('Не верно');
}

let b;

if( (3 < a && a < 12 ||  7 <= b && b < 15) ){
    console.log('Верно');
}
else{
    console.log('Не верно');
}

let month = prompt('Месяц?');

if( month <= 3 ){
    console.log('Весна');
}
else if( month <= 6 ){
    console.log('Лето');
}
else if( month <= 9 ){
    console.log('Осень');
}
else if( month <= 12 ){
    console.log('Зима');
}

for ( let x = 2; x <= 100 ; x +=2 ){
    console.log(x);
}
