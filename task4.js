var res1 = "";
for (let index = 1; index < 11; index++) {
    res1+= index + " ";
}
console.log(res1);

var res2 = "";
for (let index = 1; index < 11; index++) {
    res2 += index*5 + " ";
}
console.log(res2);

let i=1,sum =0;
while (i<11) {
    sum+=i;
    i++;
}
console.log(sum);

let num1 = 10;
var res3 = "";
while(num1>0){
    res3 += num1 + " ";
    num1--;
}
console.log(res3);


let num2 =1;
var res4 = "";
do {
    res4 += num2 + " ";
    num2++;
} while (num2<6);
console.log(res4);


let num3 = 5;
let fact =1;
do {
    fact *= num3;
    num3--;
} while (num3>0);

console.log(fact);


for(let i =1;i<=5;i++){
    var res5 = "";
    for(let j=1;j<=i;j++){
        res5 += "* ";
    }
    console.log(res5);
}

let res6 = "";
for (let index = 1; index < 11; index++) {
    if(index == 5) continue;
    res6 += index + " ";
}
console.log(res6);

var res7 = "";
for (let index = 1; index < 11; index++) {
        res7 += index + " ";
        if(index== 7) break;    
}
console.log(res7);



// OUTPUT
// 1 2 3 4 5 6 7 8 9 10 
// 5 10 15 20 25 30 35 40 45 50 
// 55
// 10 9 8 7 6 5 4 3 2 1 
// 1 2 3 4 5 
// 120
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// 1 2 3 4 6 7 8 9 10 
// 1 2 3 4 5 6 7 