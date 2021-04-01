//створити функцію яка приймає масив та виводить його
//створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попередню функцію.

// let arr = [];
// function createRandomArray() {
//     for (let i = 0; i < 8; i++) {
//         arr.push(Math.floor(Math.random()*100))
//         
//     }
// }
// 
// function showArr(arr) {
//     createRandomArray();
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }
// 
// showArr(arr);


// створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
// створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function showMin(a, b, c) {
//     if (a < b && a < c) {
//         console.log(a);
//     } else if (b < a && b < c) {
//         console.log(b);
//     } else{
//         console.log(c);
//     }
// }
// 
// showMin(12, 3, 113);
// 
// function showMax(a, b, c) {
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {
//         console.log(b);
//     } else{
//         console.log(c);
//     }
// }
// 
// showMax(12, 3, 113);

// створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його.

// let arr = [1,2,3,4,5,234, 4,214,1 ,2];
// 
// function sumOfArrElems(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]; 
//     }
//     return result;
// }
// 
// console.log(sumOfArrElems(arr));

// створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// let arr = [1, 2, 3, 4, 5, 234, 4, 214, 1 ,2];
// 
// function sumOfArrElems(arr) {
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         result += arr[i]; 
//     }
//     result = result / arr.length;
//     return result;
// }
// 
// console.log(sumOfArrElems(arr));

// Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів

// let arr = [{name: 'Dima', age: 13}, {model: 'Camry', specification: '3.5'}];
// let newArr = [];
// function returnKeys(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(Object.keys(arr[i])) 
//     }
//     return newArr.flat();
// }
// 
// console.log(returnKeys(arr));

// створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
// function sumOfArrIterators(arr, arr2) {
//     let resultArr = []
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr2.length; j++) {
//             if (i === j){
//               resultArr.push(arr[i]+arr2[j])  
//             }
//         }
//     }
//     console.log(resultArr);
// }
// 
// let arr = [1,2,3,4];
// let arr2 = [2,3,4,5];
// 
// sumOfArrIterators(arr, arr2);