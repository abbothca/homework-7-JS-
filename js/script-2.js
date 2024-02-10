"use strict";

// приклад об'єкту
const priceData = {
    Apples: '23.4',
    BANANAS: '48',
    oRAngGEs: '48.7584',
};

function optimizer(data) {

    let arrayFromEntries = Object.entries(data).map(([fruit, price]) => {   //створюємо новий масив з пар значень ["ключ", "значення"] об'єкта і для нього запускаємо метод .map
      
        return [fruit.toLowerCase(), Number.parseFloat(price).toFixed(2)];   //який поверне новий масив пар значень, які вже будуть відредаговані до умов задачі
    
    });

    return Object.fromEntries(arrayFromEntries);                            //повертаємо з функції створений об'єкт на основі пертвореного масиву
};

console.log("priceData = ", priceData);
console.log("optimizer(priceData) = ", optimizer(priceData));