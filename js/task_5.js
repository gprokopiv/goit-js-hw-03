// Оператор in и метод push
// Напиши функцию getAllPropValues(arr, prop), которая получает массив объектов и имя свойства.

// Функция возвращает массив значений определенного свойства prop из каждого объекта в массиве.

// Используй метод push для добавления значения в массив и оператор in для проверки наличия свойства в объекте.


function getAllPropValues (array, prop) {
    'use strict';

const newArray = [];

for (const product of array) {

    for (const key in product) {
       if (key === prop){
        newArray.push(product[key]);
       }
    }
   
}
 
return newArray;

 
};
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 },
  ]; 
  
  console.log(getAllPropValues(products, 'quantity'));
  // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']
  
  //console.log(getAllPropValues(products, 'quantity'));
  // [4, 2, 1, 1, 3, 7, 2]
  
  //console.log(getAllPropValues(products, 'category'));
  //  []

//   Ожидается что функция вернет массив ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват'] для объекта products и свойства 'name'
//   Ожидается что функция вернет массив [4, 2, 1, 1, 3, 7, 2] для объекта products и свойства 'quantity'
//   Ожидается использование метода 'push'
//   Код должен содержать функцию 'getAllPropValues'
//   Ожидается что при вызове 'getAllPropValues([])' вернется пустой массив
//   Ожидается что функция вернет массив [] для объекта products и свойства 'category'
//   Ожидается использование оператора 'in'
