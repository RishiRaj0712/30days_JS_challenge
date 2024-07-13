var var1 = 69;
console.log(var1 , typeof(var1));

let var2 = "rishi_r01";
console.log(var2, typeof(var2));

const var3 = true;
console.log(var3, typeof(var3));

var1 = "raj";
console.log(var1, typeof(var1));

var2 = 32;
console.log(var2, typeof(var2));

//  Cannot do this! TypeError: Assignment to constant variable.
// var3 = false;
// console.log(var3, typeof(var3));

let nullvar = null;
console.log(nullvar, typeof(nullvar));

let undefinedvar ;
console.log(undefinedvar, typeof(undefinedvar));

let obj1 = {name : "Rishi" , age: 22};
console.log(obj1, typeof(obj1) , typeof(obj1.age));

let func1 = ()=>{return "Task 1"};
console.log(func1, typeof(func1));
