// Задача 3-1
// CRUD для свойств объекта
// С - create (создать)
// R - read (читать)
// U - update (обновить)
// D - delete (удалить)
// Напиши скрипт, который, для объекта user, последовательно:

// добавляет поле 'mood' со значением 'happy'
// добавляет поле 'full time' со значением true
// заменяет значение 'hobby' на 'skydiving'
// заменяет значение 'premium' на false
// в переменную message записывает содержимое объекта user:
// для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
// с помощью оператора for...of
// в формате ключ:значение
// c переносом строки ('\n')




let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};
user.mood = 'happy';
console.log(user.mood);


user['full time'] = true;
console.log(user['full time']);

user.hobby = 'skydiving';

user.premium = false;

//Write code under this line  
console.log(user);
//   message  {age} = user;
console.log(message);


const keys = Object.keys(user);

for (const key of keys) {
    message += `${key}: ${user[key]}\n`;

    console.log(user[key]);
  }
// const key = [];
// for (const key in user) {
//     console.log(user[key]);
// }
  
// for(key of keys) {
//     const key = [];

//     console.log(key)
// }
 
//console.log(message); 
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */















