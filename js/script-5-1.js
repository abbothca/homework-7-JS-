"use strict";

//винесла додаткову функцію, яка шукатиме індекс найменшого елемента масиву
function indexOfMinNumberOfArray(array) {
    let idexOfMinElement = 0;                       //нехай це 0-ий елемент

    array.forEach((element, index, array) => {      //тоді для всіх елементів масиву 

        if (array[idexOfMinElement] > element) {    //якщо новий елемент иявиться меншим 
            idexOfMinElement = index;               //запам'ятаю його індекс
        };

    });

    return idexOfMinElement;                        //повернемо індекс найменшого елемента
};


//Функція сортування
function sortArray(array) {
    let sortedArray = [];                           //порожній масив, який міститиме відсортовані значення

    if (array) {                                    //якщо масив передано аргументом (відсіються null i undefined)

        let sortingArray = array.slice();           //робимо копію вхідного масиву, бо будемо його змінювати

        while (sortingArray.length) {               //поки в вхідному масиві з невідсортованими значеннями є хоч 1 елемент
                                                    //запам'ятовуємо його індекс
            let indexOfMinElement = indexOfMinNumberOfArray(sortingArray); 
                                                    //додаємо цей елемент в кінець відсортованого списку
            sortedArray.push(sortingArray[indexOfMinElement]);
                                                    //видаляємо цей елемент з списку несортованих значень
            sortingArray.splice(indexOfMinElement, 1);
        }

    }

    return sortedArray;
};

const numbers = [2, 7, -2, 0, 5, 10, -6, 1];
const arrayFromExample = [1, 12, 10, 50, 5];
const arrayOfTestedValue = [null, undefined, numbers, arrayFromExample];

arrayOfTestedValue.forEach(element => console.log("sortArray( ", element, " ) =", sortArray(element)))

// console.log(sortArray([1, 12, 10, 50, 5])); // поверне [1,5,10,12,50]
// console.log(sortArray(numbers)); // поверне []
// console.log(sortArray(null)); // поверне []
// console.log(sortArray(undefined)); // поверне []