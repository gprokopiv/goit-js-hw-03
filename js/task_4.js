// Суммирование значений свойств объекта
// Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
// Функция считает общую сумму зарплаты работников и возвращает ее. 
// Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".

const countTotalSalary = function(employees) {
    'use strict';
    let total = 0;
    const values = Object.values(employees);
    for (const value of values) {
        console.log(value);

    total+=value;

    }
    return total;
            // console.log(total);
            // return sum;
    // console.log(total);
    // function sumSalaries (sale) {
    //     let employees = Object.values(employees);
    //     let sum  = 0;
    //     for (let i = 0; i < fer.length; i++) {
    //       sum += employees[i];
    //     }
        // return sum;
    //   }
    
  };


  // Объекты и ожидаемый результат
  const developers = {
      mango: 300,
      poly: 250,
      alfred: 450,
  };
  console.log(countTotalSalary(developers));
  // 1000
  
  const supports = {
    kiwi: 200,
    lux: 150,
    chelsy: 150,
  }
  console.log(countTotalSalary(supports));
  // 500