// Суммирование значений свойства из массива объектов
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//  которая получает массив объектов и имя продукта (значение свойства name). 
//  Возвращает общую стоимость продукта (цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.

// calculateTotalPrice(products, 'Радар'));
// 9080

// calculateTotalPrice(products, 'Сканер')); // 10200

// calculateTotalPrice(products, 'Захват')); // 2400

// calculateTotalPrice(products, 'Дроид')); // 2800


function calculateTotalPrice (array, prop) {
    'use strict';
    // Write code under this line
      'use strict';
     let totalPrice = 0;
     let name = '';
                   
  
     for (const product of array) {
                if(prop===product.name) {
              totalPrice+= product.price * product.quantity;
      
          }
               
  }
  return totalPrice;
  }

  
  

// const name = entry[0];
            // const totalPrice = entry[1];
            // totalPrice += price * quantity;
            // console.log(`${name}: ${totalPrice}`);
        
        //    for (let price of Object.values(product)) {
        //     console.log(price);
        //     totalPrice += price;
        // }

//        for (const key in product) {
//         if (key === prop.price && key === prop.quantity){
//             totalPrice += price * quantity;
//             return totalPrice;
//         }
     
    //    for (const entry of entries) {
    //     const key = entry[0];
    //     const value = entry[1];
      
    //     console.log(`${key}: ${value}`);
    //   }
// if (prop===product.price) {
//     // console.log(product.price);
//     totalPrice +=price * quantity;
//     return totalPrice;

//         }
   

       
  // Объекты и ожидаемый результат
  const products = [
      { name: 'Радар', price: 1300, quantity: 4 },
      { name: 'Радар', price: 1280, quantity: 2 },
      { name: 'Радар', price: 1320, quantity: 1 },
      { name: 'Сканер', price: 2700, quantity: 1 },
      { name: 'Сканер', price: 2500, quantity: 3 },
      { name: 'Дроид', price: 400, quantity: 7 },
      { name: 'Захват', price: 1200, quantity: 2 }
  ]; 
  
  console.log(calculateTotalPrice(products, 'Радар'));  
  // 9080
  
  console.log(calculateTotalPrice(products, 'Сканер')); 
  // 10200
  
  //console.log(calculateTotalPrice(products, 'Захват'));
  // 2400
  
  //console.log(calculateTotalPrice(products, 'Дроид')); 
  // 2800









