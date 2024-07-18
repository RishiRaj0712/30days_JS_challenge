const arr1 = [1,2,3,4,5];
console.log(arr1);
console.log("first element - " , arr1[0]);
console.log("last element - ", arr1[arr1.length-1]);

arr1.push(6);
console.log(arr1);

arr1.pop();
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift(1);
console.log(arr1);

const arr2 = arr1.map(arr1 => arr1 * 2);
console.log(arr2);

const arr3 = arr1.filter(arr1 => arr1%2 ==0);
console.log(arr3);

const sum = arr1.reduce((accumulator , currvalue)=> accumulator+currvalue, 0);
const prod = arr1.reduce((accumulator , currvalue)=> accumulator*currvalue, 1);
console.log(sum, prod);

for(let i =0;i<arr1.length;i++){
    console.log(arr1[i]);
}

arr1.forEach(ele =>{console.log(ele);});

const arr4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.log(arr4);

let arrr5 = [];
for(let r =0;r<3;r++){
    arrr5[r]=[];
    for(let c =0;c<3;c++){
        arrr5[r][c] = r*3 + c+1; 
    }
}
console.log(arrr5);
console.log(arrr5[1][1]);
console.log(arrr5[1]);

// OUTPUT
// [ 1, 2, 3, 4, 5 ]
// first element -  1
// last element -  5
// [ 1, 2, 3, 4, 5, 6 ]
// [ 1, 2, 3, 4, 5 ]
// [ 2, 3, 4, 5 ]
// [ 1, 2, 3, 4, 5 ]
// [ 2, 4, 6, 8, 10 ]
// [ 2, 4 ]
// 15 120
// 1
// 2
// 3
// 4
// 5
// 1
// 2
// 3
// 4
// 5
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// [ [ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ] ]
// 5
// [ 4, 5, 6 ]