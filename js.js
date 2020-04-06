// - створити функцію яка виводить масив
// function masive(a) {
//     let result=[];
//     for (let i = 0; i < a.length; i++) {
//         result[i]=a[i];
//     }
//     console.log(result);
// }
// let numbers = [0,1, 2, 5,10];
// masive(numbers);
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// function randomMasive(n,min,max) {
//     let massive=[];
// for (let i=0;i<n;i++){
//     massive[i]=Math.floor((Math.random()*max-min)+min);
//     }
// masive(massive);
// }
// randomMasive(10,0,36);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// let aa=(a)=>{
//     console.log(a);
//     return a;
// }
// let bb=(b)=>{
//     console.log(b);
//     return b;
// }
// let cc=(c)=>{
//     console.log(c);
//     return c;
// }
// let min=(a,b,c)=>{
//     if (a>b && a>c){
//         if (b>c){
//             cc(c);
//         }
//         else {
//             bb(b);
//         }
//     }
//     else if (b>a && b>c){
//         if (a>c){
//             cc(c);
//         }
//         else {
//             aa(a);
//         }
//     }
//     else {
//         if(a>b){
//             bb(b);
//         }
//         else {
//             aa(a);
//         }
//     }
// }
// min(199,244,500);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// let max=(a,b,c)=>{
//     if (a>b && a>c){
//         aa(a);
//     }
//     else if (b>a && b>c){
//         bb(b);
//     }
//     else {
//         cc(c);
//     }
// }
// max(199,244,500);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function args(a, b) {
//     console.log(arguments);
//     let min=0;
//     let max=0;
//     for (const aElement of arguments) {
//         if (aElement<min) {
//             min = aElement;
//         }
//     }
//         for (let aElement of arguments) {
//         if (aElement>max) {
//             max = aElement;
//         }
//     }
//     console.log(max);
//     return min;
//
// }
//
// args(10, 6, 0, 7, -5, 10, 200, 0);
// - створити функцію яка виводить масив
// function masive(a) {
//     let result=[];
//     for (let i = 0; i < a.length; i++) {
//         result[i]=a[i];
//     }
//     console.log(result);
// }
// let numbers = [0,1, 2, 5,10];
// masive(numbers);
//- створити функцію яка повертає найбільше число з масиву
// function maxNumber(a) {
//     let max=a[0];
//     for (let aElement of a) {
//         if (aElement>max) {
//             max = aElement;
//         }
//     }
//     return max;
// }
// let numbers = [0,456, 2, 5,10];
// console.log(maxNumber(numbers));
// - створити функцію яка повертає найменьше число з масиву
// function minNumber(a) {
//     let min=a[0];
//     for (let aElement of a) {
//         if (aElement<min) {
//             min = aElement;
//         }
//     }
//     return min;
// }
// let numbers = [34,456, 2, 5,10];
// console.log(minNumber(numbers));
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// let sumValue=(a)=>{
//     let sum=0;
//     for (let i = 0; i < a.length; i++) {
//         sum+=a[i];
//     }
//     return sum;
// }
// let numbers = [34,4, 2, 5,10];
// console.log(sumValue(numbers));
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let middleValue=(a)=>{
//     for (let i = 0; i < a.length; i++) {
//         a[i]=a[i]/2;
//     }
//     return a;
// }
// let numbers = [34,456, 2, 5,10];
// console.log(middleValue(numbers));
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let numberOfObject=(a)=>{
//     let number=0;
//     for (let i = 0; i < a.length; i++) {
//         if (typeof a[i]==='object'){
//             number++;
//         }
//     }
//     return number;
//}
// let cars=[
//     {model:'Mitsubishi', year: 2019, power:124 , color:'white'},
//     {model:'Hyundai', year:2010 , power:130 , color:'black'},
//     {model:'Fiesta', year:2015 , power:120 , color:'silver'},
//     {model:'Chevrolet', year:2014, power:134 , color:'red'},
//     {model:'Toyota', year:2010 , power:124 , color:'grey'},
//     {model:'Volkswagen', year:2000 , power:137 , color:'blue'},
//     {model:'Honda', year:2005 , power:135 , color:'dark blue'},
//     {model:'Lanos', year:2006, power:115 , color:'dark green'},
//     {model:'Kia', year:2013 , power:118 , color:'jellow'},
//     {model:'Nissan', year:2020 , power:138 , color:'claret'}
// ]
// console.log(numberOfObject(cars));
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// let numberOfMargin=(a)=>{
//     let number=0;
//
//     for (let object of a){
//         for (let key1 in object){
//             number++
//         }
//     }
//     return number;
//     }
// console.log(numberOfMargin(cars));
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     Приклад
//     [1,2,3,4]
//     [2,3,4,5]
//результат
//     [3,5,7,9]
// let sumOfElement=(a,b)=>{
//     let result=[];
//     if (a.length>b.length){
//         for (let i = 0; i < a.length; i++) {
//             a[i]=a[i]+b[i];
//             result.push(a[i]);
//         }
//     }
//     else {
//         for (let i = 0; i < b.length; i++) {
//             b[i]=a[i]+b[i];
//             result.push(b[i]);
//         }
//     }
//
//     return result;
// }
// let number1=[1,2,3,4];
// let number2=[2,3,4,5];
// console.log(number1);
// console.log(number2);
//
//
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let recave=(a,i)=>{
//     for (let j = 0; j < a.length; j++) {
//         if (j===i){
//             a.splice(i,2,a[j+1],a[j]);
//         }
//     }
//     console.log(a);
// }
// let numbers = [0,1,78,12,45,746,354,425,77,8,90,2, 5,10];
// recave(numbers,8);
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
//
//??Ця функція пряцює якщо немає двох нулів підряд, не розумію чому так?
// let nullTransfer=(arr)=>{
//     console.log(arr);
//     let number=0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i]===0){
//             arr.splice(i,1);
//             number++;
//         }
//     }
//     let nullMasive=[];
//     for (let i = 0; i < number; i++) {
//         nullMasive[i]=0;
//     }
//     Array.prototype.push.apply(arr,nullMasive);
//     console.log(arr);
//     console.log(numbers);
//     return numbers;
// }
// let numbers=[0,0,0,0,3];
// nullTransfer(numbers);
// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// function addition() {
//     let div=document.createElement('div');
//     div.innerText='Hello owu';
//     document.body.appendChild(div);
// }
// addition();
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// function addition(type,text) {
//     let div=document.createElement(type);
//     div.innerText=text;
//     document.body.appendChild(div);
// }
// addition('p','Hello world');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
//Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars=[
    {model:'Mitsubishi', year: 2019, power:124 , color:'white'},
    {model:'Hyundai', year:2010 , power:130 , color:'black'},
    {model:'Fiesta', year:2015 , power:120 , color:'silver'},
    {model:'Chevrolet', year:2014, power:134 , color:'red'},
    {model:'Toyota', year:2010 , power:124 , color:'grey'},
    {model:'Volkswagen', year:2000 , power:137 , color:'blue'},
    {model:'Honda', year:2005 , power:135 , color:'dark blue'},
    {model:'Lanos', year:2006, power:115 , color:'dark green'},
    {model:'Kia', year:2013 , power:118 , color:'jellow'},
    {model:'Nissan', year:2020 , power:138 , color:'claret'}
]
let masive=(a,type)=>{
let container=document.getElementById(type);

        for (let object of a){
            let div=document.createElement('div');
            div.innerText+=???;
            container.appendChild(div);
        }
    }

masive(cars,'div');
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок
// function f(a,id) {
//     let div=
// }
//



// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
// let usersWithId = [
// {id: 1, name: 'vasya', age: 31, status: false},
// {id: 2, name: 'petya', age: 30, status: true},
// {id: 3, name: 'kolya', age: 29, status: true},
// {id: 4, name: 'olya', age: 28, status: false},
// ];
// let citiesWithId = [
// {user_id: 3, country: 'USA', city: 'Portland'},
// {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
// {user_id: 2, country: 'Poland', city: 'Krakow'},
// {user_id: 4, country: 'USA', city: 'Miami'},
// ];
// // Частковий приклад реультату:
// let userdCitiesWithId=(a,b)=>{
//     for (const aID of a) {
//         for (const bID of b)
//         {
//             if( aID.id===bID.user_id){
//
//                 aID.address=bID;
//                 console.log(a);
//
//             }
//         }
//     }
// }
// userdCitiesWithId(usersWithId,citiesWithId);
