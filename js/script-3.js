"use strict";

const userNames = ['Петро', 'Емма', 'Юстин', 'Ілля', 'Марта', 'Яна', 'Василь', 'Антон', 'Олена'];
let filteredNamesByForEach =[];
let arrayOfLetters = ["А", "О", "У", "І", "Е", "Ї", "Є", "Я", "Ю"]; // "И" - не враховуємо, бо з цієї букви слова (імена) не починаються

// ------- .forEach() --------
console.log("----- V1 - .forEach() ----- ");
userNames.forEach((name) => {                                   //для кожного елемента масиву
    if (arrayOfLetters.includes(name.toUpperCase()[0])) {       //Якщо перша буква імені-елемента масиву входить в масив голосних букв
        filteredNamesByForEach.push(name);                      //додаємо цей елемент в масив відфільтвованих значень
    }
 } );

 console.log("userNames = ", userNames); 
 console.log("filteredNamesByForEach = ", filteredNamesByForEach); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']
 console.log("----- V2 - .filter () ----- ");
//-------- .filter () -------
let filteredNamesByFilter =[];

//у функцію фільтрації передаємо умову  - чи входить перша буква імені в масив голосних літер - повертається новий масив відтфільтрованих значень
filteredNamesByFilter = userNames.filter((name) => arrayOfLetters.includes(name.toUpperCase()[0]));

console.log("userNames = ", userNames); 
console.log("filteredNamesByFilter = ", filteredNamesByFilter); // ['Емма', 'Юстин', 'Ілля', 'Яна', 'Антон', 'Олена']