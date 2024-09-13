/*Q1*/
let nickname = 'リョウ';
let age = 22;

let greetings = '私のニックネームは'+ nickname+'です。'+ '年齢は'+ age+'です。';

console.log(greetings)

/*Q2*/
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python', 'Go' ];

let language = '私の言語は'+ languages[0]+'です。'+'次は'+languages[3]+'を勉強したいです。';
// let language =`私の言語は${languages[0]}です。次は${languages[3]}を勉強したいです。`;
console.log(language)

/*Q3*/

let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

console.log(user.age)

/*Q4*/
let playerList = [
  {
    name: 'John',
    age: 26,
    favorites: ['Card Game', 'Basket Ball', 'Programming'],
  },
  {
    name: 'Bob',
    age: 33,
    favorites: ['Tinder', 'The Legend of Zelda'],
  },
  {
    name: 'Michael',
    age: 22,
    favorites: ['Football', 'Smash Bros.'],
  },
];


console.log(playerList[1].favorites[1])

/*Q5*/

console.log((playerList[0].age+playerList[1].age+playerList[2].age)/3)

let sum = 0

for (let i = 0; i < playerList.length; i++) {
  console.log(playerList[i].age)
  sum += playerList[i].age
}

console.log(sum/playerList.length)

/*Q6*/

function sayHello() {
  let hello = 'Hello';

console.log(hello)
};

sayHello();

let sayworld = function(){
  console.log('World');
};

sayworld();

/*Q7*/

user.birthday = '2000-09-27';

user.sayHello = function() {
  console.log('Hello!')
}

user.sayHello();

// console.log(user.sayHello);

/*Q8*/

let calc = {};

calc.add = function(x, y) {
  console.log(x + y);
};

calc.subtract = function(x, y) {
  console.log(x - y);
};

calc.multiply = function(x, y) {
  console.log(x * y);
};

calc.divide = function(x, y) {
  console.log(x / y);
};

calc.add(3, 4);
calc.subtract(15, 5);
calc.multiply(7, 7);
calc.divide(25, 5);

/*Q9*/
let nu ={}

nu.remainder = function (x,y) {
  return x % y;
}

console.log('5を3で割った余りは'+nu.remainder(5, 3)+'です。');

// 関数のみ

function remainder(x,y) {
  return x % y;
  }
  
  console.log('5を3で割った余りは'+remainder(5,3)+'です。');

/*Q10*/

//console.logがスコープ外にあり、let xを参照することができないため。

/*応用問題*/

/*Q1*/

let random = Math.floor( Math.random() * 10 );

console.log(random)

/*Q2*/

setTimeout(() => {console.log('Hello World!')}, 3000);

// setTimeout();

/*Q3*/

let num = 0;

if (num > 0) {
  console.log('num is greater than 0');
} else if (num < 0) {
  console.log('num is less than 0');
} else {
  console.log('num is 0');
}

/*Q4*/
let numbers = [];

for (let i = 0; i < 100; i++) {
  numbers.push(i);
}

console.log(numbers)

/*Q5*/

let mixed = [4, '2', 5, '8', '9', 0, 1];

for (let i = 0; i < mixed.length; i++) {
    let element = mixed[i];
    
    if (typeof element === 'number') {
        if (element % 2 === 0) {
            console.log('even');
        } else {
            console.log('odd');
        }
    } else {
        console.log('not number');
    }
}