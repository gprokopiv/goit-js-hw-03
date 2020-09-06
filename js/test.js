
  const hotel = {
    name: 'Resort Hotel',
    stars: 5,
  };
  
  const capacity = '100';
console.log(hotel.name); 
console.log(hotel[capacity]); // Resort Hotel
  
//   hotel.name = 'Coastline Resort';
//   console.log(hotel.name); // Coastline Resort
//   console.log(hotel['name']); // Coastline Resort
  
//   hotel['name'] = 'Stardust Hotel';
//   console.log(hotel.name); // Stardust Hotel
//   console.log(hotel['name']); // Stardust Hotel
  
  


//   const hotel = {
//       name:'Resrt',
//       stars: 5,
//       capacity:100,
//   }
//   console.log(hotel.name);
//   console.log(hotel["stars"]);

//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
// //   hotel.address = '1, Beach ave.';
// //   hotel['manager'] = 'Chuck Norris';
  
// //   console.log(hotel.address); // 1, Beach ave.
// //   console.log(hotel.manager); // Chuck Norris

//   hotel.adress = "1konovalets";
//   console.log(hotel.adress);
//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
// //   delete hotel.name;
// //   console.log(hotel); // {stars: 5, capacity: 100}
  
//   delete hotel['stars'];
//   console.log(hotel); // {capacity: 100}
  
// delete hotel.name;
// console.log(hotel);

// let name = 'Resort Hotel';
// let stars = 5;

// // Эта ES5 запись избыточна
// const es5hotel = {
//   name: name,
//   stars: stars,
//   capacity: 100,
// };

// /*
//  * ES6 Shorthand properties
//  * Имя ключа будет аналогично имени переменной
//  * Значение свойства будет равно значению переменной
//  */
// const hotel = {
//   name,
//   stars,
//   capacity: 100,
// };

// console.log(hotel); // {name: "Resort Hotel", stars: 5, capacity: 100}


// const key = 'person';
// const object = {};

// object[key] = 'Mango';
// console.log(object); // {person: 'Mango'}

// const key ='person';
// const object = {};
// object[key] = "mango";
// console.log(object);

// const key = 'person';
// const getKey = function() {
//   return 'age';
// };

// Computed properties
// const object = {
//   [key]: 'Mango',
//   [getKey()]: 2,
// };

// console.log(object); // {person: 'Mango', age: 2}

// const key ='perso';
// const getKey = function(){
//     return 'age';
//     };

//     const object = {
//         [key]: 'MAngo',
//         [getKey()]: 2,
//     };
//     console.log(object);

    // const hotel = {
    //     name: 'Resort Hotel',
    //     stars: 5,
    //     capacity: 100,
    //     // Так метод объявлялся в ES5
    //     greetInES5: function() {
    //       console.log('Welcome!');
    //     },
    //     // Так метод объявляется в ES6
    //     greetInES6() {
    //       console.log('Welcome!');
    //     },
    //   };
      
    //   hotel.greetInEs5(); // Welcome!
    //   hotel.greetInEs6(); // Welcome!
      
// const hotel = {
//     name: 'resort',
//     start: 5,
//     general: function(){
//         console.log('Welcommmmme');
//     }
    
// }

// hotel.general();

//       const hotel = {
//         name: 'Resort Hotel',
//         stars: 5,
//         capacity: 100,
//       };
      
//       hotel.greet = function() {
//         console.log('Welcome!');
//       };
      
//       hotel.greet(); // Welcome!
      

// const hotel = {
//     name: "rre",
//     start: 5,
//     };
// hotel.general = function() {
//     console.log("welcome")
// };
// hotel.general();

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//     showName() {
//       console.log(this.name);
//     },
//     changeCapacity(value) {
//       this.capacity = value;
//     },
//   };
  
//   hotel.showName(); // Resort Hotel
  
//   hotel.changeCapacity(200);
//   console.log(hotel.capacity); // 200

  

//   const hotel = {
//       name: 'ree',
//       capacity: 100,
//       showName() {
//           console.log(this.name);
//       },
//       changeCapacity(value) {
//           this.capacity = value;
//       },
      
//   };


// hotel.showName()
// hotel.changeCapacity(200);
// console.log(hotel.capacity);
// for (key in object) {
//     // statements
//   }
// for (key in object) {

// }  
// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   // Перебор ключей объекта hotel
//   for (const key in hotel) {
//     console.log('Key: ', key);
//   }
  
//   const hotel = {
//       name: 'reee',
//       start: 6,
//   };

//   for (const key in hotel) {
//       console.log('key:', key)
//   }


//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   for (const key in hotel) {
//     console.log('Value: ', hotel[key]);
//   }
  
//   const hoetl = {
//       name: 'ree',
//       start:6,
//   };
//   for (const ky in hoetl) {
//       console.log('value:', hoetl[ky]);
//   }

//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
//   const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
//   const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]
  
// const hotel = {
// name: 'ree',
// start:6,
// };
// const keys = Objects.keys(hotel);
// const values = Objects.values(hotel);
// const entries = Objects.entries(hotel);


// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
  
//   for (const key of keys) {
//     console.log('Value: ', hotel[key]);
//   }
//   const hotel = {
// name: 're',
// stars: 9,
//   };
//   const keys = Object.keys(hotel);
//   for (const key of keys) {
//       console.log('value:', hotel[key]);
//   }



//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  

// //   const entries = Object.entries(hotel);
//   const entries = Object.entries(hotel);
  
  
  
// for (const entry of entries) {
//     const key = entry[0];
//     const value = entry[1];
//     console.log(`${key}: ${value}`);
// }
   
// const goods = {
//     apples: 6,
//     grapes: 3,
//     bread: 4,
//     cheese: 7,
//   };
  
//   const values = Object.values(goods); // [6, 3, 4, 7]
  
//   let total = 0;
  
//   for (const value of values) {
//     total += value;
//   }
  
//   console.log(total); // 20
  
// const goods = {
//     apples: 6,
//     grapes:7,
// };
// const values = Object.values(goods);
// let total =0;
// for (const value of values) {
//     total+=value;
// }
// console.log(total);

// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(temperatures); // NaN

// const temperatures = [8, 14, 12, 21, 17, 29];
// const max = Math.max(...temperatures);
// console.log(max);

// const temperatures = [18, 14, 12, 21, 17, 29];

// const min = Math.min(...temperatures); // 12

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const copyOfHouses = [...houses];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(copyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(houses === copyOfHouses); // false - разные ссылки


// const houses = ['Frey', 'Greyjoy', 'Stark'];
// const copyOfHouses = [...houses];

// console.log(houses);
// console.log(copyOfHouses);
// console.log(houses===copyOfHouses);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// const slicedCopyOfHouses = houses.slice();

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// console.log(slicedCopyOfHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']

// const houses = ['Arryn', 'Frey', 'Greyjoy'];
// const slicedCopyOfHouses = houses.slice(1);

// console.log(houses);
// console.log(slicedCopyOfHouses);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// // const completeHouses = [...houses, 'Targaryen'];

// // console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']
// // console.log(completeHouses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell','Targaryen']


// const completeHouses = [...houses, 'gggg']
// console.log(houses); 
// console.log(completeHouses);


// const firstBatch = ['Arryn', 'Frey', 'Greyjoy'];
// const secondBatch = ['Stark', 'Lannister', 'Tyrell'];

// const houses = [...firstBatch, ...secondBatch];

// console.log(houses); // ['Arryn','Frey','Greyjoy','Stark','Lannister','Tyrell']


// const firstBatch = ['Arryn', 'Frey'];
// const secondBatch = ['Stark', 'Lannister'];

// const houses = [...firstBatch, ...secondBatch];
// console.log(houses);

// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];
// // const housesInDebt = [...houses.slice(0, 4), ...houses.slice(5)];

// // console.log(housesInDebt); // ['Arryn','Frey','Greyjoy','Stark','Tyrell']

// const housesInDebt = [...houses.slice(0,4), ...houses.slice(5)];
// console.log(housesInDebt);


// const houses = ['Arryn', 'Frey', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell'];

// // Вертикальная запись удобнее для чтения
// const updatedHouses = [
//   ...houses.slice(0, 1),
//   'Frey of the Crossing',
//   ...houses.slice(2),
// ];

// console.log(updatedHouses);
// // ['Arryn', 'Frey of the Crossing', 'Greyjoy', 'Stark', 'Lannister', 'Tyrell']

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// const c = { x: 5, j: 10, ...a, z: 15, ...b };

// console.log(c); // {x: 0, j: 10, y: 2, z: 3}

// const lion = { hasTail: true, legs: 4 };
// const eagle = { canFly: true };

// const chimera = { ...lion, ...eagle };

// console.log(chimera); // {hasTail: true, legs: 4, canFly: true}


// const lion = {hasTail: true, legs: 4};
// const eagle = {canFly: true};

// const chimera = {...lion, ...eagle};
// console.log(chimera);

// const add = function(...args) {
//     console.log(args); // массив всех аргументов
//   };
  
//   add(1, 2, 3);
//   add(1, 2, 3, 4, 5);
  


// const add = function(...args) {
//     console.log(args);
// }
// add(1, 2, 3);
// add(4, 5, 6);


// const add = function(value, ...args) {
//     console.log(value); // первый аргумент
//     console.log(args); // массив всех остальных аргументов
//   };
  
//   add(10, 1, 2, 3);
//   add(15, 1, 2, 3, 4, 5);
  
// const add = function(value, ...args) {
//     console.log(value);
//     console.log(args);
// };


// add(10, 1, 2, 3);
// add(15, 1, 2, 3, 4, 5);

// const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   // Объявим переменные и присвоим им значения из объекта
// //   const { name, stars, status } = hotel;
// const {name, stars, status } = hotel;

//   console.log(name, stars, status); // "Resort Hotel", 5, undefined
  

//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
//   const { name: hotelName, stars, status: hotelStatus = 'empty' } = hotel;
  
//   console.log(hotelName, stars, hotelStatus);
//   // "Resort Hotel", 5, "empty"
  


//   const hotel = {
//     name: 'Resort Hotel',
//     stars: 5,
//     capacity: 100,
//   };
  
// //   const { name, ...rest } = hotel;
  
// //   console.log(name); // "Resort Hotel"
// //   console.log(rest); // {stars: 5, capacity: 100}
  
// const {name, ...rest} = hotel;
// console.log(name);
// console.log(rest);

// const rgb = [200, 255, 100];

// const [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100


// const rgb = [444, 666, 777];

// const [red, green, yellow] = rgb;

// console.log(`red: ${red}, green: ${green}, blue: ${yellow}`);

// const rgb = [200, 255, 100];
// let red, green, blue;

// [red, green, blue] = rgb;

// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}`);
// // Red: 200, Green: 255, Blue: 100



// const rgb = [200, 100, 255];

// // const [red, green, blue, alfa = 0.3] = rgb;

// // console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);
// // // Red: 200, Green: 100, Blue: 255, Alfa: 0.3


// const [red, green, blue, alfa = 7777] = rgb;
// console.log(`Red: ${red}, Green: ${green}, Blue: ${blue}, Alfa: ${alfa}`);

// const rgb = [200, 255, 100];


// // Red: 200, Colors: [255, 100]

// const [red, ...colors] = rgb;
// console.log(`Red: ${red}, Colors: ${colors}`);

// const rgb = [200, 100, 255];

// // const [, , blue] = rgb;

// // console.log(`Blue: ${blue}`); // Blue: 255


// const [, , blue] = rgb;
// console.log(`Blue: ${blue}`);
 