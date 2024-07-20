let name = "Rishi Raj";
let age = 44;
let str1 = `Hi ${name}, Welcome to ${age}+ club.`;
let str2 = `Hey ${name}, Hope you are fine.
You can acces your credit card and uses their most common features.
The age eligibility for the card holder is ${age} years.`;
console.log(str1);
console.log(str2);


let arr1 = [1,2,3,4,5,6,7,8,9,10];
let [a,b,...rest]  = arr1;
console.log(a);
console.log(b);
console.log(rest);


let book1 = {
    "title":"Hello World",
    "author":" Rishi Raj",
    "year":"1947"
};
let {title,author} = book1;
console.log(title, author);


let arr2 = [1,2,3];
let arr3 = [4,5,6,7];
let arr4 = [...arr2,...arr3];
console.log(arr4);


let func1 = (...nums)=>{
    return nums.reduce((total, curr)=>total+curr,0);
}
let res1 = func1(1,2,3,4,5);
let res2 = func1(1,2,3,4,5,6,7,8,9,10);
console.log(res1,res2);


let func2 = (a,b=1)=>{
    return a*b;
}
let res3 = func2(5,6);
let res4 = func2(5);
console.log(res3,res4);


let person = {
    name,
    age,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    },
    updateAge(newAge) {
        this.age = newAge;
        console.log(`My age is now updated to ${this.age}.`);
    }
};
console.log(person.name);
console.log(person.age);
person.greet();
person.updateAge(69);
console.log(person);


let propName1 = 'firstName';
let propName2 = 'lastname';
let propName3 = 'age';
let person2 ={
    [propName1] : "Rishi",
    [propName2] : "Raj",
    [propName3] : 44
}
console.log(person2);
console.log(person2.firstName);
console.log(person2.lastname);
console.log(person2.age);


// OUTPUT
// Hi Rishi Raj, Welcome to 44+ club.
// Hey Rishi Raj, Hope you are fine.
// You can acces your credit card and uses their most common features.
// The age eligibility for the card holder is 44 years.
// 1
// 2
// [
//   3, 4, 5,  6,
//   7, 8, 9, 10
// ]
// Hello World  Rishi Raj
// [
//   1, 2, 3, 4,
//   5, 6, 7
// ]
// 15 55
// 30 5
// Rishi Raj
// 44
// Hello, my name is Rishi Raj and I am 44 years old.
// My age is now updated to 69.
// {
//   name: 'Rishi Raj',
//   age: 69,
//   greet: [Function: greet],
//   updateAge: [Function: updateAge]
// }
// { firstName: 'Rishi', lastname: 'Raj', age: 44 }
// Rishi
// Raj
// 44