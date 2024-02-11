"use strict";


//Функція сортування
function sortArray(notSortedArray) {

    if (notSortedArray) {                            //якщо не null/undefined

        let sortingArray = notSortedArray.slice();   //роблю копію, щоб не вносити зміни у вхідний масив
        
        sortingArray.sort(function (a, b) {          //запускаю сортування
            return a - b;
        });

        return sortingArray;                         //повертаємо сортований масив

    };

    return [];                                       //якщо був null/undefined - повертаємо порожній масив
};

let numbers = [2, 7, -2, 0, 5, 10, -6, 1];
let arrayFromExample = [1, 12, 10, 50, 5];
let arrayOfTestedValue = [null, undefined, [], numbers, arrayFromExample];

arrayOfTestedValue.forEach(element => {
    console.log("Start array: ", element);
    console.log("Sorted array: ", sortArray(element));
    console.log("________________")
});