const func1 = (num1)=>{
     (num1%2==0)? console.log("Even"):console.log("Odd");
}
func1(5);
func1(6);
func1(-13);
func1(-14);

const func2 = (num2)=>{
    return (num2*num2);
}
console.log(func2(4));


const func3 = (num3,num4)=>{
    if(num3>num4)console.log(num3 + " is larger.");
    else console.log(num4 + " is larger.");
}
func3(3,7);
func3(-12,-43)


const func4 = (str1, str2)=>{
    return str1 + str2;
}

console.log(func4("hello"," world"));

const func5 = (num5, num6)=>{
    return num5 + num6;
}
console.log(func5(4,7));


const ch = 'r';
const func6 = (str1) =>{
    for(let i =0;i<str1.length;i++){
        if(str1[i]===ch) return true;
    }
    return false;
}
console.log(func6("aishi"));


const func7 =(num6,num7=5)=>{
    return num6*num7;
}
console.log(func7(3,7));
console.log(func7(3));


const func8 = (name, age= 18)=>{
    return `Hi ${name} !. Welcome to ${age}+ club. `
}
console.log(func8("rishi", 21));
console.log(func8("rishi"));


func9 = ()=>{
    console.log("Hello!");
}
const func10 = (funct,num1)=>{
    for (let i =0;i<num1;i++){
        funct();
    }
}
func10(func9, 5);


const func11 = (funct1, funct2, value) => {
    const first = funct1(value);
    return funct2(first);
}
console.log(func11(func7,func2,3));


// OUTPUT
// Odd
// Even
// Odd
// Even
// 16
// 7 is larger.
// -12 is larger.
// hello world
// 11
// false
// 21
// 15
// Hi rishi !. Welcome to 21+ club. 
// Hi rishi !. Welcome to 18+ club. 
// Hello!
// Hello!
// Hello!
// Hello!
// Hello!
// 225