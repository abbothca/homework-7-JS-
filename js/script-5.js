"use strict";


//Функція сортування
function sortArray(notSortedArray) {
    

    if (notSortedArray) {                       //якщо масив не null / undefined
        let array = notSortedArray.slice();     //робимо йог копію

        array.forEach( (value, index, array) => {   //проганяємо по всіх елементах
        
            let indexOfCurrentElement = index;      //запам'ятовуємо індекс несортованого елемента
            let currentValue = value;               //запам'ятовуємо несортований елемент
            while (indexOfCurrentElement > 0 && array[indexOfCurrentElement - 1] > value) { //порівнюватимемо з усіма сортованими
                
                array[indexOfCurrentElement] = array[indexOfCurrentElement - 1];            //якщо він менший за поточний елемент з відсортованої частини - зміщуватимемо посортовані вправо 
                indexOfCurrentElement--;                                                    //зменшуємо індекс елемента з яким порівнюватимемо в відсортованій множині
            }
            array[indexOfCurrentElement] = currentValue;                                    //коли добралися початку масиву або лівіше вже менші елементи - запишемо значення елемента який порівнювали
        });

        return array;                               //повернемо відсортований масив
    };

    return [];                                       //повернемо порожній масив, якщо на входу було null/undefined
};

let numbers = [2, 7, -2, 0, 5, 10, -6, 1];
let arrayFromExample = [1, 12, 10, 50, 5];
let arrayOfTestedValue = [null, undefined, [], numbers, arrayFromExample];

arrayOfTestedValue.forEach(element => 
    {
        console.log("Start array: ",  element );
        console.log("Sorted array: ",  sortArray(element) );
        console.log("________________")
    });