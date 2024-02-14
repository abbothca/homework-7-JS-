"use strict";

const resultsArray = [1, 2, [3, [4]]];
let productOfArray;

//               створюємо новий "вирівняний" масив, для якого в акумулятор накопичуємо добуток; поч. значення 1
productOfArray = resultsArray.flat(Infinity).reduce( (accumulator, currentValue) => accumulator * currentValue,
1,
);


console.log("resultsArray = ", resultsArray); // Масив, який опрацьовували
console.log("productOfArray = ", productOfArray); // 24