"use strict";

let a;

if(a == '1' && a == 1){
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

if(month >= 12 && month > 0 && month <= 2  ){
    console.log('Зима');
}
else if(month >=3 && month <= 5 ){
    console.log('Весна');
}
else if(month >= 6 && month <= 8 ){
    console.log('Лето');
}
else if(month >= 9 && month <= 11 ){
    console.log('Осень');
}

for ( let x = 0; x <= 100 ; x +=2 ){
    console.log(x);
}
